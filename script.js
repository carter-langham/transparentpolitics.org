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

document.querySelectorAll('#menu-bar ul li').forEach(function (menuItem) {
    menuItem.addEventListener('mouseenter', function () {
        clearTimeout(menuTimeout);
    });

    if (menuItem.querySelector('ul')) {
        var submenu = menuItem.querySelector('ul');

        menuItem.addEventListener('mouseenter', function () {
            submenu.style.display = 'block';
        });

        menuItem.addEventListener('mouseleave', function () {
            submenu.style.display = 'none';
        });
    }
});
