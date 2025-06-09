#!/bin/bash

# Portfolio Website AWS Deployment Script
# This script deploys the portfolio website to AWS using CloudFormation

set -e

# Configuration
STACK_NAME="portfolio-website-stack"
REGION="us-east-1"
DOMAIN_NAME=""
CERTIFICATE_ARN=""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if AWS CLI is installed and configured
check_aws_cli() {
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed. Please install it first."
        exit 1
    fi

    if ! aws sts get-caller-identity &> /dev/null; then
        print_error "AWS CLI is not configured. Please run 'aws configure' first."
        exit 1
    fi

    print_success "AWS CLI is installed and configured"
}

# Function to validate required parameters
validate_parameters() {
    if [ -z "$DOMAIN_NAME" ]; then
        read -p "Enter your domain name (e.g., portfolio.example.com): " DOMAIN_NAME
        if [ -z "$DOMAIN_NAME" ]; then
            print_error "Domain name is required"
            exit 1
        fi
    fi

    if [ -z "$CERTIFICATE_ARN" ]; then
        print_warning "SSL Certificate ARN not provided. The stack will be created without HTTPS."
        print_warning "You can add the certificate ARN later and update the stack."
        read -p "Enter SSL Certificate ARN (or press Enter to skip): " CERTIFICATE_ARN
    fi
}

# Function to deploy CloudFormation stack
deploy_stack() {
    print_status "Deploying CloudFormation stack: $STACK_NAME"

    PARAMS="ParameterKey=DomainName,ParameterValue=$DOMAIN_NAME"

    if [ -n "$CERTIFICATE_ARN" ]; then
        PARAMS="$PARAMS ParameterKey=CertificateArn,ParameterValue=$CERTIFICATE_ARN"
    fi

    aws cloudformation deploy \
        --template-file deployment/cloudformation.yaml \
        --stack-name $STACK_NAME \
        --parameter-overrides $PARAMS \
        --capabilities CAPABILITY_IAM \
        --region $REGION

    if [ $? -eq 0 ]; then
        print_success "CloudFormation stack deployed successfully"
    else
        print_error "Failed to deploy CloudFormation stack"
        exit 1
    fi
}

# Function to get stack outputs
get_stack_outputs() {
    print_status "Retrieving stack outputs..."

    S3_BUCKET=$(aws cloudformation describe-stacks \
        --stack-name $STACK_NAME \
        --region $REGION \
        --query 'Stacks[0].Outputs[?OutputKey==`S3BucketName`].OutputValue' \
        --output text)

    CLOUDFRONT_ID=$(aws cloudformation describe-stacks \
        --stack-name $STACK_NAME \
        --region $REGION \
        --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
        --output text)

    WEBSITE_URL=$(aws cloudformation describe-stacks \
        --stack-name $STACK_NAME \
        --region $REGION \
        --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
        --output text)

    CODECOMMIT_URL=$(aws cloudformation describe-stacks \
        --stack-name $STACK_NAME \
        --region $REGION \
        --query 'Stacks[0].Outputs[?OutputKey==`CodeCommitRepoCloneUrl`].OutputValue' \
        --output text)

    echo
    echo "=========================="
    echo "   DEPLOYMENT COMPLETE   "
    echo "=========================="
    echo
    print_success "S3 Bucket: $S3_BUCKET"
    print_success "CloudFront Distribution ID: $CLOUDFRONT_ID"
    print_success "Website URL: $WEBSITE_URL"
    print_success "CodeCommit Repository: $CODECOMMIT_URL"
    echo
}

# Function to build and deploy the website
build_and_deploy() {
    print_status "Building the React application..."

    # Install dependencies and build
    npm ci
    npm run build
    npm test -- --coverage --watchAll=false

    if [ $? -ne 0 ]; then
        print_error "Build or tests failed"
        exit 1
    fi

    print_success "Build completed successfully"

    # Upload to S3
    print_status "Uploading build files to S3..."
    aws s3 sync build/ s3://$S3_BUCKET --delete --region $REGION

    # Invalidate CloudFront cache
    print_status "Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_ID \
        --paths "/*" \
        --region $REGION

    print_success "Website deployed successfully!"
    print_success "Your portfolio is now live at: $WEBSITE_URL"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo "Options:"
    echo "  -d, --domain DOMAIN     Domain name for the website"
    echo "  -c, --cert-arn ARN      SSL Certificate ARN"
    echo "  -r, --region REGION     AWS Region (default: us-east-1)"
    echo "  -s, --stack-name NAME   CloudFormation stack name"
    echo "  --deploy-only           Only deploy infrastructure (skip build)"
    echo "  --build-only            Only build and upload (skip infrastructure)"
    echo "  -h, --help              Show this help message"
    echo
    echo "Examples:"
    echo "  $0 -d portfolio.example.com -c arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012"
    echo "  $0 --domain portfolio.example.com --deploy-only"
    echo "  $0 --build-only"
}

# Parse command line arguments
DEPLOY_ONLY=false
BUILD_ONLY=false

while [[ $# -gt 0 ]]; do
    case $1 in
        -d|--domain)
            DOMAIN_NAME="$2"
            shift 2
            ;;
        -c|--cert-arn)
            CERTIFICATE_ARN="$2"
            shift 2
            ;;
        -r|--region)
            REGION="$2"
            shift 2
            ;;
        -s|--stack-name)
            STACK_NAME="$2"
            shift 2
            ;;
        --deploy-only)
            DEPLOY_ONLY=true
            shift
            ;;
        --build-only)
            BUILD_ONLY=true
            shift
            ;;
        -h|--help)
            show_usage
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
done

# Main execution
print_status "Starting AWS deployment for Portfolio Website"
print_status "Stack Name: $STACK_NAME"
print_status "Region: $REGION"

check_aws_cli

if [ "$BUILD_ONLY" = true ]; then
    print_status "Build-only mode: Skipping infrastructure deployment"
    validate_parameters
    get_stack_outputs
    build_and_deploy
elif [ "$DEPLOY_ONLY" = true ]; then
    print_status "Deploy-only mode: Skipping build and upload"
    validate_parameters
    deploy_stack
    get_stack_outputs
else
    validate_parameters
    deploy_stack
    get_stack_outputs
    build_and_deploy
fi

print_success "Deployment process completed successfully!"
