const validateToken = (conn) => {
    return async (req, res, next) => {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ success: false, message: 'Authorization header missing' });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, message: 'Token missing from Authorization header' });
        }
        try {
            const query = 'SELECT * FROM users WHERE access_token = ?';
            conn.query(query, [token], (err, results) => {
                if (err) {
                    return res.status(500).json({ success: false, message: 'Database error' });
                }
                if (results.length === 0) {
                    return res.status(403).json({ success: false, message: 'Invalid token' });
                }
                req.user = results[0];
                next();
            });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    };
}

module.exports = validateToken;