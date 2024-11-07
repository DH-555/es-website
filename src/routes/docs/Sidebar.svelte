<script lang="ts">
    import Sidebar, { type NavTree } from '$lib/layouts/Sidebar.svelte';

    const navigation: NavTree = [
        {
            items: [
                {
                    label: 'Inicio',
                    href: '/docs',
                    icon: 'icon-home'
                },
                {
                    label: 'inicio rápido',
                    href: '/docs/quick-starts',
                    icon: 'icon-play'
                },
                {
                    label: 'Tutoriales',
                    href: '/docs/tutorials',
                    icon: 'icon-book-open'
                },
                {
                    label: 'SDKs',
                    href: '/docs/sdks',
                    icon: 'icon-cog'
                },
                {
                    label: 'Referencias API',
                    href: '/docs/references',
                    icon: 'icon-document',
                    isParent: true
                }
            ]
        },
        {
            label: 'Productos',
            items: [
                {
                    label: 'Autenticación',
                    href: '/docs/products/auth',
                    icon: 'icon-user-group',
                    isParent: true
                },
                {
                    label: 'Bases de datos',
                    href: '/docs/products/databases',
                    icon: 'icon-database',
                    isParent: true
                },
                {
                    label: 'Funciones',
                    href: '/docs/products/functions',
                    icon: 'icon-lightning-bolt',
                    isParent: true
                },
                {
                    label: 'Mensajería',
                    href: '/docs/products/messaging',
                    icon: 'icon-send',
                    isParent: true
                },
                {
                    label: 'Almacenamiento',
                    href: '/docs/products/storage',
                    icon: 'icon-folder',
                    isParent: true
                },
                {
                    label: 'IA',
                    href: '/docs/products/ai',
                    icon: 'icon-chip',
                    isParent: true
                }
            ]
        },
        {
            label: 'APIS',
            items: [
                {
                    label: 'Tiempo-real',
                    href: '/docs/apis/realtime',
                    icon: 'icon-clock'
                },
                {
                    label: 'REST',
                    href: '/docs/apis/rest',
                    icon: 'web-icon-rest'
                },
                {
                    label: 'GraphQL',
                    href: '/docs/apis/graphql',
                    icon: 'icon-graphql'
                }
            ]
        },
        {
            label: 'Herramientas',
            items: [
                {
                    label: 'CLI',
                    href: '/docs/tooling/command-line/installation',
                    icon: 'icon-terminal',
                    isParent: true
                },
                {
                    label: 'Centro de comandos',
                    href: '/docs/tooling/command-center',
                    icon: 'web-icon-command'
                },
                {
                    label: 'Asistente',
                    href: '/docs/tooling/assistant',
                    icon: 'icon-sparkles'
                },
                {
                    label: 'El Appwriter',
                    href: '/docs/tooling/appwriter',
                    icon: 'icon-text'
                }
            ]
        },
        {
            label: 'Avanzado',
            items: [
                {
                    label: 'Plataforma',
                    href: '/docs/advanced/platform',
                    icon: 'web-icon-platform',
                    isParent: true
                },
                {
                    label: 'Integraciones',
                    href: '/integrations',
                    icon: 'icon-puzzle',
                    isParent: true
                },
                {
                    label: 'Migraciones',
                    href: '/docs/advanced/migrations',
                    icon: 'icon-refresh',
                    isParent: true
                },
                {
                    label: 'Seguridad',
                    href: '/docs/advanced/security',
                    icon: 'icon-shield-check',
                    isParent: true
                },
                {
                    label: 'Auto-hospedaje',
                    href: '/docs/advanced/self-hosting',
                    icon: 'icon-server',
                    isParent: true
                }
            ]
        }
    ];
</script>

<Sidebar {navigation} />
