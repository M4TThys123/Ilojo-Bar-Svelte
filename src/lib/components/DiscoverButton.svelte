<section class="discover_cont">
    <nav>
        <a href="/discover" class="btn_a btn_breed">
            Discover stories
        </a>
    </nav>
</section>

<style>
    /* Discover button section */
    .discover_cont {
        position: fixed;
        bottom: 1.5em;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        opacity: 1;
        z-index: 999999;
    }

    .btn_a {
        font-family: 'Black-Ground', sans-serif !important;
        background-image: url(/assets/images/button_bg_light.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.3em;
        width: auto;
        display: flex;
        flex-direction: column;
        padding: 0.5em;
        padding: 1.2em 3em 1em 3em;
        color: var(--red) !important;
        /*transition: transform .75s ease;*/
        font-weight: bold
    }


    /* SM (for tablets - screens ≥ than 768px wide) */
    @media (width >= 768px) {
        .discover_cont {
            bottom: 3em;
        }
    }

    /* LG (for laptops and desktops - screens ≥ than 1200px wide) */
    @media (width >= 1200px) {
        .discover_cont {
            bottom: 4em;
        }
    }

</style>