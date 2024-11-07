<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Funciones'
    };

    const navigation: NavTree = [
        {
            label: 'Empezando',
            items: [
                {
                    label: 'Visión general',
                    href: '/docs/products/functions'
                },
                {
                    label: 'Inicio rápido',
                    href: '/docs/products/functions/quick-start'
                }
            ]
        },
        {
            label: 'Conceptos',
            items: [
                {
                    label: 'Funciones',
                    href: '/docs/products/functions/functions'
                },
                {
                    label: 'Despliegues',
                    href: '/docs/products/functions/deployments'
                },
                {
                    label: 'Ejecuciones',
                    href: '/docs/products/functions/executions'
                },
                {
                    label: 'Dominios',
                    href: '/docs/products/functions/domains'
                },
                {
                    label: 'Runtimes',
                    href: '/docs/products/functions/runtimes'
                }
            ]
        },
        {
            label: 'Recorridos',
            items: [
                {
                    label: 'Plantillas',
                    href: '/docs/products/functions/templates'
                },
                {
                    label: 'Desarrollo',
                    href: '/docs/products/functions/develop'
                },
                {
                    label: 'Desarrollo local',
                    href: '/docs/products/functions/develop-locally'
                },
                {
                    label: 'Despliegue desde Git',
                    href: '/docs/products/functions/deploy-from-git'
                },
                {
                    label: 'Despliegue manual',
                    href: '/docs/products/functions/deploy-manually'
                },
                {
                    label: 'Ejecución',
                    href: '/docs/products/functions/execute'
                }
            ]
        },
        {
            label: 'Referencias',
            items: [
                {
                    label: 'API de funciones',
                    href: '/docs/references/cloud/client-web/functions'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
