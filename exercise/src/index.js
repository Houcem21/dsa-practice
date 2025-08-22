export default function displayText(text)　{
    const content = document.getElementsByClassName('content')[0];

    const newEl = document.createElement('h1');
    newEl.innerHTML = text;

    content.appendChild(newEl)
}
