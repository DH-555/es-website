<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Almacenamiento'
    };

    const navigation: NavTree = [
        {
            label: 'Empezando',
            items: [
                {
                    label: 'Visión general',
                    href: '/docs/products/storage'
                },
                {
                    label: 'Inicio rápido',
                    href: '/docs/products/storage/quick-start'
                }
            ]
        },
        {
            label: 'Conceptos',
            items: [
                {
                    label: 'Cubos',
                    href: '/docs/products/storage/buckets'
                },
                {
                    label: 'Permisos',
                    href: '/docs/products/storage/permissions'
                }
            ]
        },
        {
            label: 'Recorridos',
            items: [
                {
                    label: 'Subida y descarga',
                    href: '/docs/products/storage/upload-download'
                },
                {
                    label: 'Transformación de imágenes',
                    href: '/docs/products/storage/images'
                }
            ]
        },
        {
            label: 'Referencias',
            items: [
                {
                    label: 'API de almacenamiento',
                    href: '/docs/references/cloud/client-web/storage'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
