<script lang="ts">
    import { FooterNav, MainFooter, PreFooter } from '$lib/components';
    import { DEFAULT_HOST } from '$lib/utils/metadata';

    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import ComparePlans from './compare-plans.svelte';
    import Faq from './faq.svelte';
    import BG from './bg.png?enhanced';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';

    const title = 'Precios' + TITLE_SUFFIX;
    const description =
        'Explora nuestros planes de precios claros y sencillos que escalan con tu proyecto.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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

<div
    class="web-location-for-mobile absolute overflow-hidden"
    style:pointer-events="none"
    style:inline-size="100%"
>
    <enhanced:img
        src={BG}
        alt=""
        style="margin-inline:auto; display:block; width: 1369px; height: auto;"
    />
</div>

<Main>
    <div class="web-big-padding-section mt-2">
        <div class="dark pt-10">
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <div class="web-hero">
                        <h1
                            class="text-display font-aeonik-pro web-u-max-width-700 web-u-opacity-90 web-u-mobile-align-text-center self-center"
                            style="background: linear-gradient(90deg, #F47298 0%, #E4E1E5 61.98%, #E4E4E7 100%);
                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
                        >
                            Precios simples y transparentes, sin sorpresas
                        </h1>
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <div class="web-pricing-cards">
                        <ul class="web-pricing-cards-list">
                            <li>
                                <article
                                    class="web-card is-transparent has-border-gradient h-full"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="web-pricing-cards-item">
                                        <header class="web-pricing-cards-header">
                                            <h2 id="starter" class="text-label font-aeonik-pro">
                                                Gratis
                                            </h2>
                                            <div
                                                class="text-title font-aeonik-pro text-primary mt-2"
                                            >
                                                $0
                                            </div>
                                            <div class="mt-1">&nbsp;</div>
                                            <p class="text-body mt-4 h-[5rem] font-medium">
                                                Para proyectos personales y estudiantes.
                                            </p>
                                            <a
                                                href="{PUBLIC_APPWRITE_DASHBOARD}/register"
                                                class="web-button is-secondary is-full-width mt-8"
                                            >
                                                <span class="text-sub-body font-medium"
                                                    >Comienza a construir</span
                                                >
                                            </a>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <ul class="web-checked-list-circle">
                                                <li>
                                                    <span>Proyectos ilimitados</span>
                                                </li>
                                                <li><span>Nunca pausado</span></li>
                                                <li><span>10GB de ancho de banda</span></li>
                                                <li><span>2GB de almacenamiento</span></li>
                                                <li><span>750K ejecuciones</span></li>
                                                <li><span>75K usuarios activos mensuales</span></li>
                                                <li><span>Soporte comunitario</span></li>
                                                <li>
                                                    <span>Marca Appwrite no removible</span>
                                                </li>
                                                <li>
                                                    <span
                                                        >1 Base de datos, 3 Buckets, 5 Funciones por
                                                        proyecto</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <article
                                    class="web-card is-transparent is-transparent-pink has-border-gradient h-full"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="web-pricing-cards-item">
                                        <header class="web-pricing-cards-header">
                                            <header class="flex gap-3">
                                                <h2 id="pro" class="text-label font-aeonik-pro">
                                                    Pro
                                                </h2>
                                                <div class="web-inline-tag is-pink">Popular</div>
                                            </header>
                                            <div
                                                class="text-title font-aeonik-pro text-primary mt-2"
                                            >
                                                $15
                                            </div>
                                            <div class="mt-1">por miembro/mes</div>
                                            <p class="text-body mt-4 h-[5rem] font-medium">
                                                Para desarrolladores profesionales y equipos que
                                                necesitan escalar sus productos.
                                            </p>
                                            <a
                                                href="https://cloud.appwrite.io/console?type=createPro"
                                                class="web-button is-full-width mt-8"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span class="text-sub-body font-medium"
                                                    >Comienza a construir</span
                                                >
                                            </a>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <p>Todo lo que incluye el plan Gratis, además:</p>
                                            <ul class="web-checked-list-circle">
                                                <li><span>300GB de ancho de banda</span></li>
                                                <li><span>150GB de almacenamiento</span></li>
                                                <li><span>3.5M ejecuciones</span></li>
                                                <li>
                                                    <span>200K usuarios activos mensuales</span>
                                                </li>
                                                <li><span>Soporte por correo electrónico</span></li>
                                                <li><span>Complementos</span></li>
                                                <li>
                                                    <span
                                                        >Bases de datos, Buckets y Funciones
                                                        ilimitadas</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <article
                                    class="web-card is-transparent has-border-gradient h-full"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="web-pricing-cards-item">
                                        <header class="web-pricing-cards-header">
                                            <h2 id="scale" class="text-label font-aeonik-pro">
                                                Escale
                                            </h2>
                                            <div
                                                class="text-title font-aeonik-pro text-primary mt-2"
                                            >
                                                $599
                                            </div>
                                            <div class="mt-1">por organización/mes</div>
                                            <p class="text-body mt-4 h-[5rem] font-medium">
                                                Para equipos y agencias en expansión que necesitan
                                                soporte dedicado.
                                            </p>
                                            <button
                                                class="web-button is-secondary is-full-width mt-8"
                                                disabled
                                            >
                                                <span class="text-sub-body font-medium"
                                                    >Próximamente</span
                                                >
                                            </button>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <p>Todo lo que incluye el plan Pro además:</p>
                                            <ul class="web-checked-list-circle">
                                                <li><span>Asientos ilimitados</span></li>
                                                <li><span>SOC-2</span></li>
                                                <li><span>BAA</span></li>
                                                <li><span>Registros de red</span></li>
                                                <li>
                                                    <span>Retención de registros de 28 días</span>
                                                </li>
                                                <li><span>Roles de organización</span></li>
                                                <li><span>SSO</span></li>
                                                <li><span>Registros de actividad</span></li>
                                                <li><span>Soporte prioritario</span></li>
                                                <li>
                                                    <span
                                                        >Una sesión de estrategia cada trimestre</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <h2 class="text-heading font-aeonik-pro mt-10 text-center">
                        Preguntas Frecuentes
                    </h2>
                    <div class="web-faq-cards">
                        <Faq />
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <h2 class="text-heading font-aeonik-pro mt-10 text-center">Comparar Planes</h2>
                    <div class="web-compare-plans-cards">
                        <ComparePlans />
                    </div>
                </section>
            </div>
        </div>
    </div>
</Main>

<FooterNav />
<PreFooter />
<MainFooter />
