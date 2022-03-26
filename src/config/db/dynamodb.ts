import * as AWS from 'aws-sdk'

export const client = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1',
  endpoint: 'http://localhost:4566',
})