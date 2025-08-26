export default function displayText(...list)　{
    const content = document.getElementsByClassName('content')[0];
    const newEl = document.createElement('h1');
    for (let elementText of list) newEl.innerHTML += elementText;
    content.appendChild(newEl)
}
