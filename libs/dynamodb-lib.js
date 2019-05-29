import Aws from 'aws-sdk'

export const call = (action, params) => new Aws.DynamoDB.DocumentClient()[action](params).promise()
