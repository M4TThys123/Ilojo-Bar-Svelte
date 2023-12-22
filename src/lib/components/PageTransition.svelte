<script>
    import { onMount, onDestroy } from 'svelte';
    import { gsap } from 'gsap';

    let menuItems;

    onMount(() => {
        if (typeof window !== 'undefined') {
            const pageTransitionContainer = document.querySelector('.page-transition-container');
            const pageTransition = document.querySelectorAll('.page-transition');
            const transitionImage = document.querySelector('.transition-image');

            gsap.set(transitionImage, { opacity: 0 });

            pageTransition[0].classList.add('first');
            gsap.to(pageTransition, {
                y: '100%',
                stagger: 0.2,
                onComplete() {
                    pageTransitionContainer.classList.add('done');
                    pageTransition[0].classList.remove('first');

                    gsap.to(transitionImage, { opacity: 1, duration: 1 });
                },
            });

            menuItems = Array.from(document.querySelectorAll('nav a'));

            menuItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    pageTransitionContainer.classList.remove('done');
                    pageTransition[1].classList.add('first');
                    gsap.fromTo(pageTransition, {
                        y: '-100%',
                    }, {
                        y: '0%',
                        stagger: 0.2,
                        onComplete() {
                            location.replace(item.href);
                        },
                    });
                });
            });
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            const pageTransitionContainer = document.querySelector('.page-transition-container');
            const pageTransition = document.querySelectorAll('.page-transition');
            const transitionImage = document.querySelector('.transition-image');

            gsap.to(transitionImage, { opacity: 0, duration: 1 });

            pageTransition[0].classList.add('first');
            gsap.to(pageTransition, {
                y: '0%',
                stagger: 0.2,
                onComplete() {
                    pageTransitionContainer.classList.add('done');
                    pageTransition[0].classList.remove('first');
                },
            });
        }
    });
</script>

<!-- PageTransition.svelte -->
<div class="page-transition-container">
    <div class="page-transition first "></div>
    <div class="page-transition d-flex justify-content-center align-items-center" style="">
        <div class="transition-image__wrapper">
            <img src="/assets/images/logo-ilojo-bar-big.webp" class="transition-image">
        </div>
    </div>
</div>



<style>
    :root  {
        /*Versie met Femke*/
        /*--prm-page-transition-color: var(--red);*/
        /*--sec-page-transition-color: var(--red);*/

        /*Versie met Matthijs*/
        --prm-page-transition-color: var(--grey);
        --sec-page-transition-color: var(--grey);
    }
    /* || Page Transition || */
    .page-transition-container {
        position: fixed;
        inset: 0;
        z-index: 10000;
    }

    .no-js .page-transition-container {
        display: none;
    }

    .page-transition {
        position: absolute;
        inset: 0;
        z-index: 10000;
    }

    .page-transition.first {
        z-index: 10001;
    }
    .transition-image__wrapper{
        max-width: 10em;
    }
    .transition-image{
        width: 100%;
        filter: drop-shadow(0px 0px 5px rgb(0 0 0 / .4));
    }

    .page-transition:first-child {
        background-color: var(--prm-page-transition-color);
    }

    .page-transition:last-child {
        background-color: var(--sec-page-transition-color);
    }
</style>