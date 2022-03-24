import { APIGatewayEvent } from 'aws-lambda'

export async function hello (event: APIGatewayEvent) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'yeh yeah!',
      params: event.queryStringParameters,
    }),
  }
}