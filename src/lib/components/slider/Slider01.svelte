<script>
    export let data
</script>

<ol class="storiesList">
    {#each data.stories as story}
        <li class="in-view">
            <div class="window_wrap">
                <div class="window_img_cont">
                    <div class="window_img_inner">
                        <img    src={story.thumbnail.url}
                                alt={story.title}
                                loading="lazy"
                                width="350px"
                                height="300px">
                    </div>
                </div>
                    <img class="window door window_L" srcset="/images/window_L.webp" src="/images/window_L.png" alt="window left side Ilojo bar" width="354px" height="525px" draggable="false" />
                    <img class="window door window_R" srcset="/images/window_R.webp" src="/images/window_R.png" alt="window right side Ilojo bar" width="354px" height="525px" draggable="false"/>
                    <img class="window window_bg" srcset="/images/window_bg.webp" src="/images/window_bg.png" alt="window Ilojo bar" width="354px" height="525px" draggable="false" />
            </div>
            <h3>
                {story.title}
            </h3>
            <a href="<%- story.url %>" aria-label="<%- story.title %>" class="btn_a">
                Discover
            </a>
        </li>
    {/each}
</ol>

<style>
     ol {
        padding: 0;
        margin: 0;
        margin-top: 1em;
        list-style: none;
        display: flex;
        overflow-x: scroll;
        /*scroll-snap-type: x mandatory;*/
        width: 100%;
        height: 100%;
        -ms-overflow-style: none;
        scrollbar-width: none;
        gap: .5em;
        padding: 0 1.5em;
        transition: all 0.2s;
        cursor: grab;
    }

    .discover ol:active {
        cursor:grabbing;
    }

    .discover ol::-webkit-scrollbar {
        display: none;
    }

    .discover li {
        scroll-snap-align: center;
        height: 100%;
        display: flex;
        color: var(--light);
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-top: .5em;
    }

    .discover li .window_wrap {
        height: 60vh;
        position: relative;
        display: flex;
        justify-content: center;
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

         .alinea_image {
             width: 100%;
         }

         .alinea_image+div {
             width: 100%;
         }

         .story article {
             gap: 1.3em;
         }

         .backBtn, .menuBtn {
             width: 4.1em;
         }

         .scroll_cont {
             transform-origin: 85% 50%;
         }
     }

     @media only screen and (max-width: 550px) {
         .scroll_cont {
             transform-origin: 72% 50%;
         }
     }

     @media only screen and (max-height: 650px) {
         nav ul {
             overflow-y: scroll;
             padding-bottom: 4em;
         }
     }


</style>
