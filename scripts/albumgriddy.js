const covers = document.querySelectorAll('.cover');
covers.forEach(cover => {
    cover.addEventListener("click", function(event) {
        cover.parentElement.classList.toggle("cool")
    })
});