<script lang="ts" module>
    export const MAP_BOUNDS = $state({
        west: -138,
        east: 167,
        north: 74,
        south: -62
    });
</script>

<script lang="ts">
    import MapMarker from './map-marker.svelte';
    import { slugify } from '$lib/utils/slugify';
    import { classNames } from '$lib/utils/classnames';
    import MapNav from './map-nav.svelte';
    import { useMousePosition } from '$lib/actions/mouse-position';
    import { useAnimateInView } from '$lib/actions/animate-in-view';
    import { pins, type PinSegment } from './data/pins';
    import MapTooltip from './map-tooltip.svelte';

    let dimensions = $state({
        width: 0,
        height: 0
    });

    let activeRegion = $state<string | null>(null);
    let activeMarker: HTMLElement | null = null;
    let activeSegment = $state<string>('pop-locations');

    const { action: mousePosition, position } = useMousePosition();
    const { action: inView, animate } = useAnimateInView({});

    const scrollMarkerIntoView = (marker: HTMLElement) => {
        return new Promise<void>((resolve) => {
            marker.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].intersectionRatio > 0.5) {
                        observer.disconnect();
                        resolve();
                    }
                },
                { threshold: [0, 0.25, 0.5, 0.75, 1] }
            );

            observer.observe(marker);
        });
    };

    const handleSetActiveMarker = async (city: string) => {
        const citySlug = slugify(city);

        if (activeRegion === citySlug) {
            activeMarker = null;
            activeRegion = null;
            return;
        }

        activeMarker = document.querySelector(`[data-region="${citySlug}"]`);

        if (activeMarker) {
            await scrollMarkerIntoView(activeMarker);
            activeRegion = citySlug;
        }
    };

    type Props = { theme: 'light' | 'dark' };

    const { theme = 'dark' }: Props = $props();
</script>

<div class="-mt-8 w-full overflow-x-scroll [scrollbar-width:none] md:overflow-x-hidden">
    <div
        class="sticky left-0 mx-auto block max-w-[calc(100vw_-_calc(var(--spacing)_*-2))] md:hidden"
    >
        <select
            class="web-input-text mx-auto appearance-none"
            onchange={(e) => handleSetActiveMarker(e.currentTarget.value)}
        >
            {#each pins[activeSegment as PinSegment] as pin}
                <option value={pin.city}>{pin.city}-({pin.code})</option>
            {/each}
        </select>
    </div>

    <div
        class="relative mx-auto h-full w-[250vw] [scrollbar-width:none] md:w-fit"
        use:inView
        use:mousePosition
    >
        <div
            class="relative w-full origin-bottom transform-[perspective(25px)_rotateX(1deg)_scale3d(1.4,_1.4,_1)] transition-all [scrollbar-width:none]"
            bind:clientWidth={dimensions.width}
            bind:clientHeight={dimensions.height}
        >
            <div
                class="absolute inset-0 mask-[image:url('/images/appwrite-network/map.svg')] mask-contain mask-no-repeat"
            >
                <div
                    class={classNames(
                        'relative block aspect-square size-40 rounded-full blur-3xl transition-opacity',
                        'from-accent bg-radial-[circle_at_center] via-white/70 to-white/70',
                        'transform-[translate3d(calc(var(--mouse-x,_-100%)_*_1_-_16rem),_calc(var(--mouse-y,_-100%)_*_1_-_28rem),0)]'
                    )}
                    style:--mouse-x="{$position.x}px"
                    style:--mouse-y="{$position.y}px"
                ></div>
            </div>

            <!-- TODO: reusing the same image but inverted! use a variable -->
            <img
                draggable="false"
                alt="Map of the world"
                src="/images/appwrite-network/map.svg"
                style:filter={theme === 'light' ? 'invert()' : undefined}
                class="pointer-events-none relative -z-10 w-full opacity-10 md:max-h-[525px]"
            />

            {#each pins[activeSegment] as pin, index}
                <MapMarker {...pin} animate={$animate} {index} bounds={MAP_BOUNDS} />
            {/each}
        </div>
    </div>
</div>

<MapTooltip {theme} coords={$position} />

<MapNav {theme} onValueChange={(value) => (activeSegment = value)} />
