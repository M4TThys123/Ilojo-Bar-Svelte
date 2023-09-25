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
    let isHeaderBlur = false
    let isMenuOpen = false;


    // Functions
    function handleScroll() {
        if (window.pageYOffset > 0) {
            isScrolled = true;
        } else {
            isScrolled = false;
        }

        // Update isHeaderBlur based on isScrolled
        isHeaderBlur = isScrolled;
        console.log(isScrolled)
    }

    function openNav() {

    }

    function closeNav() {

    }

    function toggleNav() {

    }


</script>

<header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top" class:no-background={!isHeaderBlur}>
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
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

            <button
                    class:visible={isScrolled}
                    class="navbar-toggler ham-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <!--                <span class="navbar-toggler-icon"></span>-->
                <HamburgerButton></HamburgerButton>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav ms-auto mt-lg-0 mt-sm-3 mt-3">
                    <li class="nav-item">
                        <a class="nav-link"
                           class:nav-link__scroll={isScrolled}
                           class:nav-link__active={$page.url.pathname === '/'}
                           href="/">HOME</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a
                                class="nav-link dropdown-toggle"
                                class:nav-link__scroll={isScrolled}
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                        >
                            STORIES
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {#each stories as story (story.id)}
                                <li>
                                    <a href={`/stories/${story.id}`} class="dropdown-item" data-sveltekit-reload>
                                        {story.title}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           class:nav-link__scroll={isScrolled}
                            >ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           class:nav-link__scroll={isScrolled}>3D MODEL</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link"
                           class:nav-link__scroll={isScrolled}
                        >STORYBOOK</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>


<style>
    .header {
        padding: 0.75rem 1rem;
        position: fixed;
        z-index: 10;

        transition: transform .5s ease-out;

    }

    .navbar.no-background::before {
        background: none; /* No background color */
        backdrop-filter: none; /* No blur */
    }

    nav {
        /* font-weight and font-size applied to nav directly */
        font-weight: 600;
        font-size: 1.2em;
    }

    /* Styling for the active link */
    nav a.active:after {
        content: '';
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 2px;
        left: 0;
        background-color: #f8f9fa;
        transform-origin: bottom right;
        transition: transform .5s ease-out;
    }

    /*nav a.active:hover:after {*/
    /*    background-color: #7a1006;*/
    /*    transform: scaleX(1);*/
    /*}*/


    .ham-button {
        border: none;

        visibility: hidden;
        opacity: 0;
    }

    .visible {
        visibility: visible !important;
        opacity: 1 !important;
    }

    /* Style the navbar links */
    .nav-link {
        color: var(--light);
    }

    .nav-link__scroll {
        color: var(--dark);
    }

    /* Style the navbar links on hover */
    .navbar-dark .navbar-nav .nav-link:hover {
        color: var(--red);
    }

    /* Style the navbar links */
    .nav-link__active {
        color: var(--redLight);
    }

    /* Style the navbar background */
    .navbar::before {
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

    .no-background .navbar::before {
        background: none !important; /* No background color */
        backdrop-filter: none !important; /* No blur */
    }

    /* Style the dropdown menu */
    .dropdown-menu {
        background-color: black;
        border: none;

    }

    /* Style the dropdown items */
    .dropdown-item {
        color: #fff;
    }

    /* Style the dropdown item when it's hovered */
    .dropdown-item:hover {
        background-color: #555;
    }
</style>
