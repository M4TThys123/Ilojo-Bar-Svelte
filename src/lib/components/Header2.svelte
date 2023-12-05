<script lang="ts">
    import HamburgerButton from "$lib/components/HamburgerButton.svelte";
    import {onMount} from 'svelte';
    // For the route path
    import {page} from '$app/stores';

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
    });
    export let stories: { title: string, id: number }[] = [];

    // Date atributes
    let isScrolled = false
    let isBlur = false
    let isNavOpen = false;

    // Functions
    function handleScroll() {
        if (window.pageYOffset > 0) {
            isScrolled = true;
        } else {
            isScrolled = false;
        }
    }

    function closeNav() {
        console.log('closeNav() kanker')
    }

    function toggleNav() {
        console.log('toggleNav()')
        isNavOpen = !isNavOpen;
        isScrolled = true
        console.log(isNavOpen)
    }
</script>

<header class:no-background={!isScrolled}>
    <nav>
        <a class="logo-link" href="/" on:click={closeNav}>
            {#if isScrolled}
                <!-- Dark image -->
                <picture>
                    <source srcset="/assets/images/logo-ilojo-bar-dark.webp" type="image/webp">
                    <source srcset="/assets/images/logo-ilojo-bar-dark.png" type="image/png">
                    <img src="/assets/images/logo-ilojo-bar-dark.webp"
                         alt="Ilojo Bar Logo"
                         width="100%"
                         height="32px"
                         class="header__link__image"
                    >
                </picture>
            {:else}
                <!-- Light image -->
                <picture>
                    <source srcset="/assets/images/logo-ilojo-bar.webp" type="image/webp">
                    <source srcset="/assets/images/logo-ilojo-bar.png" type="image/png">
                    <img src="/assets/images/logo-ilojo-bar.webp"
                         alt="Ilojo Bar Logo"
                         width="100%"
                         height="32px"
                         class="header__link__image"
                    >
                </picture>
            {/if}
        </a>


        <div class="nav-menu" id="navbarNav">
            <ul class="nav-list">
                <li class="nav-item">
                    <a
                            class="nav-link dropdown-toggle"
                            class:nav-link__scroll={isScrolled}
                            on:click={closeNav}
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                    >
                        DISCOVER STORIES
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        {#each stories as story (story.id)}
                            <li>
                                <a href={`/discover/${story.id}`} class="dropdown-item" data-sveltekit-reload
                                   on:click={closeNav}>
                                    {story.title}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       class:nav-link__scroll={isScrolled}
                       on:click={closeNav}
                    >GUESTBOOK</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       class:nav-link__scroll={isScrolled}
                       on:click={closeNav}
                    >3D MODEL</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       class:nav-link__active={$page.url.pathname === '/credits'}
                       class:nav-link__scroll={isScrolled}
                       on:click={closeNav}
                    >CREDITS</a>
                </li>
            </ul>
        </div>

        <button class="ham-button"
                on:click={toggleNav}>
            <HamburgerButton
                    isNavOpen={isNavOpen}
                    backgoundColor="white">
            </HamburgerButton>
        </button>

    </nav>
</header>

<style>
    /* Header Styles */
    header {
        padding: 0.75rem 1rem;
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
        transition: all 0.3s ease;
    }

    /* Navigation Styles */
    nav {
        position: fixed;
        max-width: 120rem;

        margin: auto;
        padding: 0 !important;

        font-weight: 600;
        font-size: 1.2em;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    }

    nav.no-background::before {
        background: none;
        backdrop-filter: none;
    }



    /*.nav-list {*/
    /*    margin-bottom: 0;*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/

    /*    display: none;*/
    /*}*/

    .nav-list{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        height: 100vh;
        padding: 5rem 1rem;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;


        transition: transform .3s ease-out;
        /*transform: translateY(-100%);*/
    }

    .nav-list__open{
        visibility: visible;
    }

    /* Navigation Item Styles */
    .nav-item {
        margin-bottom: 1em;
    }

    /* Logo Link Styles */
    .logo-link {
        z-index: 999999;
    }

    /* Navigation Link Styles */
    .nav-link {
        transition: .3s;
        color: var(--light);
    }

    .nav-link:hover {
        text-decoration: underline;
        color: red;
    }

    /* Hamburger Button Styles */
    .ham-button {
        border: none;
        background: none;
    }

    .visible {
        visibility: visible !important;
        opacity: 1 !important;
    }

    .nav-link__scroll {
        color: var(--dark);
    }

    .nav-link__active {
        color: var(--redLight);
    }

    /* Dropdown Menu Styles */
    .dropdown-menu {
        background-color: black;
        border: none;
        display: none;
    }

    /* Dropdown Item Styles */
    .dropdown-item {
        color: #fff;
    }

    .dropdown-item:hover {
        background-color: #555;
    }

    /* SM (for tablets - screens ≥ than 768px wide) */
    @media (width >= 768px) {

    }

    /* MD (for small laptops - screens ≥ than 992px wide) */
    @media (width >= 992px) {

    }

    /* LG (for laptops and desktops - screens ≥ than 1200px wide) */
    @media (width >= 1200px) {
        nav{
            height: 45px;
        }

        .nav-list{
            display: flex;
        }

        .nav-item {
            margin-right: 2em;
        }
    }
</style>

