<script lang="ts">
    import {onMount} from 'svelte';
    import {gsap} from 'gsap';
    import ScrollTrigger from 'gsap/dist/ScrollTrigger';
    import HomeHero from "$lib/components/HomeHero.svelte";

    const oldPicture = true


    // Register GSAP plugins
    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
        const scrollTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.img_cont',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
                snap: 1,
            },
        });

        tl.from('.para-container h2', {
            translateY: '-210%',
            rotation: '-10',
            duration: 2.5,
            ease: 'elastic',
            delay: 0.5,
        }).from('.mask_span', {y: '150%', duration: 0.7, stagger: 0.2}, '<15%').from('.scroll_btn', {
            translateY: '300px',
            ease: 'Power1.easeOut',
        }, '<');

        scrollTL
            .fromTo('.scroll_btn', {opacity: 1, duration: 0.3}, {opacity: 0})
            .from('.scroll_cont', {scale: 1}, '<')
            .fromTo('.color_building', {opacity: 0}, {opacity: 1}, '<')
            .fromTo('#background', {opacity: 1}, {opacity: 0}, '-=50%')
            .fromTo(
                '#overlay',
                {opacity: 1, scale: 1},
                {opacity: 0, scale: 1.05},
                '<25%'
            )
            .from(
                '.discover_cont',
                {opacity: 0, zIndex: 0, scale: 0.9, rotation: -3},
                {opacity: 1, zIndex: 2, scale: 1, rotation: 0},
                '<'
            )
            .from('.see_model_cont', {translateX: '100%', opacity: '0'}, '<')
            .addLabel('end');

        const btn = document.querySelector('.scroll_btn');
        btn.addEventListener('click', () => {
            const target = scrollTL.scrollTrigger.trigger;
            gsap.to(window, {
                scrollTo: {
                    y: target,
                    offsetY: 0,
                },
                duration: 2.2,
            });
        });
    });
</script>


<HomeHero></HomeHero>

<section class="img_cont">
    <div class="scroll_cont">
        <picture>
            <source srcset="/assets/images/ilojo_bar_bw_2.webp" type="image/webp">
            <source srcset="/assets/images/ilojo_bar_bw_2.png" type="image/png">
            <img src="/assets/images/ilojo_bar_bw_2.png" alt="Colored Ilojo bar" width="1772px" height="1772px">
        </picture>
        <picture>
            <source srcset="/assets/images/ilojo_bar_bw_1.webp" type="image/webp">
            <source srcset="/assets/images/ilojo_bar_bw_1.jpg" type="image/jpeg">
            <img id="background" src="/assets/images/ilojo_bar_bw_1.jpg" alt="Ilojo bar old with environment"
                 width="1772px" height="1772px">
        </picture>
        {#if oldPicture}
<!--            Oude Afbeelding-->
            <picture>
                <source srcset="/assets/images/ilojo_bar_bw_2.webp" type="image/webp">
                <source srcset="/assets/images/ilojo_bar_bw_2.png" type="image/png">
                <img class="color_building" src="/assets/images/ilojo_bar_bw_2.png" alt="Colored Ilojo bar"
                     width="1772px" height="1772px">
            </picture>
        {:else}
<!--            Nieuwe Afbeelding-->
            <picture>
                <source srcset="/assets/images/ilojo_bar_bw_2_new.webp" type="image/webp">
                <source srcset="/assets/images/ilojo_bar_bw_2_new.png" type="image/png">
                <img class="color_building" src="/assets/images/ilojo_bar_bw_2_new.png" alt="Colored Ilojo bar"
                     width="1772px" height="1772px">
            </picture>
        {/if}

        <picture>
            <source srcset="/assets/images/ilojo_bar_bw_3.webp" type="image/webp">
            <source srcset="/assets/images/ilojo_bar_bw_3.png" type="image/png">
            <img id="overlay" src="/assets/images/ilojo_bar_bw_3.png" alt="Ilojo bar old with environment"
                 width="1772px" height="1772px">
        </picture>
    </div>
</section>

<style>
    /*Scrolltrigger section */
    .img_cont {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        position: relative;
    }

    .scroll_cont {
        transform: scale(1.6);
        transform-origin: 86% 50%;
        height: 100%;
    }

    .img_cont img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 69% center;
        display: block;
        position: absolute;
    }

    #overlay {
        transform-origin: 80% 50%;
    }

    #background, #overlay, #color_building {
        opacity: 0;
    }

    /*@media (max-width: 55rem) {*/
    /*    .img_cont{*/
    /*        object-position: 62% center !important;*/
    /*    }*/
    /*}*/
</style>


