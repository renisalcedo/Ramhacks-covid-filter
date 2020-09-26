const paragraphs = document.getElementsByTagName('p')

for (let i = 0; i < paragraphs.length; i++) {
    let currParagraph = paragraphs[i]
    console.log(currParagraph.innerHTML)
}