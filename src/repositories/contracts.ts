import { CreateUserModel, User } from '@/services'

export interface IUserRepo {
    create(data: CreateUserModel): Promise<User>
}