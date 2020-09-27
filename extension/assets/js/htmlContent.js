// insertAfter(currOccurence, el)
chrome.runtime.sendMessage({'occurrences': ocurrencesNum})

function HTMLEvents() {
    const colors = {danger: '#df4759', ok: '#28a745' }

    for (let i = 0; i < occurencesProps.length; i++) {
        let currOccurence = occurencesProps[i]
        addCss(currOccurence)
   }

    function addCss(elem) {
        const infoContainer = createInfoContainer()
        $(`${elem.tagName}:contains(${elem.innerText})`).hover(
            () => $(infoContainer).toggle()
        )
    
        elem.style['border-left'] = `2px solid ${colors.danger}`
        elem.style['border-right'] = `2px solid ${colors.danger}`
        elem.style['border-radius'] = "5%"
        insertAfter(elem,infoContainer)
        elem.setAttribute('title', 'Very likely a misinformation...')
    }

    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function createInfoContainer() {
        const infoContainer = document.createElement("div");
        infoContainer.style['display'] = 'none'
        infoContainer.style['background-color'] = '#eee'
        infoContainer.style['position'] = 'absolute'
        infoContainer.innerHTML = '<p>Some information here</p>';

        return infoContainer
    }
}

HTMLEvents()