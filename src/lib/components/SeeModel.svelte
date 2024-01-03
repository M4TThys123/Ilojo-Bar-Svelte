<div class="see_model_cont">
    <nav>
        <a href="/3d-model" class="btn_a btn_square">
            <picture>
                <source srcset="/assets/images/3d_building.webp" type="image/webp">
                <source srcset="/assets/images/3d_building.png" type="image/png">
                <img src="/assets/images/3d_building.png" alt="image 3D model Ilojo bar" width="270px" height="182px" loading="lazy">
            </picture>
            <p>Show in 3D</p>
        </a>
    </nav>
</div>

<style>
    .btn_a {
        background-image: url(/images/button_bg_light.webp);
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
        color: var(--light);
        transition: transform .75s ease;
    }

    /* See model section */
    .see_model_cont {
        position: fixed;
        top: calc(50vh - 48px);
        right: -.6em;
        z-index: 2;
    }

    .see_model_cont a {
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    .see_model_cont img {
        height: 3em;
        width: auto;
    }

    .see_model_cont p {
        margin: 0;
        color: var(--red);
        font-weight: bold;
    }

    .see_model_cont .btn_a {
        font-size: .75em;
        text-transform: none;
    }

    .btn_square {
        background-image: url(/assets/images/button_bg_light_square.webp);
        padding: 1.6em;
    }

</style>

