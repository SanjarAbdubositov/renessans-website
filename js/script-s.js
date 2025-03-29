document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("pages/success.html")) {
        window.history.pushState({}, "", "/success");
    }   
});