<script lang="ts">
    import HamburgerButton from "$lib/components/HamburgerButton.svelte";
    import {onMount} from 'svelte';
    // For the route path
    import {page} from '$app/stores';


    onMount(() => {
        if ($page.url.pathname !== '/') {
            window.addEventListener('scroll', handleScroll);
        }

        // window.addEventListener('click', handleClickOutside);
    });
    export let stories: { title: string, id: number }[] = [];

    // Date atributes
    let isScrolled = false
    let isBlur = false
    let isNavOpen = false;
    let isDropdownOpen = false;

    let navItems = [
        {label: 'TIMELINE', url: '/timeline'},
        {label: '3D MODEL', url: '/3d-model'},
        {label: 'CREDITS', url: '/credits'},
        {label: 'GUESTBOOK', url: '/guestbook'},
    ]
    function handleScroll() {
        if (window.pageYOffset > 65) {
            isScrolled = true;
            isBlur = true
        } else {
            isScrolled = false;
            isBlur = false
        }
    }

    // function handleClickOutside(event) {
    //     const navElement = document.querySelector('.navbar');
    //     const toggleButton = document.querySelector('.ham-button');
    //
    //     // Check if the clicked element is outside the navigation and is not the toggle button
    //     if (navElement && !navElement.contains(event.target) && !toggleButton.contains(event.target)) {
    //         closeNav();
    //     }
    // }

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

<header class="header blur" class:no-background={!isBlur}>
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
            <HamburgerButton {isBlur} {isNavOpen}></HamburgerButton>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="nav-list navbar-nav ms-auto mt-lg-0 mt-sm-3 mt-3">
                <li class="nav-item has-children">
                    <div class="backgound">
                        <div class="nav-text__container">
                            <a
                                    class="nav-link dropdown-header"
                                    href="/discover"
                                    class:nav-link__active={$page.url.pathname === '/discover'}
                                    class:nav-link__scroll={isScrolled}

                            >
                            <span class="nav-text"
                                  class:nav-text__scroll={isScrolled}
                            >
                                                            DISCOVER STORIES
                            </span>
                            </a>
                            <button class="nav-submenu__trigger" on:click={toggleDropdown}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                     class="bullet-svg"
                                     class:bullet-svg__scroll={isScrolled}>
                                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                                </svg>
                            </button>
                        </div>

                        <ul class:active={isDropdownOpen} class="nav-list nav-list__children"
                        >
                            {#each stories as story (story.id)}
                                <li class="nav-item nav-item__child">
                                    <a href={`/discover/${story.id}`}
                                       class="dropdown-link"
                                       class:nav-link__active={$page.url.pathname === story.url}
                                    >
                                    <span class="nav-text">
                                        {story.title}
                                    </span>
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </li>

                {#each navItems as item}
                    <li class="nav-item ">
                        <div class="nav-text__container">
                            <a
                                    class="nav-link"
                                    href={item.url}
                                    class:nav-link__active={$page.url.pathname === item.url}
                                    class:nav-link__scroll={isScrolled}
                            >
                                <span class="nav-text"
                                      class:nav-link__scroll={isScrolled}
                                >{item.label}</span>
                            </a>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
</header>


<style>
    /*=============== HEADER ===============*/
    header {
        padding: 0.75rem 1rem;
        position: fixed;
        z-index: 10;
        transition: transform .5s ease-out;

        width: 100%;
        /*transition: all 0.3s ease;*/

        /*padding: 1.5rem 1.875rem 1rem;*/
    }

    /* Blur on header as a before*/
    .blur::before {
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

    /* No blur on header */
    .header.no-background::before {
        background: none; /* No background color */
        backdrop-filter: none; /* No blur */
    }


    /*=============== NAV ===============*/
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

    .ham-button {
        border: none;
    }

    .nav-list {
        gap: 1em;
    }

    .nav-item {
        padding: 0 !important;
    }

    .has-children {
        position: relative;
    }

    .has-children::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1em;
    }





    .nav-list__children {
        left: 0;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 1rem 1.75rem 0.75rem 1rem;
        color: var(--dark);
        transition: transform .4s ease-out, opacity .2s ease-out;

        opacity: 0;
        visibility: hidden;
        display: none;
        z-index: 99999;
    }

    .nav-list__children.active{
        opacity: 1;
        visibility: visible;
        display: block;
    }



    .nav-text__container {
        display: flex;
        position: relative;
    }

    .dropdown-header {
        padding-right: 0px !important;
    }

    /*Hover Dropdown - Background*/
    :hover.has-children
    .dropdown-header::before,
    :hover.nav-list__children
    .dropdown-header::before {
        background-color: var(--dark) !important;
    }

    .nav-submenu__trigger {
        height: 40px;
        width: 32px;
        display: flex;
        align-items: center;
        padding: 4px 0 0 0;
    }

    .nav-submenu__trigger svg {
        margin-left: 6px;
        margin-top: 6px;
        width: 20px;
        height: 20px;

    }



    .bullet-svg {
        fill: var(--dark);
        transition: fill 0.3s ease;
    }





    .dropdown-link {
        font-size: 25px;
        position: relative;
        transition: transform .2s ease-out;
    }

    .dropdown-link::before {
        content: "";
        position: absolute;
        top: calc(50% - 2px);
        left: 0;
        top: 35%;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--dark);
        clip-path: circle(0 at 50% 50%);
        z-index: 99999999;
        transform: translateY(calc(50% - 3px));
        transition: clip-path .1s ease-out;
    }

    .nav-text {
        display: block;
        transition: transform .2s ease-out, color .3s ease;;
        color: var(--dark);
    }

    .nav-text__scroll {
        color: var(--dark)!important;
    }

    .dropdown-link .nav-text {
        color: var(--dark);
    }

    .dropdown-link__active::before {
        clip-path: circle(50% at 50% 50%) !important;
    }

    :hover.dropdown-link::before {
        clip-path: circle(50% at 50% 50%) !important;
    }

    :hover.dropdown-link .nav-text{
        transform: translateX(0.75rem);
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

    .nav-link::before {
        content: "";
        position: absolute;
        top: calc(50% - 2px);
        left: -3px;
        top: 40%;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--dark);
        clip-path: circle(0 at 50% 50%);
        z-index: 99999999;
        transition: background-color 0.3s ease;
    }

    .nav-link__scroll::before {
        background-color: var(--dark) !important;
    }



    :hover.nav-link::before {
        clip-path: circle(50% at 50% 50%) !important;

    }

    .nav-link__scroll {
        color: var(--dark) !important;
    }

    .nav-link__active::before {
        clip-path: circle(50% at 50% 50%) !important;
    }


    .no-background .navbar .header::before {
        background: none !important;
        backdrop-filter: none !important;
        transition: background 0.5s, backdrop-filter 0.5s;
    }


    .hide {
        opacity: 0;
        visibility: hidden;
    }



    /*===============  BREAKPOINTS ===============*/
    /* XS (for phones - screens < than 768px wide) */
    @media (width < 768px) {
        .nav-text{
            /*color: var(--light) !important;*/
        }
        .nav-link__active > .nav-text{
            transform: translateX(0.75rem);
        }
        :hover.nav-link .nav-text{
            transform: translateX(0.75rem);
        }
    }

    /* MD (for small laptops - screens ≥ than 992px wide) */
    @media (width >= 992px) {
        .nav-text {
            color: var(--light);
            font-size: 19px;
        }

        .has-children .nav-text__container {
            margin-left: 16px !important;
        }

        /*Hover Dropdown - Background*/
        :hover.has-children
        .backgound,
        :hover.nav-list__children
        .backgound {
            border-radius: 1.75rem;
            background: var(--light);
        }

        :hover.has-children
        .nav-link .nav-text,
        :hover.nav-list__children
        .nav-link .nav-text {
            color: var(--dark);
        }

        :hover.has-children
        .bullet-svg,
        :hover.nav-list__children
        .bullet-svg {
            fill: var(--dark);
        }


        /*Hover Dropdown - Background*/
        :hover.has-children
        .nav-list__children,
        :hover.nav-list__children
        .nav-list__children {
            opacity: 1;
            visibility: visible;
            background: var(--light);
            display: block;
        }

        .bullet-svg {
            fill: var(--light);
        }

        .bullet-svg__scroll {
            fill: var(--dark);
        }
        .nav-submenu__trigger svg {
            margin-top: 0;
            width: 12px;
            height: 12px;
        }

        .nav-list__children{
            position: absolute;
            top: 3em;
            border-radius: 0.75rem;
            background: var(--light);
            box-shadow: 0px 32px 60px 32px rgba(20, 21, 26, .1);
        }
        .nav-link::before {
            background-color: var(--light);
        }
        .dropdown-link {
            font-size: 21px;
        }
        }

    /* LG (for laptops and desktops - screens ≥ than 1200px wide) */
    @media (width >= 1200px) {

    }
</style>
