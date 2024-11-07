<script lang="ts">
    import { page } from '$app/stores';
    import { MainFooter } from '$lib/components';
    import { Docs } from '$lib/layouts';
    import Sidebar from './Sidebar.svelte';
</script>

<Docs variant="two-side-navs">
    <Sidebar />
    <div class="web-article mx-auto flex max-w-[700px] items-center justify-center py-4">
        <div class="container">
            <div class="web-hero" style="--hero-gap:1.25rem;">
                <span class="web-badges text-micro uppercase !text-white">{$page.status}</span>
                <h1 class="text-headline font-aeonik-pro text-primary">
                    {$page.error?.message ?? 'An error has occured'}
                </h1>
                {#if $page.status === 404}
                    <p class="text-description">
                        Lo sentimos, pero parece que la página que estás buscando no existe. Utiliza
                        nuestro menú de navegación o el botón a continuación para explorar más de la
                        documentación de Appwrite.
                    </p>
                {/if}
                <a href="/docs" class="web-button is-secondary mt-3 self-center">
                    <span>Volver a la documentación</span>
                </a>
            </div>
        </div>
    </div>
    <MainFooter variant="docs" />
</Docs>
