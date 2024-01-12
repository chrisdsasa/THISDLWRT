const btn1 = document.querySelector('.tea_pwd .btn1')
const btn2 = document.querySelector('.tea_pwd .btn2')

btn1.addEventListener('click', (e) => {
    e.preventDefault()
    let email = document.querySelector('.tea_pwd #email1').value

    async function send() {
        const f = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/tea/captcha',
            params: {
                email: email
            }
        })
    }

    send()
})

btn2.addEventListener('click', (e) => {
    e.preventDefault()
    let email = document.querySelector('.tea_pwd #email1').value
    let re_pwd = document.querySelector('.tea_pwd #re_pwd1').value
    let code = document.querySelector('.tea_pwd #code1').value

    async function send() {
        const f = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/tea/chg',
            params: {
                email: email,
                pwd: re_pwd,
                re_pwd: re_pwd,
                captcha: code
            }
        })
    }
    f.then()
    send()
})
