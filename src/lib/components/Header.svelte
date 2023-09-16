<script lang="ts">
    export let stories: { title: string, id: number }[] = [];
</script>

<header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img
                        src="/assets/images/logo-ilojo-bar.webp"
                        alt="Ilojo Bar Logo"
                        class="header__link__image"
                        width="128"
                />
            </a>
            <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a
                                class="nav-link dropdown-toggle"
                                href="/stories"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                        >
                            Stories
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
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/help">Help</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>


<style>
    .header {
        padding: 0.75rem 1rem;
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

    nav a.active:hover:after {
        background-color: #7a1006;
        transform: scaleX(1);
    }

    /* Style the navbar links */
    .navbar-dark .navbar-nav .nav-link {
        color: #f8f9fa;
    }

    /* Style the navbar links on hover */
    .navbar-dark .navbar-nav .nav-link:hover {
        color: #00090b;
    }

    /* Style the navbar background */
    .navbar::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        z-index: -1;
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
