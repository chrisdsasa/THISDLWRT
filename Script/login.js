const btn1 = document.querySelector('loginbtn')

btn1.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.querySelector('numdestu').value
    let pwd = document.querySelector('passwd').value

    async function send() {
        const f = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/stu/login',
            params: {
                id: id,
                pwd: pwd
            }
        })
    }
    f.then()
    send()
})
