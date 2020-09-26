const setCovidContent = () => {
    const foundOccurences = []
    const allTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5','h6', 'small']

    /*
        Iterates over every tag to make a call to getCovidContent and append data
    */
    for (let i = 0; i < allTags.length; i++) {
        let currTag = allTags[i]
        getCovidContent(currTag)
    }

    /*
        Would iterate over the content ad detect the covid keyword and append occurences
        @param tag - String tag from where in the page to get the content
    */
    function getCovidContent(tag) {
        const tagContent = document.getElementsByTagName(tag)

        for (let i = 0; i < tagContent.length; i++) {
            let currContent = tagContent[i]
            let content = currContent.innerHTML
            let normalizedContent = content.toLowerCase()

            // Tag property would get added to our list if contains covid in the content
            if (normalizedContent.indexOf("covid") !== -1) {
                foundOccurences.push(currContent)
            }
        }
    }

    return foundOccurences;
}