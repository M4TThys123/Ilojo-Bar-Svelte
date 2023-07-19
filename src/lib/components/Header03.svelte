<script lang="ts">
    export let stories: { title: string, id: number }[] = [];

</script>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand " href="/">
                <img src="/assets/images/logo-ilojo-barR.webp"
                     alt="Logo Ilojo Bar"
                     class="header__link__image logo-desktop"
                     width="128"
                     height="45"
                     loading="lazy">

                <img src="/assets/images/ilojo-bar-logo_klein.webp"
                     alt="Logo Ilojo Bar"
                     class="header__link__image logo-mobile"
                     width="128"
                     loading="lazy">
            </a>


            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Stories
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {#each stories as story}
                                <li>
                                    <a href={`/stories/${story.id}`} class="dropdown-item" data-sveltekit-reload>
                                        {story.title}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<style>
    nav {
         /*padding: 0 4em 0 4em; */
        font-weight: 600;
        font-size: 1.2em;
    }
    .logo-desktop{
        display: none;
    }
    .logo-mobile{
        display: block;
    }



    .navbar::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.3); /* Adjust the alpha value to control transparency */
        backdrop-filter: blur(10px); /* Adjust the pixel value as desired */
        z-index: -1;
    }

    /* Style the dropdown menu */
    .dropdown-menu {
        background-color: black; /* Set the background color */
        border: none; /* Remove the border */

    }

    /* Style the dropdown items */
    .dropdown-item {
        color: #fff; /* Set the text color */
    }

    /* Style the dropdown item when it's hovered */
    .dropdown-item:hover {
        background-color: #555; /* Set the background color */
    }

    /*Menu__Button*/
    .header__menu {
        all: unset;
        position: relative;
        cursor: pointer;
        z-index: 30;
    }

    .header__menu:after {
        content: 'MENU';
    }

    .header__menu-line {
        display: block;
        width: 100%;
        height: 0.2rem;
        margin-bottom: 5px;
        position: relative;
        background-color: var(--color-white);
        border-radius: 6px;
        transform-origin: 0 0;
        transition: 0.3s;
    }

    .header__menu:hover .header__menu-line:last-child {
        width: 70%;
    }

    /*Breakpoints*/
    /* SM (for tablets - screens ≥ than 768px wide) */
    @media (min-width: 992px) {
        .logo-desktop{
            display: block;
        }
        .logo-mobile{
            display: none;
        }
    }

    /* MD (for small laptops - screens ≥ than 992px wide) */
    @media (min-width: 992px) {
        nav {
            padding: .2em 3em;
        }
    }
</style>


