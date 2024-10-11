document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o ícone ao site
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'logo.png'; // Certifique-se de que o caminho está correto
    document.head.appendChild(link);

    const menuItems = [
        { name: 'Home', link: 'index.html' },
        { name: 'Definição de Racismo', subItems: [
            { name: 'Definição', link: 'definicao.html' },
            { name: 'Preconceito Racial ', link: 'preconceito.html' }
        ]},
        { name: 'História do Racismo', subItems: [
            { name: 'Historia do Racismo', link: 'historia.html' },
            { name: 'colonização', link: 'colonização.html' }
        ]},
        { name: 'Tipos de Racismo', subItems: [
            { name: 'Tipos de Racismo', link: 'tipos.html' },
            { name: 'Racismo Individual', link: 'racismo.html' }
        ]},
        { name: 'Impactos do Racismo', subItems: [
            { name: 'Impactos do Racismo', link: 'impactos.html' },
            { name: 'Desigualdade Social', link: 'desigualdade.html' }
        ]},
        { name: 'Combate ao Racismo', subItems: [
            { name: ' Combate ao Racismo', link: 'combate.html' },
            { name: 'Educação e conscientização ', link: 'educação.html' }
        ]}
    ];

    const menu = document.getElementById('menu');

    // Adiciona a logo no início do menu
    const logoLi = document.createElement('li');
    const logoImg = document.createElement('img');
    logoImg.src = 'logo.png';
    logoImg.alt = 'Logo do site';
    logoImg.classList.add('logo');
    logoLi.appendChild(logoImg);
    menu.appendChild(logoLi);

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link || '#';
        a.textContent = item.name;
        li.appendChild(a);

        if (item.subItems) {
            const ul = document.createElement('ul');
            item.subItems.forEach(subItem => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.href = subItem.link;
                subA.textContent = subItem.name;
                subLi.appendChild(subA);
                ul.appendChild(subLi);
            });
            li.appendChild(ul);
        }

        menu.appendChild(li);
    });

    // Função para abrir/fechar o menu em telas menores
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '&#9776;';
    document.querySelector('header').appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
