var menuTimeout;

function hideMenu() {
    menuTimeout = setTimeout(function () {
        document.querySelectorAll('header nav ul ul').forEach(function (submenu) {
            submenu.style.display = 'none';
        });
    }, 500);
}

document.querySelector('header nav').addEventListener('mouseleave', function () {
    hideMenu();
});

document.querySelectorAll('header nav ul li').forEach(function (menuItem) {
    menuItem.addEventListener('mouseenter', function () {
        clearTimeout(menuTimeout);
    });
});
