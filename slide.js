document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll("#about .slide-in");

    paragraphs.forEach(function(paragraph) {
        paragraph.classList.add("active");
    });
});
