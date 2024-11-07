<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Mensajería'
    };

    const navigation: NavTree = [
        {
            label: 'Empezando',
            items: [
                {
                    label: 'Visión general',
                    href: '/docs/products/messaging'
                }
            ]
        },
        {
            label: 'Conceptos',
            items: [
                {
                    label: 'Tópicos',
                    href: '/docs/products/messaging/topics'
                },
                {
                    label: 'Objetivos',
                    href: '/docs/products/messaging/targets'
                },
                {
                    label: 'Mensajes',
                    href: '/docs/products/messaging/messages'
                }
            ]
        },
        {
            label: 'Proveedores',
            items: [
                {
                    label: 'Push con APNs',
                    href: '/docs/products/messaging/apns'
                },
                {
                    label: 'Push con FCM',
                    href: '/docs/products/messaging/fcm'
                },
                {
                    label: 'Email con Mailgun',
                    href: '/docs/products/messaging/mailgun'
                },
                {
                    label: 'Email con SendGrid',
                    href: '/docs/products/messaging/sendgrid'
                },
                {
                    label: 'Email con SMTP',
                    href: '/docs/products/messaging/smtp'
                },
                {
                    label: 'SMS con Twilio',
                    href: '/docs/products/messaging/twilio'
                },
                {
                    label: 'SMS con MSG91',
                    href: '/docs/products/messaging/msg91'
                },
                {
                    label: 'SMS con Telesign',
                    href: '/docs/products/messaging/telesign'
                },
                {
                    label: 'SMS con Textmagic',
                    href: '/docs/products/messaging/textmagic'
                },
                {
                    label: 'SMS con Vonage',
                    href: '/docs/products/messaging/vonage'
                }
            ]
        },
        {
            label: 'Recorridos',
            items: [
                {
                    label: 'Envía notificaciones push',
                    href: '/docs/products/messaging/send-push-notifications'
                },
                {
                    label: 'Envía emails',
                    href: '/docs/products/messaging/send-email-messages'
                },
                {
                    label: 'Envía mensajes SMS',
                    href: '/docs/products/messaging/send-sms-messages'
                }
            ]
        },
        {
            label: 'Referencias',
            items: [
                {
                    label: 'Referencias API',
                    href: '/docs/references/cloud/client-web/messaging'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
