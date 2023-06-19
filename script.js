var menuTimeout;

function hideMenu() {
    menuTimeout = setTimeout(function () {
        document.querySelectorAll('#menu-bar ul ul').forEach(function (submenu) {
            submenu.style.display = 'none';
        });
    }, 500);
}

document.querySelector('#menu-bar').addEventListener('mouseleave', function () {
    hideMenu();
});

document.querySelectorAll('#menu-bar ul > li').forEach(function (menuItem) {
    menuItem.addEventListener('mouseenter', function () {
        clearTimeout(menuTimeout);
        menuItem.querySelector('ul').style.display = 'block';
    });

    menuItem.addEventListener('mouseleave', function () {
        hideMenu();
    });
});
