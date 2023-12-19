<script lang="ts">
    export let stories: { title: string, id: number, thumbnail: { url: string } }[] = [];
    console.log(stories)

    export let data
    console.log(data.stories)
</script>

<section class="discover-hero content container">
    <h1>Discover stories</h1>
    <section class="discover-content">
        {#each data.stories as story}
            <div class="discover-story">
                <a href={`/discover/${story.id}`} class="story__link">
                    <figure class="story__link__frame">
                        <div class="story__link__frame-content">
                            <img
                                    src={story.thumbnail.url}
                                    alt={story.title}
                                    class="story__link__frame-image"

                            />
                        </div>
                    </figure>
                    {story.title}

                </a>
            </div>
        {/each}
        </section>
</section>




<div class="height">

</div>
<style>
    content{
        margin-top: var(--header-height);
    }
    h1 {

    }

    .height {
        height: 200vh;
    }

    .media-slider__slide {
        width: 37.5vw;
        height: 33.3333333333vw;
        max-width: calc(9 * 5rem);
        max-height: calc(8 * 5rem);
        clip-path: inset(0 round 1.5rem);
        margin-right: 1.5rem;
    }
</style>