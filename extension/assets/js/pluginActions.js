document.addEventListener('DOMContentLoaded', function() {
    const occurrences = localStorage.getItem('occurrences')
    const occurrencesElem = document.getElementById('occurrences')

    occurrencesElem.innerText = occurrences
});