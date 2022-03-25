import { CreateUserModel } from '@/services'
import { User, IUserRepo } from '@/repositories'

const db = new Set<User>()

export class UserRepo implements IUserRepo {
  create (data: CreateUserModel): Promise<User> {
    const userToCreate = {
      id: data.id,
      name: data.name,
      email: data.email,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    }

    db.add(userToCreate)

    return Promise.resolve(userToCreate)
  }
}