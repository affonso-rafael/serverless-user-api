import { UserRepo } from './users_repository'

describe('User Repository', () => {
  it('should return an User on success', async () => {
    const repo = new UserRepo()
    const userToCreate = {
      id: 'any_id',
      name: 'any name',
      email: 'any@email.com',
    }
    const user = await repo.create(userToCreate)

    expect(user).toBeTruthy()
    expect(user.id).toBeTruthy()
    expect(user.name).toEqual(userToCreate.name)
    expect(user.email).toEqual(userToCreate.email)
  })
})