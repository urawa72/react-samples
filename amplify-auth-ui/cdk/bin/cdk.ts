#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCognitoStack } from '../lib/cdk-cognito-stack';

const app = new cdk.App();
new CdkCognitoStack(app, 'CdkCognitoStack');
