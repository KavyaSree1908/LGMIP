function handleEvent(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    document.getElementById("registered").style.display = "block";
    document.getElementById("registered-name").textContent = name;
    document.getElementById("registered-email").textContent = email;
    document.getElementById("registered-password").textContent = password;
}
