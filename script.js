// script.js

function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function (event) {
    const profileContainer = document.querySelector('.profile-container');
    const profileMenu = document.getElementById('profileMenu');
    if (!profileContainer.contains(event.target)) {
        profileMenu.style.display = 'none';
    }
});
