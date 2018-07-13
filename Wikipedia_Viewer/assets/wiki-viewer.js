
// Set up ability to search for a wiki article
function search() {
    window.location = document.getElementById('searchBox').value;

    /*document.getElementById('searchButton').onClick = function() {
        location.href = document.getElementById('searchBox').value;*/
    }

// Set up ability to go to a random wiki article
document.getElementById("randWiki").onclick = function () {
    getRandWiki();
}

function getRandWiki () {
    onclick = window.open('https://en.wikipedia.org/wiki/Special:Random');
}
