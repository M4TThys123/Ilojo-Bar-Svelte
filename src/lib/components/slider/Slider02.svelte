<script>
    import { windows } from '$lib/script/windows.js'
    import WindowOne  from "$lib/components/windows/WindowOne.svelte";
    import WindowTwo  from "$lib/components/windows/WindowTwo.svelte";
    import WindowThree  from "$lib/components/windows/WindowThree.svelte";
    import WindowFour  from "$lib/components/windows/WindowFour.svelte";
    import Door  from "$lib/components/windows/Door.svelte";

</script>

<ol class="storiesList">
    {#each windows as window}
        <li class="in-view">
            <div    class="window-wrapper"
                    class:window-small={window.component == 'WindowOne' || window.component == 'WindowThree'}
                    class:window-large={window.component == 'WindowTwo' || window.component == 'WindowFour'}
                    class:door={window.component == 'Door'}>
                {#if window.component == 'WindowOne'}
                    <WindowOne link={window.link} image={window.image} />
                {:else if window.component == 'WindowTwo'}
                    <WindowTwo link={window.link} image={window.image} />
                {:else if window.component == 'WindowThree'}
                    <WindowThree link={window.link} image={window.image} />
                {:else if window.component == 'WindowFour'}
                    <WindowFour link={window.link} image={window.image} />
                {:else if window.component == 'Door'}
                    <Door link={window.link} image={window.image} />
                {:else}
                    <p>Unknown component type: {window.component}</p>
                {/if}
            </div>

            <div  class="window-wrapper__text">
                <h3>
                    {window.text}
                </h3>
                <a href={window.link} aria-label={window.text} class="btn_a">
                    Discover
                </a>
            </div>
        </li>
    {/each}
</ol>

<style>
     ol {
        padding: 0;
        margin: 0;
        padding-left: 3em !important;
        margin-top: 3em;
        list-style: none;
        display: flex;
        overflow-x: scroll;
        /*scroll-snap-type: x mandatory;*/
        width: 100%;
         height: 600px;
        -ms-overflow-style: none;
        scrollbar-width: none;
        gap: 5.5em;
        padding: 0 1.5em;
        transition: all 0.2s;
        cursor: grab;
    }
     .window-wrapper{
         margin-top: 165px;
     }

     .window-small{
         width: 226px;
         height: 186px;
     }

     .window-large{
         width: 246px;
         height: 186px;
     }

     .door{
         width: 250px;
         height: 288px;
     }

     .in-view{
        position: relative;
     }
     .window-wrapper__text{
         position: absolute;
         bottom: 0;
         text-align: center;
         width: 100%;
     }

    .discover ol:active {
        cursor:grabbing;
    }

    .discover ol::-webkit-scrollbar {
        display: none;
    }

    .discover li {
        scroll-snap-align: center;
        display: flex;
        color: var(--light);
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-top: .5em;
    }

    .discover li img {
        object-fit: contain;
        height: 90%;
        width: auto;
    }

    .window {
        position: absolute;
    }

    .door {
        z-index: 2;
        transition: transform 1s ease, filter 1s ease;
    }

    .window_L {
        transform-origin: 16.28%;
    }

    .window_R {
        transform-origin: 86.04%;
    }

    .window_bg {
        -webkit-filter: drop-shadow(0px 0px 10px rgba(0,0,0,.4));
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,.4));
    }

    li:hover .window_L {
        transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
        -webkit-filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
        filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
    }

    li:hover .window_R {
        transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(110deg);
        -webkit-filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
        filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
    }

    .window_img_cont {
        height: 90%;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        mask-image: url(/images/windows.webp);
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: bottom;
        -webkit-mask-image: url(/images/windows.webp);
        -webkit-mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: bottom;
    }

    .window_img_inner {
        height: 56%;
        width: 39vh;
        -webkit-filter: drop-shadow(0px 0px 10px rgba(0,0,0,.4));
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,.4));
    }

    .discover .window_img_inner > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* RESPONSIVE */
    @media only screen and (max-width: 1220px) {
        .in-view .window_L {
            transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
            -webkit-filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
            filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
        }

        .in-view .window_R {
            transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(110deg);
            -webkit-filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
            filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
        }
    }


     @media only screen and (max-width: 756px) {
         .discover ol {
             scroll-snap-type: x mandatory;
         }

         .story section, .story section:nth-child(2n) {
             flex-direction: column-reverse;
         }

         .alinea_image+div {
             width: 100%;
         }

         .story article {
             gap: 1.3em;
         }
     }

     @media only screen and (max-width: 550px) {
     }

     @media only screen and (max-height: 650px) {
         nav ul {
             overflow-y: scroll;
             padding-bottom: 4em;
         }
     }


</style>
