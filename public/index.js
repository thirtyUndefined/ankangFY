

login.onclick = async function() {
    fetch("http://localhost:3033/api/user/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            loginId: "1872942",
            loginPwd: "wl2602756824"
        })
    }).then(res => res.json()).then(res => {
        console.log(res.data)
    })
}
who.onclick = async function() {
    fetch("http://localhost:3030/api/user/whoami", {
        method: "GET",
    }).then(res => res.json())
}