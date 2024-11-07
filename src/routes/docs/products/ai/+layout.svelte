<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'IA'
    };

    const navigation: NavTree = [
        {
            label: 'Empezando',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/ai'
                }
            ]
        },
        {
            label: 'Conceptos',
            items: [
                {
                    label: 'Visión computacional',
                    href: '/docs/products/ai/computer-vision'
                },
                {
                    label: 'Procesamiento natural del lenguaje',
                    href: '/docs/products/ai/natural-language'
                },
                {
                    label: 'Procesamiento de audio',
                    href: '/docs/products/ai/audio-processing'
                }
            ]
        },
        {
            label: 'Visión computacional',
            items: [
                {
                    label: 'Clasificación de imágenes',
                    href: '/docs/products/ai/tutorials/image-classification'
                },
                {
                    label: 'Detección de objetos',
                    href: '/docs/products/ai/tutorials/object-detection'
                }
            ]
        },
        {
            label: 'procesamiento natural del lenguaje',
            items: [
                {
                    label: 'Generación de textos',
                    href: '/docs/products/ai/tutorials/text-generation'
                },
                {
                    label: 'Traducción del lenguaje',
                    href: '/docs/products/ai/tutorials/language-translation'
                }
            ]
        },
        {
            label: 'Procesamiento de audio',
            items: [
                {
                    label: 'Reconocimiento del habla',
                    href: '/docs/products/ai/tutorials/speech-recognition'
                },
                {
                    label: 'Texto a sonido',
                    href: '/docs/products/ai/tutorials/text-to-speech'
                },
                {
                    label: 'Generación de música',
                    href: '/docs/products/ai/tutorials/music-generation'
                }
            ]
        },
        {
            label: 'Integraciones',
            items: [
                {
                    label: 'Perplexity',
                    href: '/docs/products/ai/integrations/perplexity'
                },
                {
                    label: 'Replicate',
                    href: '/docs/products/ai/integrations/replicate'
                },
                {
                    label: 'OpenAI',
                    href: '/docs/products/ai/integrations/openai'
                },
                {
                    label: 'Pinecone',
                    href: '/docs/products/ai/integrations/pinecone'
                },
                {
                    label: 'ElevenLabs',
                    href: '/docs/products/ai/integrations/elevenlabs'
                },
                {
                    label: 'LangChain',
                    href: '/docs/products/ai/integrations/langchain'
                },
                {
                    label: 'Anyscale',
                    href: '/docs/products/ai/integrations/anyscale'
                },
                {
                    label: 'LMNT',
                    href: '/docs/products/ai/integrations/lmnt'
                },
                {
                    label: 'Together AI',
                    href: '/docs/products/ai/integrations/togetherai'
                },
                {
                    label: 'fal.ai',
                    href: '/docs/products/ai/integrations/fal-ai'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
