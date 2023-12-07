<script lang="ts">
    import type {PageData} from './$types';
    export let data: PageData;

    console.log(data.content.html)

</script>

<svelte:head>
    <title>Ilojo Bar - {data.title}</title>
</svelte:head>


<section class="story content">
    <h1 class="story__title mb-4">{data.title}</h1>
    <h2 class="story__title mb-3">{data.subtitle}</h2>
    <div class="story__content">
        {@html data.content.html}
    </div>
</section>


<style>
    .story {
        display: grid;
        overflow-x: hidden;

        padding: 0.8rem 1rem;
        width: 100%;
    }

    img{
        width: 100%;
    }

    .story__content {
        position: relative;
        font-family: Rubik, sans-serif;
        color: white;
        display: flex;
        flex-direction: column;
    }


/* content global styling */
    :global(.story__content p) {
        font-size: 18px;
}

:global(.story__content img) {
    /*object-fit: fill;*/
    border-radius: 15px;
    width: 100%;
    height: auto;
    margin-bottom: 1em;
}

/* content specifiek styling */
    :global(.story__content >p){

    }
    :global(.story__content > img:nth-child(2)) {

    }

    :global(.story__content > img:nth-child(4)) {
    }

    :global(.story__content > p:nth-child(1)) {

    }

    :global(.story__content > p:nth-child(3)) {
    }


</style>
