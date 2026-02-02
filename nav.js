(() => {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const opened = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(opened));
        });
    }

    document.querySelectorAll('.dropdown').forEach(drop => {
        const btn = drop.querySelector('.drop-btn');
        const menu = drop.querySelector('.dropdown-menu');

        if (!btn || !menu) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = drop.classList.toggle('open');
            btn.setAttribute('aria-expanded', String(isOpen));
            
            // Fechar outros dropdowns
            document.querySelectorAll('.dropdown.open').forEach(d => {
                if (d !== drop) {
                    d.classList.remove('open');
                    const db = d.querySelector('.drop-btn');
                    if (db) db.setAttribute('aria-expanded', 'false');
                }
            });
        });

        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                drop.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });

        menu.addEventListener('click', (e) => e.stopPropagation());
    });

    // Fechar menus ao clicar fora
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown.open').forEach(d => {
            d.classList.remove('open');
            const db = d.querySelector('.drop-btn');
            if (db) db.setAttribute('aria-expanded', 'false');
        });
        if (links) {
            links.classList.remove('open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Fechar com tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown.open').forEach(d => {
                d.classList.remove('open');
                const db = d.querySelector('.drop-btn');
                if (db) db.setAttribute('aria-expanded', 'false');
            });
            if (links) {
                links.classList.remove('open');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
})();
