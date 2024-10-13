
class UserController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }

    UserLogin = async (req, res) => {
        const { username, password } = req.body;
        if (!username || username.trim() === '') {
            return res.status(400).json({ message: 'Username is required' });
        }
        if (!password || password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }
        const r = await this.svc.UserService.Authenticate(username, password);
        if (r.success) {
            return res.status(200).json(r)
        }
        res.status(401).json(r)
    }

    UserCreate = async (req, res) => {
        const { username, password } = req.body;
        if (!username || username.trim().length < 6) {
            return res.status(400).json({ message: 'Username must be at least 6 characters long' });
        }
        if (!password || password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }
        const r = await this.svc.UserService.NewUser(username, password);
        if (r.success) {
            return res.status(200).json(r)
        }
        res.status(400).json(r)
    }
    UserInfo = (req, res) => { }
}


module.exports = UserController;