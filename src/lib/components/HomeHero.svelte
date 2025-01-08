<script>
    import ScrollButton from "$lib/components/ScrollButton.svelte";
</script>

<section style="pointer-events: none">
    <div class="home-hero__container">
        <picture>
            <source srcset="/assets/images/logo-ilojo-bar.webp" type="image/webp">
            <source srcset="/assets/images/logo-ilojo-bar.png" type="image/png">
            <img src="/assets/images/logo-ilojo-bar.webp"
                 alt="Ilojo Bar Logo"
                 width="100%"
                 height="32px"
                 class="home-hero__image"
            >
        </picture>

        <p class="subtitle">
            <span>
                <span  class="mask_span">Discover 9 stories about the shattered bar of Lagos</span>
            </span>
        </p>
    </div>

    <ScrollButton></ScrollButton>
</section>

<style>
    section {
        position: fixed;
        z-index: 1;
        padding-top: 4.5rem;

        padding-bottom: 1.5rem;

        color: white;

        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .home-hero__container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .home-hero__image{
        height: 5.5em;
        width: auto;
        filter: drop-shadow(0px 0px 5px rgb(0 0 0 / .4));
        margin-bottom: 2rem;
    }

    .mask_span {
        display: inline-block;
        transform: translateY(0%);
    }

    p {
        font-size: 18px;
        text-shadow: 0 0 5px rgb(0 0 0 / .4);
        text-align: center;
    }
    p > span{
        display: inline-block;
        overflow: hidden;
        padding: 5px 20px;
    }

    @media (width >= 378px) {
        section{
            padding-top: 5.5rem;
        }
        p {
            font-size: 22px;
            margin-top: .5rem;
        }

        p > span{
            padding: 5px 5px;
        }
    }
</style>
