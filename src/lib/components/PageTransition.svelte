<script>
    import { onMount, onDestroy } from 'svelte';
    import { gsap } from 'gsap';

    let menuItems;

    onMount(() => {
        // Check if running in the browser
        if (typeof window !== 'undefined') {
            const pageTransitionContainer = document.querySelector('.page-transition-container');
            const pageTransition = document.querySelectorAll('.page-transition');

            pageTransition[0].classList.add('first');
            gsap.to(pageTransition, {
                y: '100%',
                stagger: 0.2,
                onComplete() {
                    pageTransitionContainer.classList.add('done');
                    pageTransition[0].classList.remove('first');
                },
            });

            // Using the bind:this directive to get a reference to menu items
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
        // Check if running in the browser
        if (typeof window !== 'undefined') {
            const pageTransitionContainer = document.querySelector('.page-transition-container');
            const pageTransition = document.querySelectorAll('.page-transition');

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
    <div class="page-transition first"></div>
    <div class="page-transition"></div>
</div>


<style>
    :root  {
        --prm-page-transition-color: var(--redLight);
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

    .page-transition:first-child {
        background-color: var(--prm-page-transition-color);
    }

    .page-transition:last-child {
        background-color: var(--sec-page-transition-color);
    }

    /*Page Transition done state*/
    /*Place in the style.css*/
    /*.done {*/
    /*    pointer-events: none;*/
    /*}*/

</style>