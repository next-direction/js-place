module.exports = {
    template: './docs/ssr.html',
    maxAge: 60 * 60 * 1000,
    config: {
        name: 'JS Place',
        repo: 'https://github.com/next-direction/js-place',
        loadSidebar: true,
        subMaxLevel: 4,
        loadNavbar: true,
        auto2top: true,
        alias: {
            '/.*/_sidebar.md': '/_sidebar.md',
            '/.*/_navbar.md': '/_navbar.md'
        },
        logo: '/_media/logo.png',
        pagination: {
            previousText: 'Vorheriger Abschnitt',
            nextText: 'Nächster Abschnitt',
            crossChapter: true
        },
        copyCode: {
            buttonText: 'Kopieren',
            errorText: 'Fehler',
            successText: 'Kopiert'
        },
        tabs: {
            persist: true,
            sync: true,
            theme: 'classic',
            tabComments: true,
            tabHeadings: true
        },
        flexibleAlerts: {
            style: 'flat',
            note: {
                label: "Hinweis"
            },
            tip: {
                label: "Tipp"
            },
            warning: {
                label: "Warnung"
            },
            danger: {
                label: "Achtung"
            }
        }
    }
}