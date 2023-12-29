<script lang="ts">
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
            <a href="" class="window-one window-small"></a>
            <a href="" class="window-two window-small"></a>
            <a href="" class="window-three window-small"></a>

            <a href="" class="window-four window-big"></a>
            <a href="" class="window-five window-big"></a>
            <a href="" class="window-six window-big"></a>

            <a href="" class="window-seven window-small"></a>
            <a href="" class="window-eight window-small"></a>
            <a href="" class="window-nine window-small"></a>

            <a href="" class="door-frame door"></a>

            <a href="" class="window-ten window-big"></a>
            <a href="" class="window-eleven window-big"></a>

        <div class="window-container">
        </div>
    </div>
</section>

<style>
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


    .window-one {
        left: 6.55376%;
        top: 40.63532%;
    }

    .window-two {
        left: 24.08258%;
        top: 40.63532%;
    }

    .window-three {
        left: 42.44487%;
        top: 40.63532%;
    }

    .window-four {
        left: 58.12732%;
        top: 40.63532%;
    }

    .window-five {
        left: 72.10727%;
        top: 40.63532%;
    }

    .window-six {
        left: 87.03972%;
        top: 40.63532%;
    }

    .window-seven {
        left: 6.55376%;
        top: 79.60415%;
    }

    .window-eight {
        left: 24.14058%;
        top: 79.60415%;
    }

    .window-nine {
        left: 42.44487%;
        top: 79.60415%;
    }

    .door-frame {
        left: 57.95360%;
        top: 79.66401%;
    }

    .window-ten {
        left: 72.10727%;
        top: 79.60415%;
    }

    .window-eleven {
        left: 87.03972%;
        top: 79.60415%;
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