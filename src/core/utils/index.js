const GenerateTokenFromUser = (user) => {
    return crypto.randomUUID()
}

module.exports = {
    GenerateTokenFromUser,
}