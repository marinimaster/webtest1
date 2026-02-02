const form = document.getElementById("login-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    const response = await fetch("https://webtest1-2vo9.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    document.getElementById("result").textContent = result.message;
});