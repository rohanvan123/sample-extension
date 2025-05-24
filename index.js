
const fetchLinks = async () => {
    console.log('Fetching links...');
    // Synchronous read
    try {
        const url = chrome.runtime.getURL("links.json");
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

fetchLinks().then((data) => {
    const links = data["links"];
    const linksContainer = document.getElementById("linkList");
    links.forEach(link => {
        const linkElement = document.createElement("li");
        linkElement.innerHTML = `
            <div>
                <p id="link-name"><b>${link.name}</b></p>
                <div id="link-sub-containter">
                    <a href="${link.url}" target="_blank">${link.url}</a>
                    <button class="copy-btn" data-url="${link.url}" title="Copy to clipboard" style="cursor: pointer; background: none; border: none; font-size: 16px;">📋</button>
                </div>
            </div>
        `;
        linksContainer.appendChild(linkElement);
    });

    document.querySelectorAll('.copy-btn').forEach(button => { 
        button.addEventListener('click', (event) => {
            const url = event.target.dataset.url;
            navigator.clipboard.writeText(url).then(() => {
                console.log('URL copied to clipboard:', url);
            }).catch(err => {
                console.error('Error copying URL:', err);
            });
        });
    });
});