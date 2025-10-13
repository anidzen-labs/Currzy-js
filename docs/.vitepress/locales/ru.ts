export default (pkg: any) => ({
    label: 'Русский',
    lang: 'ru-RU',
    link: '/ru/',
    themeConfig: {
        nav: [
            { text: 'Главная', link: '/ru/' },
            { text: 'Документация', link: '/ru/what-is-currzy' },
            {
                text: pkg.version,
                items: [
                    { text: 'Журнал изменений', link: '/ru/changelog' },
                    { text: 'Вклад в проект', link: '/ru/contributing' }
                ]
            }
        ],

        sidebar: [
            {
                text: 'Документация',
                items: [
                    { text: 'Что такое Currzy?', link: '/ru/what-is-currzy' },
                    { text: 'Начало работы', link: '/ru/getting-started' },
                    { text: 'Установка', link: '/ru/installation' },
                    { text: 'Использование', link: '/ru/usage' },
                ]
            },
            {
                text: 'Расширенные возможности',
                items: [
                    { text: 'Провайдеры валют', link: '/ru/providers' },
                    { text: 'Кэширование', link: '/ru/caching' },
                    { text: 'TypeScript', link: '/ru/typescript' }
                ]
            },
            {
                text: 'API и Разработка',
                items: [
                    { text: 'API Reference', link: '/ru/api-reference' },
                    { text: 'Вклад в проект', link: '/ru/contributing' },
                    { text: 'Журнал изменений', link: '/ru/changelog' }
                ]
            }
        ],

        footer: {
            message:
                '💸 Сделано с ❤️ от команды <a href="https://anidzen.com" target="_blank">Anidzen</a> и <a href="https://vahe.anidzen.com/ru" target="_blank">Vahe Sargsyan</a> · <a href="https://github.com/Currzy">GitHub</a> · Лицензия MIT',
            copyright: '© 2025 Currzy'
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/Currzy' }]
    }
})
