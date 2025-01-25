const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    alert('Sesión cerrada correctamente');
    window.location.href = "../index.html";
});

