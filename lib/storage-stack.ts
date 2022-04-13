import {Construct} from "constructs";
import {aws_s3} from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb"
import {BucketEncryption} from "aws-cdk-lib/aws-s3";

interface StorageStackProps {

}

export class StorageStack extends Construct{
    constructor(scope: Construct, id: string, props?: StorageStackProps) {
        super(scope, id);

        const bucket = new aws_s3.Bucket(this,"databucket", {
            encryption: BucketEncryption.S3_MANAGED
        });

        const table = new dynamodb.Table(this,"dataTable", {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING}
        })
    }
}