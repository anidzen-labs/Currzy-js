export default {
    label: 'Հայերեն',
    lang: 'hy-AM',
    link: '/hy/',
    themeConfig: {
        nav: [
            { text: 'Գլխավոր', link: '/hy/' },
            { text: 'Օրինակներ', link: '/hy/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'Օրինակներ',
                items: [
                    { text: 'Markdown օրինակներ', link: '/hy/markdown-examples' },
                    { text: 'API օրինակներ', link: '/hy/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Currzy/Currzy-js' }
        ]
    }
}
