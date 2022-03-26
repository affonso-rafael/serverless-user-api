import { UserRepo } from './users_repository'

jest.mock('aws-sdk', () => {
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => ({
        put: jest.fn().mockImplementation(() => ({
          promise: () =>  Promise.resolve({
            $response: { error: null },
          }),
        })),
      })),
    },
  }},
)

describe('User Repository', () => {
  it('should return an User on success', async () => {
    const repo = new UserRepo()
    const userToCreate = {
      id: 'any_id2',
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