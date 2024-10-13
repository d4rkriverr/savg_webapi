const GetUserInfo = async () => {
    const token = localStorage.getItem("token");// 'your_access_token_here'

    const r = await fetch('http://localhost:3000/api/v1/user/info', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    });
    const data = await r.json()
    return data;
}

const CreateUser = async (username, password) => {
    const token = localStorage.getItem("token");// 'your_access_token_here'
    const r = await fetch('http://localhost:3000/api/v1/user/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ username, password })
    });
    return await r.json()
}


const userLogin = async (username, password) => {
    const r = await fetch('http://localhost:3000/api/v1/user/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await r.json()
    if (r.status == 200) {
        localStorage.setItem("token", data.payload)
        return data;
    }
    return data;
}

const onSubmit = async (e) => {
    e.preventDefault()
    const o = Object.fromEntries(new FormData(e.currentTarget))

    ///
    const r = await CreateUser(o.username, o.password) //** SERVICE
    if (r.success) {
        //**  r.payload */
        // redirect to homepage
        return
    }
    alert(r.message) // show message to client
}