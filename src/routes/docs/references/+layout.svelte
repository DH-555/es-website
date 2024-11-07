<script lang="ts">
    import { page } from '$app/stores';
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';
    import { preferredPlatform, preferredVersion } from '$lib/utils/references';

    $: expandable = !!$page.url.pathname.match(
        /\/docs\/references\/.*?\/(client|server).*?\/.*?\/?/
    );

    $: prefix = `/docs/references/${$preferredVersion ?? $page.params?.version ?? 'cloud'}/${
        $preferredPlatform ?? $page.params?.platform ?? 'client-web'
    }`;
    $: navigation = [
        {
            label: 'Empezando',
            items: [
                {
                    label: 'Visión general',
                    href: '/docs/references',
                    icon: 'icon-view-grid'
                },
                {
                    label: 'Inicio rápido',
                    href: '/docs/references/quick-start',
                    icon: 'icon-play'
                }
            ]
        },
        {
            label: 'APIs',
            items: [
                {
                    label: 'Cuentas',
                    icon: 'icon-user',
                    href: `${prefix}/account`
                },
                {
                    label: 'Usuarios',
                    icon: 'icon-user-group',
                    href: `${prefix}/users`
                },
                {
                    label: 'Equipos',
                    icon: 'icon-users',
                    href: `${prefix}/teams`
                },
                {
                    label: 'Bases de datos',
                    icon: 'icon-database',
                    href: `${prefix}/databases`
                },
                {
                    label: 'Almacenamiento',
                    icon: 'icon-folder',
                    href: `${prefix}/storage`
                },
                {
                    label: 'Funciones',
                    icon: 'icon-lightning-bolt',
                    href: `${prefix}/functions`
                },
                {
                    label: 'Mensajería',
                    icon: 'icon-send',
                    href: `${prefix}/messaging`
                },
                {
                    label: 'Localización',
                    icon: 'icon-location-marker',
                    href: `${prefix}/locale`
                },
                {
                    label: 'Avatares',
                    icon: 'icon-user-circle',
                    href: `${prefix}/avatars`
                }
            ]
        }
        // {
        // 	label: 'Debugging',
        // 	items: [
        // 		{
        // 			icon: 'icon-document-search',
        // 			label: 'Response codes',
        // 			href: '/docs/advanced/platform/response-codes'
        // 		},
        // 		{
        // 			icon: 'icon-document-report',
        // 			label: 'Rate-limits',
        // 			href: '/docs/advanced/platform/rate-limits'
        // 		}
        // 	]
        // }
    ] as NavTree;

    const parent: NavParent = {
        href: '/docs',
        label: 'API reference'
    };
</script>

<Docs variant={expandable ? 'expanded' : 'two-side-navs'} isReferences={expandable}>
    <Sidebar {navigation} {expandable} {parent} />
    <slot />
</Docs>
