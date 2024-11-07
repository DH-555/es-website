<script lang="ts">
    import OpenSource from '$lib/animations/OpenSource.svelte';
    import Products from '$lib/animations/Products/Products.svelte';
    import ProductsMobile from '$lib/animations/Products/ProductsMobile.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import Technologies from '$lib/components/Technologies.svelte';
    import { Main } from '$lib/layouts';
    import { isMobileNavOpen } from '$lib/layouts/Main.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import FooterNav from '../lib/components/FooterNav.svelte';
    import MainFooter from '../lib/components/MainFooter.svelte';
    import DeveloperCard from './DeveloperCard.svelte';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import CoverImage from './dashboard.png';
    import Button from '$lib/components/ui/Button.svelte';
    import Hero from '$lib/components/ui/Hero.svelte';
    import GradientText from '$lib/components/ui/GradientText.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';

    const title = 'Appwrite - Construya como un equipo de cientos';
    const description = DEFAULT_DESCRIPTION;
    const ogImage = `${DEFAULT_HOST}/images/open-graph/website.png`;

    const infoBoxes: Array<{ label: string; description: string; icon: string }> = [
        {
            label: 'Autohospedado',
            description: 'Posee tus datos o hospédalos en una región en la nube de tu elección.',
            icon: '/images/icons/gradients/self-hosted.svg'
        },
        {
            label: 'Cifrado',
            description: 'Cifrado de datos incorporado, tanto en reposo como en tránsito.',
            icon: '/images/icons/gradients/lock.svg'
        },
        {
            label: 'Protección contra abusos',
            description: 'Protege tus APIs de abusos con protección integrada.',
            icon: '/images/icons/gradients/shield.svg'
        },
        {
            label: 'Migraciones de datos',
            description:
                'Transfiere fácilmente datos de terceros o entre la nube y el autohospedado.',
            icon: '/images/icons/gradients/database.svg'
        },
        {
            label: 'GDPR',
            description:
                'Protege los datos y la privacidad del usuario con las regulaciones GDPR proporcionadas.',
            icon: '/images/icons/gradients/star.svg'
        },
        {
            label: 'SOC-2',
            description: 'Asegura el más alto nivel de seguridad y protección de la privacidad.',
            icon: '/images/icons/gradients/soc-2.svg'
        },
        {
            label: 'HIPAA',
            description: 'Protege datos sensibles de salud de los usuarios.',
            icon: '/images/icons/gradients/hipaa.svg'
        }
    ];
</script>

<svelte:head>
    <!-- Títulos -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Descripción -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Imagen -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div
    style:position="absolute"
    style:top="0"
    style:width="100vw"
    style:height="100vh"
    style:overflow="hidden"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <div
        class="absolute"
        style="top: -800px; left: 50%; translate: -50%; pointer-events:none; z-index: 10"
    >
        <enhanced:img
            style="width:1466px; height:804px; transform:rotate(150.348deg); opacity: 0.65; filter: blur(127.5px);
		max-block-size: unset; max-inline-size: unset;"
            src="./top-page-dark.png"
            alt=""
        />
    </div>
</div>

<div
    class="web-is-only-desktop absolute"
    style="top: 22rem; left: 54%; translate: calc(-50% - 900px); width: 75.9375rem;"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <img src="/images/bgs/hero-lines-1.png" alt="" />
</div>

<div
    class="web-is-only-desktop absolute"
    style="top: 42rem; width: calc(50% - 5rem); right: 0;"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <div style="left: 0;">
        <img src="/images/bgs/hero-lines-2.png" alt="" />
    </div>
</div>

<Main>
    <div class="web-big-padding-section">
        <div class="pb-10">
            <div class="my-12 lg:my-[7.5rem]">
                <section class="container pb-0">
                    <a
                        href="/blog/post/announcing-appwrite-is-ccpa-compliant"
                        class="web-hero-banner-button mb-4"
                    >
                        <span class="web-icon-star shrink-0" aria-hidden="true" />
                        <span class="text-caption shrink-0 font-medium">Nuevo</span>
                        <div class="web-hero-banner-button-sep" />
                        <span class="text-caption web-u-trim-1"
                            >Appwrite ahora cumple con la CCPA.</span
                        >
                        <span class="web-icon-arrow-right shrink-0" aria-hidden="true" />
                    </a>
                    <Hero>
                        <GradientText slot="title"
                            >Construya como un equipo de cientos<span class="text-accent">_</span
                            ></GradientText
                        >

                        <svelte:fragment slot="description">
                            Construya todo su backend en minutos y escale sin esfuerzo usando la
                            plataforma de código abierto de Appwrite. Agregue Autenticación, Bases
                            de Datos, Funciones, Almacenamiento y Mensajería a tus proyectos
                            utilizando los frameworks y lenguajes de tu elección.
                        </svelte:fragment>
                        <a
                            href={PUBLIC_APPWRITE_DASHBOARD}
                            class="web-button mt-8 w-full lg:w-fit"
                            slot="cta"
                        >
                            Empezar ahora
                        </a>
                    </Hero>
                </section>
            </div>
            <div class="mb-12 lg:my-[7.5rem]">
                <section class="container web-u-padding-block-0" style="--container-size:78.75rem">
                    <div class="web-media-container">
                        <img
                            class="block"
                            src={CoverImage}
                            alt="console dashboard"
                            style:aspect-ratio="1244 / 717"
                        />
                    </div>
                </section>
            </div>
            <div class="mb-12 lg:my-[7.5rem]">
                <div class="container">
                    <h2
                        class="text-title font-aeonik-pro text-primary web-u-max-width-600 mx-auto text-center"
                    >
                        Confiado por desarrolladores de las principales organizaciones del mundo
                    </h2>
                    <ul class="web-grid-3c-4c-6c is-for-logos web-u-padding-block-start-80">
                        <li>
                            <img
                                src="/images/logos/trusted-by/apple.svg"
                                alt="Apple"
                                width="42"
                                height="48"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/oracle.svg"
                                alt="ORACLE"
                                width="136"
                                height="17"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/tiktok.svg"
                                alt="TikTok"
                                width="133"
                                height="32"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/intel.svg"
                                alt="intel"
                                width="76"
                                height="30"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/ibm.svg"
                                alt="IBM"
                                width="74"
                                height="30"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/american-airlines.svg"
                                alt="American Airlines"
                                width="147"
                                height="24"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/deloitte.svg"
                                alt="Deloitte."
                                width="103"
                                height="20"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/gm.svg"
                                alt="GM"
                                width="48"
                                height="48"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/ey.svg"
                                alt="EY"
                                width="46"
                                height="48"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/nestle.svg"
                                alt="Nestle"
                                width="119"
                                height="34"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/bosch.svg"
                                alt="BOSCH"
                                width="110"
                                height="37"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/decathlon.svg"
                                alt="DECATHLON"
                                width="127"
                                height="32"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <Products />
        <ProductsMobile />

        <div class="web-white-section light relative py-10">
            <div class="absolute bottom-0 w-full">
                <img
                    class="block w-full"
                    src="/images/bgs/padding-section-1.svg"
                    alt=""
                    style:max-height="48rem"
                />
            </div>

            <div class="my-[7.5rem]">
                <div class="container">
                    <section class="web-hero is-align-start">
                        <Badge>PRIVACIDAD Y SEGURIDAD_</Badge>
                        <h2 class="text-display font-aeonik-pro text-primary max-w-[700px]">
                            Aloja tus datos o llévalos a la Nube
                        </h2>
                        <p class="text-secondary mt-5 max-w-[700px] text-xl font-medium">
                            Migra tus datos desde y hacia cualquier plataforma en cualquier momento
                            con Appwrite Migrations. Con seguridad y privacidad integradas para tu
                            tranquilidad.
                        </p>
                    </section>
                    <div class="mt-20 overflow-hidden">
                        <ul
                            class="web-info-boxes text-sub-body divide-x divide-y divide-black/[0.04] font-medium"
                        >
                            {#each infoBoxes as box}
                                <li class="relative border-black/[0.04] p-8 last-of-type:border-r">
                                    <img src={box.icon} width="40" height="40" alt="" />
                                    <h3
                                        class="text-primary mt-4 flex flex-wrap items-baseline gap-3"
                                    >
                                        {box.label}
                                    </h3>
                                    <p class="text-secondary mt-1">
                                        {box.description}
                                    </p>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
            <OpenSource />
            <div class="my-[7.5rem]">
                <div class="container">
                    <div class="web-hero">
                        <div class="text-display font-aeonik-pro text-primary">
                            Amado por desarrolladores como tú
                        </div>
                    </div>
                    <ul class="web-multi-columns-1 mt-20">
                        <li>
                            <DeveloperCard
                                name="Terry Lennon"
                                tag="@terry_lennon"
                                icon="product-hunt"
                                avatarSrc="/images/community/avatars/terry.png"
                            >
                                He apoyado a Appwrite durante más de un año, incluso en las empresas
                                en las que trabajaba. Su comunidad es inigualable, la velocidad de
                                lanzamiento de funciones es excepcional y el soporte en su Discord
                                es increíble.
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Varun Dhand"
                                tag="@varundhand"
                                icon="linkedin"
                                avatarSrc="/images/community/avatars/varun.png"
                            >
                                Recientemente, comencé un viaje para crear una Aplicación de Chat en
                                Tiempo Real que redefiniría la comunicación sin interrupciones. En
                                el camino, descubrí una herramienta increíble que transformó mi
                                trabajo en el backend: ¡Appwrite!
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Kap.ts"
                                tag="@Kaperskyguru"
                                icon="x"
                                avatarSrc="/images/community/avatars/kap.png"
                            >
                                Ingenieros de Backend, estarán de acuerdo conmigo en que construir
                                el proceso de autenticación para su aplicación con cada nuevo
                                desarrollo de API es un dolor. Aquí está mi secreto: dejo que <a
                                    href="https://twitter.com/appwrite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-link underline">@appwrite</a
                                > maneje mi proceso de autenticación mientras me concentro en la lógica
                                de negocio.
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Stephen Simon"
                                tag="@codewithsimon"
                                icon="product-hunt"
                                avatarSrc="/images/community/avatars/stephen.png"
                            >
                                ¡Absolutamente enamorado de Appwrite y su compromiso con la
                                comunidad!
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Teri"
                                tag="@terieyenike"
                                icon="product-hunt"
                                avatarSrc="/images/community/avatars/terieyenike.png"
                            >
                                He usado Appwrite dos veces, y la experiencia fue excelente, ya que
                                pude construir una aplicación de pila completa. Lo recomendaría a
                                cualquiera que busque explorar una opción alternativa de base de
                                datos. Appwrite es simplemente el mejor.
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Souvik Sarkar"
                                tag="@Jeet_2003"
                                icon="x"
                                avatarSrc="/images/community/avatars/souvik.png"
                            >
                                Si estás buscando un servidor backend que sea poderoso y fácil de
                                usar, revisa <a
                                    href="https://twitter.com/appwrite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-link underline">@appwrite</a
                                >. Con su sólido conjunto de características y su naturaleza de
                                código abierto, es la elección perfecta para desarrolladores que
                                quieren construir aplicaciones seguras y escalables.
                            </DeveloperCard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="relative overflow-hidden pt-10">
            <div
                class="web-is-not-mobile absolute"
                style:inline-size="768px"
                style:block-size="768px"
                style:inset-block-start="0rem"
                style:z-index="-1"
                style:left="calc(50% - 384px + 350px)"
            >
                <img
                    src="/images/animations/tech-dark.png"
                    width="768"
                    height="768"
                    alt=""
                    style="position: absolute; display: block;"
                />
            </div>
            <div class="py-[7.5rem]">
                <div class="container relative">
                    <section class="web-hero is-align-start">
                        <span class="web-badges text-micro uppercase !text-white">SDKs_</span>
                        <h2 class="text-display font-aeonik-pro text-primary max-w-[600px]">
                            Programa como desees
                        </h2>
                        <p class="text-secondary mt-5 max-w-[600px] text-xl font-medium">
                            Soportamos muchos SDKs, haciendo que Appwrite sea flexible a tus
                            necesidades y asegurando que puedas programar con el lenguaje que desees
                            en cualquier momento.
                        </p>
                        <Technologies />
                        <a href="/docs/sdks" class="web-button is-secondary"
                            >Explora todos los SDKs</a
                        >
                    </section>
                </div>
            </div>
            <div class="relative my-[7.5rem] overflow-hidden">
                <div
                    class="web-is-not-mobile absolute z-0"
                    style:width="50%"
                    style:height="100%"
                    style:left="0"
                >
                    <div style:display="grid" style:place-items="center" style:height="100%">
                        <img
                            src="/images/bgs/diagonal-lines.png"
                            alt=""
                            width="512"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div class="container relative">
                    <div class="grid md:grid-cols-2">
                        <section class="web-hero is-align-start">
                            <span class="web-badges text-micro uppercase !text-white">Escala_</span>
                            <h2 class="text-display font-aeonik-pro text-primary max-w-[600px]">
                                Escalamos por ti
                            </h2>
                        </section>
                        <ul
                            class="web-big-list-info web-u-inline-width-100-percent-mobile-break1 web-u-margin-block-start-48 ml-auto"
                        >
                            <li class="web-big-list-info-item">
                                <div class="text-headline font-aeonik-pro text-primary">90K</div>
                                <div class="text">Proyectos</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="text-headline font-aeonik-pro text-primary">+1B</div>
                                <div class="text">Solicitudes atendidas</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="text-headline font-aeonik-pro text-primary">20K</div>
                                <div class="text">Organizaciones</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="text-headline font-aeonik-pro text-primary">99.99%</div>
                                <div class="text">Disponibilidad garantizada</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden pt-[7.5rem]">
                <div class="container">
                    <PreFooter />
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
</style>
