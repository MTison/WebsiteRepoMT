/*eslint-env jquery*/

$(document).ready(function () {
    setHeaderItem($(".header-item:first"));
    distributePageContent($(".header-item:first"));
})

/*activate and reset navbarItem*/
$(document).on("click", ".header-item", function () {
    $(".header-item").each(function () {
        if ($(this).hasClass("header-item active")) {
            resetHeaderItem($(this)); /*reset navbaritem when clicking on navbarItem*/
        }
    });

    setHeaderItem($(this));
    distributePageContent($(this));
})

$(document).on("click", ".about-linkTop", function () {
    $('body').animate({
        scrollTop: 0
    }, 'slow');
})

$(document).on("click", ".italent-blok", function () {
    switch ($(this).attr('id')) {
        case "i1talent":
            list($("#i1talentList"));
            break;
        case "i2talent":
            list($("#i2talentList"));
            break;
        case "i3talent":
            list($("#i3talentList"));
            break;
    }
})

function list(element) {
    if (element.css("display") == "block") {
        element.css({
            "display": "none"
        });
    } else {
        $(".italent-list").each(function () {
            $(this).css({
                "display": "none"
            });
        });

        element.css({
            "animation": "fadein 0.8s",
            "display": "block",
            "opacity": "1"
        });
    }
}

function resetHeaderItem(element) {
    element.removeClass("header-item active");
    element.addClass("header-item");
    element.css({
        "transition": "0.2s"
    });
}

function setHeaderItem(element) {
    element.addClass("header-item active");
}

function distributePageContent(element) {
    switch (element.attr('id')) {
        case "home":
            $("#mainContent").load("pages/home.html");
            break;
        case "about":
            $("#mainContent").load("pages/about.html");
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

function distributePageContentItalent(element) {
    switch (element) {
        case "I2T_1":
            $("#opdracht-content").html(
                "<div class='opdracht-title_link'> <div class='opdracht-title'>Hofman test</div><div class='opdracht-linkClose'>✖︎</div> </div>" +
                "<object data='PDF/HofmanTest.pdf' type='application/pdf' width='100%' height='100%'> <iframe src ='PDF/HofmanTest.pdf' width='100% 'height='100%' style='border: none;'> This browser does not support PDFs.Please download the PDF to view it:<a href = 'PDF/HofmanTest.pdf'> Download PDF </a></iframe> </object>"
            );
            break;
        case "I2T_2":
            $("#opdracht-content").html(
                "<div class='opdracht-title_link'> <div class='opdracht-title'>Competence indicator test</div><div class='opdracht-linkClose'>✖︎</div> </div>" +
                "<object data='PDF/CompetenceIndicator.pdf' type='application/pdf' width='100%' height='100%'> <iframe src ='PDF/CompetenceIndicator.pdf' width='100% 'height='100%' style='border: none;'> This browser does not support PDFs.Please download the PDF to view it:<a href = 'PDF/CompetenceIndicator.pdf'> Download PDF </a></iframe> </object>"
            );
            break;
        case "I2T_3":
            $("#opdracht-content").html(
                "<div class='opdracht-title_link'> <div class='opdracht-title'>Workshop creatief denken reflectie</div><div class='opdracht-linkClose'>✖︎</div> </div>" +
                "<object data='PDF/Tison_Matthias_CreatiefDenken_reflectie.pdf' type='application/pdf' width='100%' height='100%'> <iframe src ='PDF/Tison_Matthias_CreatiefDenken_reflectie.pdf' width='100% 'height='100%' style='border: none;'> This browser does not support PDFs.Please download the PDF to view it:<a href = 'PDF/Tison_Matthias_CreatiefDenken_reflectie.pdf'> Download PDF </a></iframe> </object>"
            );
            break;
        case "I2T_4":
            $("#opdracht-content").html(
                "<div class='opdracht-title_link'> <div class='opdracht-title'>Jobprofielen</div><div class='opdracht-linkClose'>✖︎</div> </div>" +
                "<object data='PDF/MatthiasTison_Opdracht6_Jobprofielen.pdf' type='application/pdf' width='100%' height='100%'> <iframe src ='PDF/MatthiasTison_Opdracht6_Jobprofielen.pdf' width='100% 'height='100%' style='border: none;'> This browser does not support PDFs.Please download the PDF to view it:<a href = 'PDF/MatthiasTison_Opdracht6_Jobprofielen.pdf'> Download PDF </a></iframe> </object>"
            );
            break;
    }
}
