# User Authentication with AWS Amplify and Cognito

*The code is a modification of the code from [Serverless Stack](https://serverless-stack.com/#table-of-contents). All credit goes to the people who built that awesome website: [Frank Wang](https://github.com/fwang) and [Jay V](https://github.com/jayair).*

The app lets you: 
- Create an account with your email address.
- Verify your account with AWS Cognito.
- Login and logout.
- Reset your password by sending a confirmation code to your email.

> :construction: TODO:
- User settings: change email, change password.
- Code splitting for Router.

Main differences between this app and the example on serverless-stack.com:

- This app uses Bootstrap 4 with [reactstrap](https://reactstrap.github.io/) instead of Bootstrap 3.

## Installation

You need:
- [AWS account](https://serverless-stack.com/chapters/create-an-aws-account.html)
- [IAM user](https://serverless-stack.com/chapters/create-an-iam-user.html)
- [AWS CLI](https://serverless-stack.com/chapters/configure-the-aws-cli.html)
- [User Pool in AWS Cognito](https://serverless-stack.com/chapters/create-a-cognito-user-pool.html)

You don't need S3, Lambda, API Gateway or DynamoDB for **this example**.

## Usage

You can use each component inside `./src/components` for your app. Make sure you have all the dependencies required in each component.

You can also copy the whole `./src` folder and use it as a standalone component to authenticate user for your app.

## Diagnosis

Follow the guide on [Serverless Stack website](https://serverless-stack.com/#table-of-contents).

## Author(s)

* <b>Viet Nguyen</b>
    > vnguyen@ndi.org &nbsp;&middot;&nbsp;
    > [LinkedIn](https://www.linkedin.com/in/nguyendviet)

**[⬆ back to top](#documentation)**
