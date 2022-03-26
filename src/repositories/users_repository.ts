import { CreateUserModel } from '@/services'
import { User, IUserRepo } from '@/repositories'
import { client as dynamodb } from '@/config/db/dynamodb'

const TableName = 'Users'
export class UserRepo implements IUserRepo {
  async create (data: CreateUserModel): Promise<User> {
    const user = {
      id: data.id,
      name: data.name,
      email: data.email,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    }

    const result = await dynamodb.put({ TableName, Item: user }).promise()
    if (result.$response.error) {
      throw Error('error creating user: ' + result.$response.error)
    }

    return user
  }
}