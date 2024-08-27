document.addEventListener("DOMContentLoaded", function() {
    const mathImg = document.getElementById('mathImg');
    const scienceImg = document.getElementById('scienceImg');
    const englishImg = document.getElementById('englishImg');

    mathImg.addEventListener('click', function() {
        alert("Explore our Mathematics courses!");
    });

    scienceImg.addEventListener('click', function() {
        alert("Explore our Science courses!");
    });

    englishImg.addEventListener('click', function() {
        alert("Explore our English courses!");
    });
});
