import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as cognito from "@aws-cdk/aws-cognito";

export class CognitoSpaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloFunction = new lambda.Function(this, "HelloFunction", {
      code: lambda.Code.fromAsset("lambda"),
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      memorySize: 256,
    });

    const restApi = new apigateway.RestApi(this, "RestApi", {
      restApiName: "Hello API",
      deployOptions: {
        stageName: "dev",
      },
    });

    const userPool = new cognito.UserPool(this, "HelloUserPool", {
      userPoolName: "hello-user-pool",
      selfSignUpEnabled: true,
      customAttributes: {
        member_status: new cognito.StringAttribute(),
      },
      signInAliases: {
        email: true,
      },
    });

    userPool.addClient("hello-app-client", {
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
        callbackUrls: ["https://www.google.com"],
      },
    });

    const cognitoAuthorizer = new apigateway.CfnAuthorizer(
      this,
      "CognitoAuthorizer",
      {
        name: "CognitoAuthorizer",
        type: apigateway.AuthorizationType.COGNITO,
        providerArns: [userPool.userPoolArn],
        identitySource: "method.request.header.Authorization",
        restApiId: restApi.restApiId,
      }
    );

    const helloResource = restApi.root.addResource("hello");
    helloResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(helloFunction),
      {
        authorizationType: apigateway.AuthorizationType.COGNITO,
        authorizer: {
          authorizerId: cognitoAuthorizer.ref,
        },
      }
    );
    helloResource.addCorsPreflight({
      allowHeaders: apigateway.Cors.DEFAULT_HEADERS,
      allowOrigins: apigateway.Cors.ALL_ORIGINS,
      allowMethods: ["GET", "OPTIONS"],
    });
  }
}
