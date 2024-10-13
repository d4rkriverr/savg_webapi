class UserRepository {
    conn;
    constructor(app) { this.conn = app.database; }
    
    GetOneByUsername = (username) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE username = ?';
            this.conn.query(query, [username], (err, results) => {
                if (err) {
                    return reject(err);
                }
                if (results.length === 0) {
                    return resolve(null); // No user found
                }
                resolve(results[0]);
            });
        });
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

    UpdateAccessToken = (userId, newAccessToken) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE users SET access_token = ? WHERE id = ?';
            this.conn.query(query, [newAccessToken, userId], (err, result) => {
                if (err) return resolve(null);
                if (result.affectedRows === 0) return resolve(null);
                resolve(true);
            });
        });
    };
}
module.exports = UserRepository;