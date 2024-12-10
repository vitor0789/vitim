document.addEventListener('DOMContentLoaded', function () {
    // Adiciona o ícone ao site
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'logo.png'; // Certifique-se de que o caminho está correto
    document.head.appendChild(link);

    const menuItems = [
        { name: 'Home', link: 'index.html' },
        {
            name: 'Definição de Racismo',
            subItems: [
                { name: 'Definição', link: 'definicao.html' },
                { name: 'Preconceito Racial ', link: 'preconceito.html' }
            ]
        },
        {
            name: 'História do Racismo',
            subItems: [
                { name: 'Historia do Racismo', link: 'historia.html' },
                { name: 'colonização', link: 'colonização.html' }
            ]
        },
        {
            name: 'Tipos de Racismo',
            subItems: [
                { name: 'Tipos de Racismo', link: 'tipos.html' },
                { name: 'Racismo Individual', link: 'racismo.html' }
            ]
        },
        {
            name: 'Impactos do Racismo',
            subItems: [
                { name: 'Impactos do Racismo', link: 'impactos.html' },
                { name: 'Desigualdade Social', link: 'desigualdade.html' }
            ]
        },
        {
            name: 'Combate ao Racismo',
            subItems: [
                { name: ' Combate ao Racismo', link: 'combate.html' },
                { name: 'Educação e conscientização ', link: 'edu.html' }
            ]
        },
        { name: 'Imagens Geradas por IA', link: 'imagens_ia.html' },
        { name: 'Videos', link: 'aulas.html' } // Nova página para "Aulas"
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

    // Cria o botão hambúrguer
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '&#9776;';
    hamburger.style.position = 'fixed'; // Torna o botão flutuante
    hamburger.style.top = '20px';
    hamburger.style.right = '20px';
    hamburger.style.zIndex = '1000';
    hamburger.style.cursor = 'grab';

    document.querySelector('header').appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Torna o botão hambúrguer arrastável
    let isDragging = false;
    let offsetX, offsetY;

    hamburger.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - hamburger.getBoundingClientRect().left;
        offsetY = e.clientY - hamburger.getBoundingClientRect().top;
        hamburger.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            hamburger.style.left = `${x}px`;
            hamburger.style.top = `${y}px`;
            hamburger.style.position = 'fixed';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        hamburger.style.cursor = 'grab';
    });
});
