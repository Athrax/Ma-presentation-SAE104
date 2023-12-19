document.addEventListener('DOMContentLoaded', function () {
    var parallaxContainer = document.querySelector('.parallax-container');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        parallaxContainer.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });
});