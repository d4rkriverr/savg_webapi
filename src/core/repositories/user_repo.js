class UserRepository {
    conn;
    constructor(app) { this.conn = app.database; }
    GetOneByUsername = () => {
        return {
            id: 1,
            username: "test",
            password: '123456',
            role: 'ADMIN',
            created_at: (new Date().toISOString())
        }
    }

    CreateUser = ({ username, password, role }) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO users (username, password, role, status, access_token) VALUES (?, ?, ?, ?, ?)';
            this.conn.query(query, [username, password, role, 1, ""], (err, results) => {
                if (err) {
                    if (err.code == 'ER_DUP_ENTRY') {

                        return resolve({ success: false, message: 'username already in use' })
                    }
                    return resolve({ success: false, message: err })
                }
                resolve({ success: true, payload: results });
            });
        });
    }
}
module.exports = UserRepository;