#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { Auth0SpaStack } from "../lib/auth0-spa-stack";

const app = new cdk.App();
new Auth0SpaStack(app, "Auth0SpaStack");
