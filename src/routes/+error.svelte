<script lang="ts">
    import { page } from '$app/stores';
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import DocsError from './docs/+error.svelte';

    const isDocs = $page.url.pathname.startsWith('/docs');
</script>

{#if isDocs}
    <DocsError />
{:else}
    <Main>
        <div class="web-big-padding-section">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-hero" style="--hero-gap:1.25rem;">
                        <span class="web-badges text-micro uppercase !text-white"
                            >{$page.status}</span
                        >
                        <h1 class="text-headline font-aeonik-pro text-primary">
                            {$page.error?.message ?? 'Ha ocurrido un error'}
                        </h1>
                        {#if $page.status === 404}
                            <p class="text-description">
                                Lo sentimos, parece que la página que estás buscando no existe.
                                Si lo deseas, puedes usar nuestro menú de navegación o el botón
                                de abajo para explorar más de la documentación de Appwrite.
                            </p>
                        {/if}
                        <a href="/" class="web-button self-center">Volver a la página principal</a>
                    </div>
                </div>
            </div>
            <div class="pt-[7.5rem] relative">
                <div class="container">
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </Main>
{/if}
