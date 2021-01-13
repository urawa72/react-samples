#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CognitoSpaStack } from '../lib/cognito-spa-stack';
import { CognitoSpaAppStack } from '../lib/cognito-spa-app-stack';

const app = new cdk.App();
new CognitoSpaStack(app, 'CognitoSpaStack');
new CognitoSpaAppStack(app, 'CognitoSpaAppStack');
