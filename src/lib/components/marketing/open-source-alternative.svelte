<script lang="ts">
    import { sleep, unwrite, write } from '$lib/animations';

    import collaboration from './(assets)/icons/collaboration.svg';
    import customization from './(assets)/icons/customization.svg';
    import transparency from './(assets)/icons/transparency.svg';
    import DiscordLink from '../shared/discord-link.svelte';
    import GithubStats from '../shared/github-stats.svelte';
    import type { SvelteHTMLElements } from 'svelte/elements';
    import { classNames } from '$lib/utils/classnames';
    import { onMount } from 'svelte';

    const items = [
        {
            title: 'Community collaboration',
            copy: "Share knowledge and learn from others' experiences.",
            icon: collaboration
        },
        {
            title: 'Transparency and security',
            copy: 'The source code is openly accessible for anyone to inspect.',
            icon: transparency
        },
        {
            title: 'Customization and flexibility',
            copy: 'The freedom to customize and adapt products to your needs. ',
            icon: customization
        }
    ];

    type Props = {
        platforms?: Array<string>;
    } & SvelteHTMLElements['div'];

    const {
        platforms = ['Auth0', 'Firebase', 'Supabase', 'NHost'],
        class: className,
        ...rest
    }: Props = $props();

    let activeIndex = $state<number>(0);
    let activePlatformText = $state<string>('');

    const rotatePlatforms = async () => {
        while (true) {
            await write(platforms[activeIndex], (v) => (activePlatformText = v), 500);

            await sleep(5000);

            await unwrite(platforms[activeIndex], (v) => (activePlatformText = v), 250);

            await sleep(500);

            activeIndex = (activeIndex + 1) % platforms.length;
        }
    };

    onMount(() => {
        rotatePlatforms();
    });
</script>

<div class={classNames('light bg-greyscale-50 pt-40 pb-40', className)} {...rest}>
    <div class="container overflow-x-hidden max-md:px-5!">
        <div class="mx-auto mb-20 flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 class="text-display text-primary font-aeonik-pro">
                Open source <br class="hidden md:block" />alternative to

                <br class="block md:hidden" />
                <div
                    class="relative inline-flex bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)] bg-clip-text pb-2 text-transparent"
                >
                    {activePlatformText}
                    <div
                        class="animate-caret-blink -right-2 bottom-0 mt-1 ml-2 block h-full min-h-14 w-px bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)]"
                    ></div>
                </div>
            </h2>
            <p class="md:text-description text-body text-secondary font-medium">
                Appwrite is a 100% open source project, giving you the flexibility and support you
                need to get your project started.
            </p>
            <div
                class="mx-auto mt-2 flex w-full flex-col items-center justify-center gap-2 md:flex-row"
            >
                <GithubStats class="w-full! md:w-fit!" />
                <DiscordLink class="w-full! md:w-fit!" />
            </div>
        </div>

        <div
            class="divide-smooth grid w-full grid-cols-1 divide-y divide-dashed md:grid-cols-3 md:place-items-center md:divide-y-0"
        >
            {#each items as item}
                <div
                    class="border-smooth py-10 text-center font-medium last-of-type:border-0 md:border-r md:px-10 md:py-0"
                >
                    <img src={item.icon} alt={item.title} class="mx-auto" />
                    <h3 class="text-sub-body text-primary mt-4 font-medium">{item.title}</h3>
                    <p class="text-sub-body text-secondary mt-2 font-normal">{item.copy}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
