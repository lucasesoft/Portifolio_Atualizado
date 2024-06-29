function showPage(page) {
    const content = document.getElementById('content');

    if (page === 'inicio') {
        content.innerHTML = `
            <h1>Meu nome é Lucas Guimarães Pereira, sou estudante de Engenharia de software.</h1>
            <p>Estou em busca do meu primeiro emprego ou estágio na área.</p>
        `;
    } else if (page === 'contato') {
        content.innerHTML = `
            <button onclick="redirectTo('https://www.linkedin.com/in/lucas-guimar%C3%A3es-pereira-34926929a/')">
                <img src="Linkedin.jpg" alt="LinkedIn"> LinkedIn
            </button>
            <button onclick="redirectTo('https://github.com/lucasesoft')">
                <img src="GitHub.jpg" alt="GitHub"> GitHub
            </button>
        `;
    } else if (page === 'projetos') {
        content.innerHTML = `
            <button onclick="redirectTo('https://github.com/thybiagio/CareConnect')">CareConnect</button>
            <button onclick="redirectTo('https://brezendelima.github.io/gestaoEscolar_Unicesumar/')">Gestão Escolar</button>
            <button onclick="redirectTo('https://github.com/lucasesoft/Jogo_Da_Velha')">Jogo da Velha</button>
        `;
    }
}

function redirectTo(url) {
    window.location.href = url;
}

// Carregar a página inicial ao carregar o site
window.onload = function() {
    showPage('inicio');
};
