# AWS Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio website to AWS using the provided CloudFormation template and deployment script.

## Prerequisites

1. **AWS Account**: You need an active AWS account
2. **AWS CLI**: Install and configure the AWS CLI
3. **Domain Name**: (Optional) A registered domain name
4. **SSL Certificate**: (Optional) An SSL certificate from AWS Certificate Manager

## Quick Start

### Option 1: Automated Deployment (Recommended)

```bash
# Make the deployment script executable
chmod +x deployment/deploy.sh

# Deploy with domain name and SSL certificate
./deployment/deploy.sh -d portfolio.example.com -c arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012

# Deploy without SSL (HTTP only)
./deployment/deploy.sh -d portfolio.example.com
```

### Option 2: Manual Deployment

1. **Deploy Infrastructure**:
```bash
aws cloudformation deploy \
  --template-file deployment/cloudformation.yaml \
  --stack-name portfolio-website-stack \
  --parameter-overrides ParameterKey=DomainName,ParameterValue=portfolio.example.com \
  --capabilities CAPABILITY_IAM \
  --region us-east-1
```

2. **Build and Upload**:
```bash
# Build the application
npm run build

# Get S3 bucket name from CloudFormation outputs
S3_BUCKET=$(aws cloudformation describe-stacks \
  --stack-name portfolio-website-stack \
  --query 'Stacks[0].Outputs[?OutputKey==`S3BucketName`].OutputValue' \
  --output text)

# Upload files to S3
aws s3 sync build/ s3://$S3_BUCKET --delete

# Invalidate CloudFront cache
CLOUDFRONT_ID=$(aws cloudformation describe-stacks \
  --stack-name portfolio-website-stack \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
  --output text)

aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"
```

## Detailed Setup Instructions

### 1. AWS CLI Configuration

Install AWS CLI if not already installed:
```bash
# macOS
brew install awscli

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Windows
# Download and run the AWS CLI MSI installer
```

Configure AWS CLI:
```bash
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Enter your default region (e.g., us-east-1)
# Enter your default output format (e.g., json)
```

### 2. SSL Certificate Setup (Optional but Recommended)

To enable HTTPS, you need an SSL certificate from AWS Certificate Manager:

1. **Request a certificate in AWS Console**:
   - Go to AWS Certificate Manager in the `us-east-1` region
   - Click "Request a certificate"
   - Choose "Request a public certificate"
   - Enter your domain name (e.g., `portfolio.example.com`)
   - Add `*.portfolio.example.com` for wildcard support
   - Choose DNS validation
   - Complete the DNS validation process

2. **Note the Certificate ARN** for use in deployment

### 3. Domain Name Setup

If you have a domain name:

1. **After deployment**, get the CloudFront distribution domain name
2. **Create a CNAME record** in your DNS provider:
   - Name: `portfolio` (or your subdomain)
   - Value: `d1234567890123.cloudfront.net` (your CloudFront domain)

### 4. Deployment Script Options

The deployment script supports various options:

```bash
# Deploy everything (infrastructure + build + upload)
./deployment/deploy.sh -d portfolio.example.com -c cert-arn

# Deploy only infrastructure
./deployment/deploy.sh --deploy-only -d portfolio.example.com

# Build and upload only (infrastructure already exists)
./deployment/deploy.sh --build-only

# Custom stack name and region
./deployment/deploy.sh -s my-portfolio-stack -r us-west-2 -d portfolio.example.com

# Show help
./deployment/deploy.sh --help
```

## Architecture Overview

The deployment creates the following AWS resources:

### Core Infrastructure
- **S3 Bucket**: Hosts the static website files
- **CloudFront Distribution**: CDN for global content delivery
- **Origin Access Control**: Secures S3 bucket access

### CI/CD Pipeline (Optional)
- **CodeCommit Repository**: Git repository for source code
- **CodeBuild Project**: Builds and tests the application
- **CodePipeline**: Automates the build and deployment process

### Security & Access
- **IAM Roles**: Proper permissions for CodeBuild and CodePipeline
- **SSL Certificate**: HTTPS encryption via CloudFront

## Environment Variables

The build process supports environment variables for configuration:

```bash
# Create .env file for different environments
cp .env.example .env.production

# Edit environment-specific variables
REACT_APP_API_URL=https://api.portfolio.example.com
REACT_APP_CONTACT_EMAIL=contact@portfolio.example.com
REACT_APP_ANALYTICS_ID=GA-TRACKING-ID
```

## Monitoring and Maintenance

### CloudWatch Monitoring
- CloudFront metrics are automatically available in CloudWatch
- Set up alarms for error rates, latency, and traffic patterns

### Cost Optimization
- **S3**: Only pay for storage and requests
- **CloudFront**: Free tier includes 1TB data transfer per month
- **CodeBuild**: Pay per build minute (free tier: 100 build minutes/month)

### Updates and Maintenance
```bash
# Update the website
npm run build
./deployment/deploy.sh --build-only

# Update infrastructure
# Modify cloudformation.yaml and run:
./deployment/deploy.sh --deploy-only

# Full update (infrastructure + build)
./deployment/deploy.sh
```

## Troubleshooting

### Common Issues

1. **Build Failures**:
   ```bash
   # Check build logs
   npm run build

   # Fix any TypeScript errors
   npm run type-check
   ```

2. **CloudFront Caching**:
   ```bash
   # Clear CloudFront cache
   aws cloudfront create-invalidation --distribution-id DISTRIBUTION_ID --paths "/*"
   ```

3. **SSL Certificate Issues**:
   - Ensure certificate is in `us-east-1` region
   - Verify DNS validation is complete
   - Check certificate ARN format

4. **Permission Errors**:
   ```bash
   # Verify AWS credentials
   aws sts get-caller-identity

   # Check IAM permissions for CloudFormation, S3, CloudFront
   ```

### Useful Commands

```bash
# Check stack status
aws cloudformation describe-stacks --stack-name portfolio-website-stack

# List all resources in stack
aws cloudformation list-stack-resources --stack-name portfolio-website-stack

# View stack events
aws cloudformation describe-stack-events --stack-name portfolio-website-stack

# Delete stack (cleanup)
aws cloudformation delete-stack --stack-name portfolio-website-stack
```

## Security Best Practices

1. **Use least privilege IAM policies**
2. **Enable CloudTrail for audit logging**
3. **Use SSL/TLS encryption (HTTPS)**
4. **Regularly update dependencies**
5. **Monitor access logs**
6. **Use environment variables for sensitive data**

## Cost Estimation

Typical monthly costs for a portfolio website:

- **S3 Storage**: $0.023/GB (first 50TB)
- **CloudFront**: $0.085/GB (first 10TB)
- **CodeBuild**: $0.005/build minute
- **Route 53**: $0.50/hosted zone (if using custom domain)

**Estimated monthly cost**: $1-10 for typical portfolio traffic

## Support

For issues and questions:
1. Check AWS CloudFormation documentation
2. Review AWS CLI documentation
3. Check the project's GitHub issues
4. AWS Support (if you have a support plan)

## Cleanup

To remove all resources:

```bash
# Delete CloudFormation stack
aws cloudformation delete-stack --stack-name portfolio-website-stack

# Wait for deletion to complete
aws cloudformation wait stack-delete-complete --stack-name portfolio-website-stack

# Manually delete S3 buckets if they contain files
aws s3 rm s3://your-bucket-name --recursive
aws s3 rb s3://your-bucket-name
```

**Note**: Some resources like S3 buckets with content may need manual deletion.
