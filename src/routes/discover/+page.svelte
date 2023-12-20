<script lang="ts">
    export let stories: { title: string, id: number, thumbnail: { url: string } }[] = [];
    console.log(stories)

    export let data
    console.log(data.stories)
</script>

<svelte:head>
    <title>Ilojo Bar - Discover</title>
</svelte:head>

<section class="discover-hero content container">
    <h1 class="mb-4">Discover stories</h1>
    <section class="discover-content">
        {#each data.stories as story}
            <div class="discover-story">
                <a href={`/discover/${story.id}`} class="story__link">
                    <div class="story-image__container">
                        <img
                                src={story.thumbnail.url}
                                alt={story.title}
                                class="story-image"

                        />
                    </div>
                    <h3>
                        {story.title}
                    </h3>
                    <h4>
                        {story.subtitle}
                    </h4>
                </a>
            </div>
        {/each}
    </section>
</section>



<div class="height">

</div>
<style>
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