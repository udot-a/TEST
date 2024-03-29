async function start() {
    let result = await (await fetch('sample.html')).text()
    main.innerHTML = result
    let currentUser = null
    userInfo.style.display = "none"

    file.onchange = function (event) {
            if (event.target.files[0].type.indexOf("image") !== 0) return
            if (event.target.files[0].size > 300000) return
            let reader = new FileReader(event.target.files[0])
            reader.onload = event => document.getElementsByName("user-photo")[0].value = event.target.result
            reader.readAsDataURL(event.target.files[0])
            document.getElementById("user-photo-preview").src = URL.createObjectURL(event.target.files[0])
    }

    pass1.oninput = function (event) {
        let pass = event.target.value
        event.target.valid = pass.length > 6 && !!pass.match(/\d/) && !!pass.match(/\D/)
        event.target.style.color = event.target.valid ? "green" : "red"
        pass2.disabled = !event.target.valid
    }

    pass2.oninput = function (event) {
        event.target.valid = event.target.value === pass1.value
        event.target.style.color = event.target.valid ? "green" : "red"
    }

    pass2.onchange = function (event) {
        event.target.valid ?
            passhash.value = Sha256.hash(event.target.value) : null
    }

    registerbutton.onclick = function (event) {
        let formData = new FormData(
            document.getElementById("registrationForm")
        )
        let result = {}
        formData.forEach(
            (val, key) => Object.assign(result, { [key]: val })
        )
        fetch(`https://garevna-rest-api.glitch.me/user/${username.value}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        }).then(response => response.json())
            .then(response => console.log(response))
    }
}
start()
fetch('sample.css')

    .then(response => response.text())
    .then(response => style.textContent = response)