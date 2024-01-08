<script lang="ts">
    import WindowOne from "$lib/components/windows/WindowOne.svelte";

    export let stories: { title: string, id: number, thumbnail: { url: string } }[] = [];
    console.log(stories)

    export let data
    console.log(data.stories)
</script>

<svelte:head>
    <title>Ilojo Bar - Discover</title>
</svelte:head>

<section class="discover-hero content container page">
    <h1>Discover stories</h1>
<!--    <section class="discover-content">-->
<!--        {#each data.stories as story}-->
<!--            <div class="discover-story">-->
<!--                <a href={`/discover/${story.id}`} class="story__link">-->
<!--                    <div class="story-image__container">-->
<!--                        <img-->
<!--                                src={story.thumbnail.url}-->
<!--                                alt={story.title}-->
<!--                                class="story-image"-->

<!--                        />-->
<!--                    </div>-->
<!--                    <h3>-->
<!--                        {story.title}-->
<!--                    </h3>-->
<!--                    <h4>-->
<!--                        {story.subtitle}-->
<!--                    </h4>-->
<!--                </a>-->
<!--            </div>-->
<!--        {/each}-->
<!--    </section>-->

    <div class="building-container">
        <picture class="building-image__wrapper">
            <img src="/assets/images/building/building_high-res.png" alt="" class="building-image">
        </picture>

        <ul>
            <li class="window-one top-layer window-small">
                <WindowOne></WindowOne>
            </li>

            <li class="window-two top-layer window-small">
                <WindowOne></WindowOne>
            </li>

            <li class="window-three top-layer window-small">
                <WindowOne></WindowOne>
            </li>
        </ul>

        <nav>
<!--            <a href="/discover/cl8vh8rmx4wx80bw26jscwzhn" class="window-one top-layer window-small"></a>-->
<!--            <a href="/discover/cl8vc7gt84tx30cuqor5bxqfy" class="window-two top-layer window-small"></a>-->
<!--            <a href="/discover/cl8vjb2rn4x9i0burl532c8t2" class="window-three top-layer window-small"></a>-->

            <a href="/discover/cl8ysy2yw08zy0bvy1hq4bnkf" class="window-four top-layer window-big"></a>
            <a href="/discover/cl8yszk6v08im0bvyodnw9lyy" class="window-five top-layer window-big"></a>
            <a href="/discover/cl8yt1lbr08kt0bvyck52dg6p" class="window-six top-layer window-big"></a>

            <a href="/discover/cl8ysx9tz08cs0auqxhojha3y" class="window-seven bottom-layer window-small"></a>
            <a href="/discover/cl8vjfmjh4yr00bw7jt60irl9" class="window-eight bottom-layer window-small"></a>
            <a href="/discover/cl8ysw30o08be0auq4yw1n8tj" class="window-nine bottom-layer window-small"></a>

            <a href="/3d-model" class="door-frame bottom-layer door"></a>

            <a href="/credits" class="window-ten bottom-layer window-big"></a>
            <a href="/guestbook" class="window-eleven bottom-layer window-big"></a>
        </nav>
    </div>
</section>

<style>
    li{
        position: absolute;
    }

    .building-container{
        position: relative;
    }
    .building-container a {
        position: absolute;
    }

    .building-image, building-image__wrapper{
        width: 100%;
    }
    .window-container{
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .window-small, .window-big, .door{
        background: #101010;

    }

    .window-small {
        width: 8.93615%;
        height: 12.85151%;
    }

    .window-big {
        width: 9.71385%;
        height: 12.85151%;
    }

    .door {
        width: 9.87778%;
        height: 19.87152%;
    }

    .top-layer{
        top: 40.63532%;
    }

    .window-one {
        left: 6.55376%;
        position: absolute;
    }

    .window-two {
        left: 24.08258%;
    }

    .window-three {
        left: 42.44487%;
    }

    .window-four {
        left: 58.12732%;
    }

    .window-five {
        left: 72.10727%;
    }

    .window-six {
        left: 86.18552%;
    }

    .bottom-layer{
        top: 79.60415%;

    }
    .window-seven {
        left: 6.55376%;
    }

    .window-eight {
        left: 24.14058%;
    }

    .window-nine {
        left: 42.44487%;
    }

    .door-frame {
        left: 57.95360%;
    }

    .window-ten {
        left: 72.10727%;
    }

    .window-eleven {
        left: 86.18552%;
    }


    /*.window-one x=166, y=588*/
    /*.window-two x=610, y=588*/
    /*.window-three x= 1076, y=588*/
    /*.window-four x= 1473, y=588*/
    /*.window-five x= 1828, y=588*/
    /*.window-six x= 2184, y=588*/
    /*.window-seven x= 166, y=1153*/
    /*.window-eight x= 611, y=1153*/
    /*.window-nine x= 1076, y=1153*/
    /*.door x= 1470,y=1155*/
    /*.window-ten x= 1828, y=1153*/
    /*.window-eleven x= 2184, y=1153*/



    .discover-content{
    }
    .discover-story{
    }
    .story-image__container {
        max-width: 450px;
        width: 100%;
        max-height: 450px;
    }

    .story-image {
        width: 100%;
        display: block;
        border-width: 20px;
        border-style: solid;
        border-image: url(/assets/images/timeline/frame.png) 30 round;
    }

    @media (width >= 992px) {
        /* CSS rules for small laptops go here */
        .story-image {
            border-width: 35px;
        }
    }
</style>