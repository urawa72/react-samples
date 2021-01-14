import * as cdk from "@aws-cdk/core";
import * as cognito from "@aws-cdk/aws-cognito";
// import * as lambda from "@aws-cdk/aws-lambda";
// import * as apigateway from "@aws-cdk/aws-apigateway";

export class CdkCognitoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, "CognitoUserPool", {
      userPoolName: "amplify-auth-ui",
      selfSignUpEnabled: true,
      customAttributes: {
        member_status: new cognito.StringAttribute(),
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
      },
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
    });

    const domain = userPool.addDomain("CognitoDomain", {
      cognitoDomain: {
        domainPrefix: "amplify-auth-ui-20210114",
      },
    });

    const client = userPool.addClient("CognitoUserPoolClient", {
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
          implicitCodeGrant: true,
        },
        scopes: [
          cognito.OAuthScope.PHONE,
          cognito.OAuthScope.EMAIL,
          cognito.OAuthScope.OPENID,
          cognito.OAuthScope.COGNITO_ADMIN,
          cognito.OAuthScope.PROFILE,
        ],
        callbackUrls: ["http://localhost:3000"],
      },
    });

    //   const helloFunction = new lambda.Function(this, "HelloFunction", {
    //     code: lambda.Code.fromAsset("lambda"),
    //     handler: "index.handler",
    //     runtime: lambda.Runtime.NODEJS_12_X,
    //     memorySize: 256,
    //   });
    //
    //   const restApi = new apigateway.RestApi(this, "RestApi", {
    //     restApiName: "Hello API",
    //     deployOptions: {
    //       stageName: "dev",
    //     },
    //   });
    //
    //   const cognitoAuthorizer = new apigateway.CfnAuthorizer(
    //     this,
    //     "CognitoAuthorizer",
    //     {
    //       name: "CognitoAuthorizer",
    //       type: apigateway.AuthorizationType.COGNITO,
    //       providerArns: [userPool.userPoolArn],
    //       identitySource: "method.request.header.Authorization",
    //       restApiId: restApi.restApiId,
    //     }
    //   );
    //
    //   const helloResource = restApi.root.addResource("hello");
    //   helloResource.addMethod(
    //     "GET",
    //     new apigateway.LambdaIntegration(helloFunction),
    //     {
    //       authorizationType: apigateway.AuthorizationType.COGNITO,
    //       authorizer: {
    //         authorizerId: cognitoAuthorizer.ref,
    //       },
    //     }
    //   );
    //   helloResource.addCorsPreflight({
    //     allowHeaders: apigateway.Cors.DEFAULT_HEADERS,
    //     allowOrigins: apigateway.Cors.ALL_ORIGINS,
    //     allowMethods: ["GET", "OPTIONS"],
    //   });

    new cdk.CfnOutput(this, "CognitoUserPoolId", {
      value: userPool.userPoolId,
    });
    new cdk.CfnOutput(this, "CognitoDomain", {
      value: domain.domainName,
    });
    new cdk.CfnOutput(this, "CognitoUserPoolClientId", {
      value: client.userPoolClientId,
    });
  }
}
