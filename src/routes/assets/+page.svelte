<script lang="ts">
    import { visible } from '$lib/actions';
    import TocNav from '$lib/components/TocNav.svelte';
    import TocRoot from '$lib/components/TocRoot.svelte';
    import { Main } from '$lib/layouts';

    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';
    import Copy from './Copy.svelte';

    const title = 'Assets' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    enum Section {
        NAMING = 'Naming',
        LOGOTYPE = 'Logotype',
        LOGOMARK = 'Logomark',
        COLORS = 'Brand colors',
        VISUALS = 'Product visuals',
        CONTACT = 'Contact us'
    }

    const getSectionId = (section: Section) => section.toLowerCase().replace(/\s/g, '-');

    let selectedMap: Map<Section, boolean> = new Map(
        Object.values(Section).map((section) => [section, false])
    );

    const handleVisibility = (section: Section) => {
        return (e: CustomEvent<boolean>) => {
            selectedMap.set(section, e.detail);
            selectedMap = selectedMap;
        };
    };
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="web-u-pointer-events-none absolute">
    <enhanced:img src="./bg.png" alt="" />
</div>

<Main omitMainId>
    <TocRoot>
        <div class="container">
            <div class="web-grid-120-1fr-auto">
                <header class="web-grid-120-1fr-auto-header">
                    <h1 class="text-display font-aeonik-pro text-primary">Brand assets</h1>
                    <button
                        class="web-u-padding-block-20 text-primary web-is-only-mobile
                        web-u-margin-inline-32-negative web-u-sep-block
                       mt-6 flex w-full w-full"
                    >
                        <span class="container flex w-full items-center justify-between">
                            <span class="text-description">Table of contents</span>
                            <span class="icon-menu-alt-4" aria-hidden="true" />
                        </span>
                    </button>
                </header>
                <TocNav />
                <main class="web-grid-120-1fr-auto-main /web-is-mobile-closed" id="main">
                    <div class="web-content">
                        <section>
                            <p>
                                Recursos para presentar la marca Appwrite y mantener la consistencia
                                al utilizar nuestros logotipos, colores y otros elementos de la
                                marca en diversas plataformas y materiales.
                            </p>

                            <a href="/assets.zip" download class="web-button">
                                <span class="web-icon-download" aria-hidden="true" />
                                <span>Descargar recursos</span>
                            </a>
                        </section>

                        <section id={getSectionId(Section.NAMING)}>
                            <div class="web-flex flex-col gap-2">
                                <h2
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.NAMING)}
                                >
                                    Mención
                                </h2>
                                <p>
                                    Escribe 'Appwrite', con una 'w' minúscula y sin espacio entre
                                    las dos palabras. Por favor, abstente de usar variaciones como
                                    'AppWrite' o 'App Write'.
                                </p>
                            </div>
                        </section>

                        <section id={getSectionId(Section.LOGOTYPE)}>
                            <div class="web-flex flex-col gap-2">
                                <h2
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.LOGOTYPE)}
                                >
                                    Logotipo
                                </h2>
                                <p>
                                    El logo de Appwrite se presenta como un símbolo destacado de la
                                    identidad de nuestra marca. Abstente de alterar nuestro logo y,
                                    preferiblemente, utilízalo sobre un fondo neutro.
                                </p>
                                <div class="web-flex flex-col-mobile mt-5 flex flex-wrap gap-8">
                                    <div
                                        class="media-wrapper | light |
                                    web-u-flex-basis-300 web-u-bg-color-neutral-100 web-u-min-block-size-320 flex flex-1 items-center justify-center rounded-lg
                                    ps-16 pe-16"
                                    >
                                        <img
                                            src="/assets/logotype/white.svg"
                                            alt="Appwrite logo with black text"
                                        />
                                        <div class="buttons">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logotype/white.svg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>SVG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logotype/white.png"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="media-wrapper | dark |
                                    web-u-flex-basis-300 web-u-border-radius-8 web-u-bg-color-neutral-800 web-u-min-block-size-320 flex flex-1 items-center justify-center
                                    ps-16 pe-16"
                                    >
                                        <img
                                            src="/assets/logotype/black.svg"
                                            alt="Appwrite logo with white text"
                                        />
                                        <div class="buttons">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logotype/black.svg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>SVG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logotype/black.png"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section>
                                <div class="web-flex flex-col gap-2">
                                    <h3 class="text-label text-primary mt-3 mb-4">
                                        Logotipos de co-branding
                                    </h3>
                                    <p>
                                        El espaciado está determinado por la marca Appwrite. A menos
                                        que se indique lo contrario por las marcas asociadas, cada
                                        logotipo es ópticamente igual como una colección de formas.
                                    </p>
                                    <div
                                        class="web-u-border-radius-8 web-u-bg-color-neutral-800 web-u-min-block-size-320 mt-5 flex items-center
                                                justify-center px-4"
                                    >
                                        <img
                                            src="/assets/logotype/co-brand.svg"
                                            alt="Appwrite logo besides a generic logo"
                                        />
                                    </div>
                                </div>
                            </section>
                        </section>

                        <section id={getSectionId(Section.LOGOMARK)}>
                            <div class="web-flex flex-col gap-2">
                                <h3
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.LOGOMARK)}
                                >
                                    Logosímbolo
                                </h3>
                                <p>
                                    Mientras se prioriza el reconocimiento, el logotipo es la opción
                                    recomendada. Utilizar la marca del logotipo de Appwrite es
                                    adecuado para situaciones donde las limitaciones de espacio
                                    dificultan mostrar el logotipo completo.
                                </p>
                                <div class="web-flex flex-col-mobile mt-5 flex flex-wrap gap-8">
                                    <div
                                        class="media-wrapper | light |
                                    web-u-flex-basis-300 web-u-border-radius-8 web-u-bg-color-neutral-100 web-u-min-block-size-320 flex flex-1 items-center justify-center
                                    ps-16 pe-16"
                                    >
                                        <img
                                            src="/assets/logomark/logo.svg"
                                            alt="Appwrite's logomark"
                                        />
                                        <div class="buttons">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logomark/logo.svg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>SVG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logomark/logo.png"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="media-wrapper | dark |
                                    web-u-flex-basis-300 web-u-border-radius-8 web-u-bg-color-neutral-800 web-u-min-block-size-320 flex flex-1 items-center justify-center
                                    ps-16 pe-16"
                                    >
                                        <img
                                            src="/assets/logomark/logo.svg"
                                            alt="Appwrite's logomark"
                                        />
                                        <div class="buttons">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logomark/logo.svg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>SVG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logomark/logo.png"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="">
                                <div class="web-flex flex-col gap-2">
                                    <h3 class="text-label text-primary mt-3 mb-4">
                                        Bloques de co-branding
                                    </h3>
                                    <p>
                                        El espaciado está determinado por la marca Appwrite. A menos
                                        que se indique lo contrario por las marcas asociadas, cada
                                        logo es ópticamente igual como una colección de formas.
                                    </p>
                                    <div
                                        class="web-u-border-radius-8 web-u-bg-color-neutral-800 web-u-min-block-size-320 mt-4 flex items-center
                                                justify-center px-4"
                                    >
                                        <img
                                            src="/assets/logomark/co-brand.svg"
                                            alt="Logomark cobrand example"
                                        />
                                    </div>
                                </div>
                            </section>
                        </section>

                        <section id={getSectionId(Section.COLORS)}>
                            <h2
                                class="text-title font-aeonik-pro text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.COLORS)}
                            >
                                Colores de marca
                            </h2>
                            <div class="flex flex-wrap gap-8">
                                <div
                                    class="media-wrapper | web-u-flex-basis-200 web-flex web-u-border-radius-8 web-u-text-color-neutral-900 web-u-bg-color-neutral-50 web-u-min-block-size-160 flex
                                aspect-square flex-1 flex-col justify-center
                                gap-2 px-6"
                                >
                                    <h3 class="text-label">Gris claro</h3>
                                    <p class="text-caption">#EDEDF0</p>
                                    <div class="buttons | light">
                                        <Copy toCopy="#EDEDF0" />
                                    </div>
                                </div>
                                <div
                                    class="media-wrapper | web-u-sep web-u-flex-basis-200 web-flex web-u-border-radius-8 web-u-min-block-size-160 web-u-text-color-neutral-50 web-u-bg-color-neutral-900
                                flex aspect-square flex-1 flex-col justify-center
                                gap-2 px-6"
                                >
                                    <h3 class="text-label">Gris oscuro</h3>
                                    <p class="text-caption">#19191D</p>
                                    <div class="buttons">
                                        <Copy toCopy="#19191D" />
                                    </div>
                                </div>
                                <div
                                    class="media-wrapper | web-u-flex-basis-200 web-flex web-u-border-radius-8 web-u-text-color-neutral-50 web-u-bg-color-primary-500 web-u-min-block-size-160 flex
                                aspect-square flex-1 flex-col justify-center
                                gap-2 px-6"
                                >
                                    <h3 class="text-label">Rosa Appwrite</h3>
                                    <p class="text-caption">#FD366E</p>
                                    <div class="buttons">
                                        <Copy toCopy="#FD366E" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id={getSectionId(Section.VISUALS)}>
                            <div class="web-flex flex-col gap-2">
                                <h2
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.VISUALS)}
                                >
                                    Visuales del productos
                                </h2>
                                <p>
                                    Utiliza estos elementos visuales del producto para mejorar tus
                                    artículos, presentaciones y contenido relacionado con Appwrite.
                                </p>
                                <div class="mt-5 grid grid-cols-2 gap-8">
                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/dashboard.png"
                                            alt="Dashboard"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/dashboard.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/dashboard.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/auth.png"
                                            alt="Appwrite Auth"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/auth.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/auth.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/databases.png"
                                            alt="Appwrite Databases"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/databases.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/databases.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/storage.png"
                                            alt="Appwrite Storage"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/storage.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/storage.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/functions.png"
                                            alt="Appwrite Functions"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/functions.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/functions.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/messaging.png"
                                            alt="Appwrite Messaging"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/messaging.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/messaging.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                />
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id={getSectionId(Section.CONTACT)}>
                            <div class="web-flex flex-col gap-2">
                                <h2
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.CONTACT)}
                                >
                                    Contáctanos
                                </h2>
                                <p>
                                    Si necesitas más ayuda o tienes necesidades específicas más allá
                                    de lo que se presenta en esta página, no dudes en
                                    <a
                                        class="web-link"
                                        href="/contact-us"
                                        target="_blank"
                                        rel="noopener noreferrer">contactarnos</a
                                    >.
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            <FooterNav />
            <MainFooter />
        </div>
    </TocRoot>
</Main>

<style lang="scss">
    .media-wrapper {
        position: relative;

        .buttons {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            position: absolute;
            right: 1rem;
            bottom: 1rem;

            &.visuals {
                justify-content: left;
                top: auto;
                position: relative;
                margin-top: 2rem;
            }
        }
    }
</style>
