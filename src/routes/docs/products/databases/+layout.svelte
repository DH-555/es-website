<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Bases de datos'
    };

    const navigation: NavTree = [
        {
            label: 'Empezando',
            items: [
                {
                    label: 'Visión general',
                    href: '/docs/products/databases'
                },
                {
                    label: 'Inicio rápido',
                    href: '/docs/products/databases/quick-start'
                }
            ]
        },
        {
            label: 'Conceptos',
            items: [
                {
                    label: 'Bases de datos',
                    href: '/docs/products/databases/databases'
                },
                {
                    label: 'Colecciones',
                    href: '/docs/products/databases/collections'
                },
                {
                    label: 'Documentos',
                    href: '/docs/products/databases/documents'
                },
                {
                    label: 'Permisos',
                    href: '/docs/products/databases/permissions'
                },
                {
                    label: 'Relaciones',
                    href: '/docs/products/databases/relationships'
                }
            ]
        },
        {
            label: 'Recorridos',
            items: [
                {
                    label: 'Queries',
                    href: '/docs/products/databases/queries'
                },
                {
                    label: 'Orden',
                    href: '/docs/products/databases/order'
                },
                {
                    label: 'Paginación',
                    href: '/docs/products/databases/pagination'
                }
            ]
        },
        {
            label: 'Referencias',
            items: [
                {
                    label: 'API de la base de datos',
                    href: '/docs/references/cloud/client-web/databases'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
