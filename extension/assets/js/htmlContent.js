// var el = document.createElement("div");
// el.className = "mdl-tooltip"
// el.innerHTML = "Testing the tooltip";

// function insertAfter(referenceNode, newNode) {
//   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

// insertAfter(currOccurence, el)

chrome.runtime.sendMessage({'occurrences': ocurrencesNum})

function HTMLEvents() {
    const colors = {danger: '#df4759', ok: '#28a745' }

    for (let i = 0; i < occurencesProps.length; i++) {
        let currOccurence = occurencesProps[i]
        currOccurence.style['background-color'] = colors.danger
        currOccurence.style['padding'] = '.2rem'
        currOccurence.setAttribute('title', 'Very likely a misinformation...')
    }
}

HTMLEvents()