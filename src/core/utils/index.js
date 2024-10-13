const crypto = require('crypto');

const GenerateTokenFromUser = (user) => {
    const data = `${user.id}-${user.username}-${Date.now()}`;
    const salt = crypto.randomBytes(16).toString('hex');
    const token = crypto
        .createHash('sha256')
        .update(data + salt)
        .digest('hex');

    return token;
}

module.exports = {
    GenerateTokenFromUser,
}