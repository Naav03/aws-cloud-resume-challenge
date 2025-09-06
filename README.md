# AWS Cloud Resume Challenge

This repository contains my implementation of the Cloud Resume Challenge. It demonstrates AWS and DevOps skills by building a serverless resume website with a visitor counter and CI/CD pipeline.

The Cloud Resume Challenge is a project designed to showcase cloud skills. The goal is to create a resume website hosted on AWS with a dynamic visitor counter, API integration, and automated deployments.

This project includes:
Static resume website hosted on Amazon S3  
Global content delivery using CloudFront  
Visitor counter using DynamoDB and AWS Lambda  
API integration with API Gateway  
Secure IAM roles and policies  
CI/CD pipeline using GitHub Actions  

Architecture:  
![Architecture Diagram](./img/architecture.png)  

AWS Services Used:  
Amazon S3 – Static website hosting  
CloudFront – Content Delivery Network (CDN)  
DynamoDB – NoSQL database for visitor counter  
AWS Lambda – Serverless function for updating count  
API Gateway – REST API for Lambda integration  
GitHub Actions – CI/CD automation  

Tech Stack:  
Frontend: HTML, CSS, JavaScript  
Backend: AWS Lambda (Python)  
Database: DynamoDB  
Deployment: AWS S3, CloudFront  
CI/CD: GitHub Actions  

Project Structure:
aws-cloud-resume-challenge/
│── .github/workflows/
│── img/
│── infra/
│── lambda-function/
│── website/
│── README.md

Steps to Deploy:  
1. Created an S3 bucket and enabled static website hosting.  
2. Uploaded the website files (index.html, style.css, script.js) to S3.  
3. Set up CloudFront for global content delivery.  
4. Created a DynamoDB table named VisitorCount with a primary key id.  
5. Wrote and deployed an AWS Lambda function to update and retrieve visitor count.  
6. Integrated Lambda with API Gateway to expose it as an API endpoint.  
7. Updated JavaScript in the website to call the API for visitor count.  
8. Configured IAM roles and permissions for Lambda and DynamoDB.  
9. Set up a GitHub Actions workflow to deploy the website to S3 automatically on push.  
10. Tested the website, API, and visitor counter.  

