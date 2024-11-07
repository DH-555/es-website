<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Autenticación'
    };

    const navigation: NavTree = [
        {
            label: 'Empezando',
            items: [
                {
                    label: 'Visión general',
                    href: '/docs/products/auth'
                },
                {
                    label: 'Inicio rápido',
                    href: '/docs/products/auth/quick-start'
                }
            ]
        },
        {
            label: 'Conceptos',
            items: [
                {
                    label: 'Cuentas',
                    href: '/docs/products/auth/accounts'
                },
                {
                    label: 'Uusarios',
                    href: '/docs/products/auth/users'
                },
                {
                    label: 'Equipos',
                    href: '/docs/products/auth/teams'
                },
                {
                    label: 'Etiquetas',
                    href: '/docs/products/auth/labels'
                },
                {
                    label: 'Seguridad',
                    href: '/docs/products/auth/security'
                },
                {
                    label: 'Tokens',
                    href: '/docs/products/auth/tokens'
                }
            ]
        },
        {
            label: 'Recorridos',
            items: [
                {
                    label: 'Email y contraseña',
                    href: '/docs/products/auth/email-password'
                },
                {
                    label: 'Teléfono (SMS)',
                    href: '/docs/products/auth/phone-sms'
                },
                {
                    label: 'Enlace/URL mágico',
                    href: '/docs/products/auth/magic-url'
                },
                {
                    label: 'Enlace temporal mediante email',
                    href: '/docs/products/auth/email-otp'
                },
                {
                    label: 'OAuth2',
                    href: '/docs/products/auth/oauth2'
                },
                {
                    label: 'Anónimo',
                    href: '/docs/products/auth/anonymous'
                },
                {
                    label: 'JWT',
                    href: '/docs/products/auth/jwt'
                },
                {
                    label: 'SSR ',
                    href: '/docs/products/auth/server-side-rendering'
                },
                {
                    label: 'Token personalizado',
                    href: '/docs/products/auth/custom-token'
                },
                {
                    label: 'Autenticación multifactor',
                    href: '/docs/products/auth/mfa'
                }
            ]
        },
        {
            label: 'Referencias',
            items: [
                {
                    label: 'API de cuentas',
                    href: '/docs/references/cloud/client-web/account'
                },
                {
                    label: 'API de usuarios',
                    href: '/docs/references/cloud/server-nodejs/users'
                },
                {
                    label: 'API de equipos',
                    href: '/docs/references/cloud/client-web/teams'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
