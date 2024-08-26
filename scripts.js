function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0";
    }
}

window.onload = function() {
    loadArticles();
};

function loadArticles() {
    fetch('telegraphs.txt')
        .then(response => response.text())
        .then(data => {
            const articles = data.split('\n');
            let articlesContainer = document.getElementById('articles-container');
            articles.forEach(article => {
                const [title, url] = article.split('|');
                let articleDiv = document.createElement('div');
                articleDiv.innerHTML = `<h3>${title}</h3><a href="${url}" target="_blank">Читать далее</a>`;
                articlesContainer.appendChild(articleDiv);
            });
        });
}
