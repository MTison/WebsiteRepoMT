/*eslint-env jquery*/

$(document).ready(function () {
    setSideBarItem($(".sidebar-item:first"));
    distributePageContent($(".sidebar-item:first"));
})

/*fade in and out of the language choose menu (rigth top of screen)*/
$(document).on("click", ".header-language-icon", function () {
    $(".language-text").fadeToggle(0);
})

/*activate and reset sidebarItem*/
$(document).on("click", ".sidebar-item", function () {
    $(".sidebar-item").each(function () {
        if ($(this).hasClass("sidebar-item active")) {
            resetSideBarItem($(this));
            resetSideBarSubMenu(); /*reset sidebar submenu when clicking on sidebarItem*/
            if ($(this).is("#about")) {
                resetAbout();
            }
        }
    });

    if ($(this).is("#about")) {
        setAbout($(this));
        setSideBarSubItem($(".sidebar-subitem:first"))
        distributePageContent($(this));
    } else {
        setSideBarItem($(this));
        distributePageContent($(this));
    }
})

/*activate and reset sidebarSubItem*/
$(document).on("click", ".sidebar-subitem", function () {
    resetSideBarSubMenu();
    setSideBarSubItem($(this));
    distributePageContent($(this));
})

function resetSideBarItem(element) {
    element.removeClass("sidebar-item active");
    element.addClass("sidebar-item");
    element.css({
        "transition": "0.2s"
    });
}

function resetSideBarSubItem(element) {
    element.removeClass("sidebar-subitem active");
    element.addClass("sidebar-subitem");
    element.css({
        "transition": "0.2s"
    });
}

function resetSideBarSubMenu() {
    $(".sidebar-subitem").each(function () {
        if ($(this).hasClass("sidebar-subitem active")) {
            resetSideBarSubItem($(this));
        }
    });
}

function setSideBarItem(element) {
    element.addClass("sidebar-item active");
}

function setSideBarSubItem(element) {
    element.addClass("sidebar-subitem active");
}

function resetAbout() {
    $(".sidebar-section-icon").css({
        "background-image": "url(../images/ic_keyboard_arrow_left_black_48px.svg)"
    });
    $(".sidebar-submenu").css({
        "display": "none"
    });
}

function setAbout(element) {
    $(".sidebar-section-icon").css({
        "background-image": "url(../images/ic_keyboard_arrow_down_black_48px.svg)"
    });
    $(".sidebar-submenu").css({
        "display": "block"
    });

    element.addClass("sidebar-item active");
}

function distributePageContent(element) {
    switch (element.attr('id')) {
        case "home":
            $("#mainContent").load("pages/home.html");
            break;
        case "about":
            $("#mainContent").load("pages/about_WieBenIk.html");
            break;
        case "wieBenIk":
            $("#mainContent").load("pages/about_WieBenIk.html");
            break;
        case "watKanIk":
            $("#mainContent").load("pages/about_WatKanIk.html");
            break;
        case "mijnVisie":
            $("#mainContent").load("pages/about_MijnVisie.html");
            break;
        case "italent":
            $("#mainContent").load("pages/iTalent.html");
            break;
        case "portfolio":
            $("#mainContent").load("pages/portfolio.html");
            break;
        case "cv":
            $("#mainContent").load("pages/cv.html");
            break;
        case "links":
            $("#mainContent").load("pages/links.html");
            break;
        case "contact":
            $("#mainContent").load("pages/contact.html");
            break;
    }
}
