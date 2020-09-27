chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    localStorage.setItem("occurrences", request.occurrences);
});