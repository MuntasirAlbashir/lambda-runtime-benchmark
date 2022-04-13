import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {StorageStack} from "./storage-stack";

// import * as sqs from 'aws-cdk-lib/aws-sqs';


export class LambdaRuntimeBenchmarkStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
        const storageStack = new StorageStack(this, "StorageStack");
    }
}
