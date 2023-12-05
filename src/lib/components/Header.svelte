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
    let isDropdownOpen = false;


    // Functions
    // /home scroll van 800
    // normale routes scroll van 0
    function handleScroll() {
        if (window.pageYOffset > 0) {
            isScrolled = true;
            isBlur = true
        } else {
            isScrolled = false;
            isBlur = false
        }
    }

    function toggleDropdown() {
        console.log('toggleDropdown gaat open')
        isDropdownOpen = !isDropdownOpen;
    }

    function closeNav() {
        isNavOpen = false
        isBlur = false;
    }

    function toggleNav() {
        isNavOpen = !isNavOpen;

        if (isNavOpen) {
            isBlur = true;
            document.body.classList.add('no-scroll'); // Add the class to disable scrolling
        } else if (isScrolled) {
            isBlur = true;
            document.body.classList.remove('no-scroll'); // Remove the class to enable scrolling
        } else {
            isBlur = false;
            document.body.classList.remove('no-scroll'); // Remove the class to enable scrolling
        }
    }

</script>

<header class="header" class:no-background={!isBlur}>
    <nav class="navbar navbar-expand-lg navbar-dark  fixed-top">
        <div class="nav-logo__container">
            <div class="nav-logo__innner {isNavOpen && $page.url.pathname === '/' ? '' : $page.url.pathname === '/' ? 'hide' : ''}">
                <a class="nav-logo"
                   href="/">

                    {#if isBlur}
                        <!-- Dark image -->
                        <picture>
                            <source srcset="/assets/images/logo-ilojo-bar-dark.webp" type="image/webp">
                            <source srcset="/assets/images/logo-ilojo-bar-dark.png" type="image/png">
                            <img src="/assets/images/logo-ilojo-bar-dark.webp"
                                 alt="Ilojo Bar Logo"
                                 width="95px"
                                 height="32px"
                                 class="header-link__image"
                            >
                        </picture>
                    {:else}
                        <!-- Light image -->
                        <picture>
                            <source srcset="/assets/images/logo-ilojo-bar.webp" type="image/webp">
                            <source srcset="/assets/images/logo-ilojo-bar.png" type="image/png">
                            <img src="/assets/images/logo-ilojo-bar.webp"
                                 alt="Ilojo Bar Logo"
                                 width="95px"
                                 height="32px"
                                 class="header-link__image"
                            >
                        </picture>
                    {/if}
                </a>
            </div>
        </div>
        <button
                on:click={toggleNav}
                class="navbar-toggler ham-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
            <!--                <span class="navbar-toggler-icon"></span>-->
            <HamburgerButton {isBlur} {isNavOpen}></HamburgerButton>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav ms-auto mt-lg-0 mt-sm-3 mt-3">
                <li class="nav-item"
                    class:is-active={!isDropdownOpen}>
                    <div class="nav-text__container">
                        <a
                                class="nav-link"
                                href="/discover"
                                class:nav-link__active={$page.url.pathname === '/discover'}
                                class:nav-link__scroll={isScrolled}
                        >
                            DISCOVER STORIES
                        </a>
                        <button class="nav-submenu__trigger"
                                on:click={toggleDropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
                        </button>
                    </div>

                    <ul  class:open={isDropdownOpen}>
                        {#each stories as story (story.id)}
                            <li>
                                <a href={`/discover/${story.id}`} class="dropdown-link">
                                    {story.title}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/timeline"
                       class:nav-link__active={$page.url.pathname === '/timeline'}
                       class:nav-link__scroll={isScrolled}
                    >TIMELINE</a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="/3d-model"
                       class:nav-link__scroll={isScrolled}
                       class:nav-link__active={$page.url.pathname === '/3d-model'}>3D MODEL</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/guestbook"
                       class:nav-link__active={$page.url.pathname === '/guestbook'}

                       class:nav-link__scroll={isScrolled}
                    >GUESTBOOK</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/credits"
                       class:nav-link__active={$page.url.pathname === '/credits'}
                       class:nav-link__scroll={isScrolled}
                    >CREDITS</a>
                </li>
            </ul>
        </div>
    </nav>
</header>


<style>
    .hide {
        opacity: 0;
        visibility: hidden;
    }

    header {
        padding: 0.75rem 1rem;
        position: fixed;
        z-index: 10;
        transition: transform .5s ease-out;

        width: 100%;
        /*transition: all 0.3s ease;*/

        /*padding: 1.5rem 1.875rem 1rem;*/
    }

    .header.no-background::before {
        background: none; /* No background color */
        backdrop-filter: none; /* No blur */
    }

    nav {
        padding: 0 !important;
        font-weight: 600;
        font-size: 1.2em;

        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 120rem;
        margin: auto;
    }
    .nav-item{
        padding: 0 !important;
    }

    .nav-text__container{
        display: flex;
    }

    .nav-submenu__trigger{
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 0 0 0;
    }

    .dropdown-link{
        color: var(--light);
        font-size: 21px;
    }

    .nav-link {
        transition: color .5s;
        color: var(--dark);
        text-decoration: none;
        font-size: 1.3em;
        width: fit-content;
        display: flex;
        gap: 0.1em;
        flex-direction: column;
        transition: transform 1s ease, color .3s ease;
    }

    .nav-link:hover {
        color: var(--red);
    }

    .nav-link:after {
        content: '';
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 2px;
        left: 0;
        background-color: var(--light);
        transform-origin: bottom right;
        transition: transform .5s ease-out;
    }

    nav a.nav-link__active:after {
        background-color: var(--redLight);
        transform: scaleX(1);
    }

    /*nav a.active, nav a.active h2 {*/
    /*    color: var(--redLight);*/
    /*}*/

    .ham-button {
        border: none;

        /*!*visibility: hidden;*!*/
        /*opacity: 0;*/
    }

    .visible {
        visibility: visible !important;
        opacity: 1 !important;
    }

    /* Style the navbar links */


    .nav-link__scroll {
        color: var(--dark);
    }


    /* Style the navbar links */
    .nav-link__active {
        color: var(--redLight);
    }

    /* Style the navbar background */
    .header::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px); /* WebKit (iOS Safari) syntax */
        transition: background 0.5s, backdrop-filter 0.5s;
    }

    .no-background .navbar .header::before {
        background: none !important;
        backdrop-filter: none !important;
        transition: background 0.5s, backdrop-filter 0.5s;
    }

    /* Style the dropdown menu */
    .dropdown-menu {
        background-color: black;
        border: none;

        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out; /* Adjust the duration and easing as needed */
    }

    .open {
        max-height: 700px; /* Adjust the max-height to your desired value */
        transition: max-height 0.3s ease-in-out; /* Include transition properties when it opens */
    }

    /* Style the dropdown items */
    .dropdown-item {
        color: #fff;
    }

    /* Style the dropdown item when it's hovered */
    .dropdown-item:hover {
        background-color: #555;
    }

    @media (min-width: 992px) {
        .nav-link {
            color: var(--light);
            font-size: 19px;
        }
    }
</style>
