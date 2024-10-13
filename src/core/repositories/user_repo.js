class UserRepository {
    GetOneByUsername = () => {
        return {
            id: 1,
            username: "test",
            password: '123456',
            role: 'ADMIN',
            created_at: (new Date().toISOString())
        }
    }
}
module.exports = UserRepository;