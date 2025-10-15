document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basit doğrulama
    if (username === "admin" && password === "1234") {
        window.location.href = "arac_kayit_new.html";
    } else {
        document.getElementById("message").textContent = "Kullanıcı adı veya şifre hatalı!";
    }
});