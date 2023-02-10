// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'global page title',
            meta: [
                {
                    name: 'description',
                    content: 'global meta description'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]
        }
    }
})
