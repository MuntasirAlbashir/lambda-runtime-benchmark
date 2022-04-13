import {Stack} from "aws-cdk-lib";
import {Template} from "aws-cdk-lib/assertions";
import {StorageStack} from "../lib/storage-stack";

describe("StorageStack", () =>{
    const stack = new Stack();
    new StorageStack(stack,"TestStack")
    const template = Template.fromStack(stack)

    test("should create an S3 Bucket with SSE enabled", () =>{
        template.hasResource("AWS::S3::Bucket", 1)
        template.hasResourceProperties("AWS::S3::Bucket", {
            BucketEncryption: {
                ServerSideEncryptionConfiguration: [
                    {
                        ServerSideEncryptionByDefault: {
                            SSEAlgorithm: "AES256"
                        }
                    }
                ]
            }
        })
    })

    test("should create a dynamodb table", () =>{
        template.hasResource("AWS::DynamoDB::Table", 1)
    })


})