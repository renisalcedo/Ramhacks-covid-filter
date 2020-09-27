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
            () => {
                $(infoContainer).show()
                $(infoContainer).mouseleave(
                    () => $(infoContainer).hide()
                )
            }
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
        infoContainer.style['width'] = '10rem'
        infoContainer.style['height'] = '10rem'
        infoContainer.style['text-align'] = 'center'
        infoContainer.style['display'] = 'none'
        infoContainer.style['background-color'] = '#fff'
        infoContainer.style['box-shadow'] = "2px 2px #888888"
        infoContainer.style['position'] = 'absolute'
        infoContainer.innerHTML = '<p>Some information here</p> <a href="http://www.google.com">More Info</a>';

        return infoContainer
    }
}

HTMLEvents()