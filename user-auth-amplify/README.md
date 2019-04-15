# User Authentication with AWS Amplify and Cognito

## Documentation

*The code is a modification of the code from [Serverless Stack](https://serverless-stack.com/#table-of-contents). All credit goes to the people who built that awesome website: [Frank Wang](https://github.com/fwang) and [Jay V](https://github.com/jayair).*

### Table of Contents

1. [Intro](#intro)
1. [Demo](#demo)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Diagnosis](#diagnosis)

## Intro

The app lets you: 
- Create an account with your email address.
- Verify your account with AWS Cognito.
- Login and logout.
- Reset your password by sending a confirmation code to your email.

**:construction: TODO:**
- User settings: change email, change password.
- Code splitting for Router.

Main difference(s) between this app and the example on serverless-stack.com:

- This app uses Bootstrap 4 with [reactstrap](https://reactstrap.github.io/) instead of Bootstrap 3.

## Demo

- In an [S3 bucket](http://react-component-user-auth-amplify.s3-website-us-east-1.amazonaws.com/).

## Installation

You need:
- [AWS account](https://serverless-stack.com/chapters/create-an-aws-account.html)
- [IAM user](https://serverless-stack.com/chapters/create-an-iam-user.html)
- [AWS CLI](https://serverless-stack.com/chapters/configure-the-aws-cli.html)
- [User Pool in AWS Cognito](https://serverless-stack.com/chapters/create-a-cognito-user-pool.html)

You don't need S3, Lambda, API Gateway or DynamoDB for **this example**.

Create a `config.js` file inside `./src` that looks like `./src/config.js-example`. 

**NOTE:** It is ok to expose `USER_POOL_ID`, `APP_CLIENT_ID` and `IDENTITY_POOL_ID` as [explained by AWS](https://forums.aws.amazon.com/thread.jspa?threadID=245752&tstart=200). If you want to secure API calls to the back-end (DynamoDB, S3, etc.), [use API Gateway with Cognito](https://aws.amazon.com/blogs/mobile/aws-mobile-app-backend-with-hybrid-apps/), but that is out of the scope of this example.


## Usage

You can use each component inside `./src/components` for your app. Make sure you have all the dependencies required in each component.

You can also copy the whole `./src` folder and use it as a standalone component to authenticate user for your app.

## Diagnosis

Follow the guide on [Serverless Stack website](https://serverless-stack.com/#table-of-contents).

## Author(s)

* <b>Viet Nguyen</b>
    > vnguyen@ndi.org &nbsp;&middot;&nbsp;
    > [LinkedIn](https://www.linkedin.com/in/nguyendviet)

**[⬆ back to top](#table-of-contents)**
