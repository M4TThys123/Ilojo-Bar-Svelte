<script lang="ts">
    import type {PageData} from './$types';
    export let data: PageData;
    console.log(data)

    let currentPage = data.route
    console.log(currentPage)

    let pagination = []

    let hyData = data.stories
    for (let i = 0; i < hyData.length; i++){
        pagination.push({
            route: hyData[i].route,
            // id: hyData[i].id,
        })
    }
    console.log(pagination)

    // Find the index of the current page in the pagination array
    let currentIndex = pagination.findIndex(item => item.route === currentPage);

    // Get the previous and next pages
    let previousIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
    let nextIndex = currentIndex + 1 < pagination.length ? currentIndex + 1 : null;

    let previousPage = previousIndex !== null ? pagination[previousIndex].route : null;
    let nextPage = nextIndex !== null ? pagination[nextIndex].route : null;
</script>

<svelte:head>
    <title>Ilojo Bar - {data.title}</title>
</svelte:head>

<section class="story content">
    <span>{data.route}</span>
    <h1 class="story__title mb-4">{data.title}</h1>
    <h2 class="story__title mb-3">{data.subtitle}</h2>
    <div class="story__content">
        {@html data.content.html}
    </div>

    <div class="story-pagination mt-5 align-items-center">
        <a href="{previousPage}" class="previous pagination">
    <span class="pagination-text">
        &lt;  Previous
    </span>
        </a>
        <span>{currentPage}</span>
        <a href="{nextPage}" class="next pagination">
    <span class="pagination-text">
        Next &gt; <br>
    </span>
        </a>
    </div>
</section>


<style>
    .story {
        display: grid;
        overflow-x: hidden;

        padding: 0.8rem 1rem;
        width: 100%;
    }

    img {
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
    :global(.story__content >p) {

    }

    :global(.story__content > img:nth-child(2)) {

    }

    :global(.story__content > img:nth-child(4)) {
    }

    :global(.story__content > p:nth-child(1)) {

    }

    :global(.story__content > p:nth-child(3)) {
    }

    .story-pagination {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
    }

    .pagination {
        background-image: url(/assets/images/button_bg_light.webp);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        text-decoration: none;
        text-transform: uppercase;
        /*width: auto;*/
        display: flex;
        justify-content: center;
        transition: transform .75s ease;
        width: 160px;
    }
    .pagination-text{
        color: var(--redLight);
        font-size: 1em;
        font-weight: bold;
        padding: 1.2em 2em 1em 2em;
    }

    .previous {

    }

    .next {
        /*text-align: right;*/
    }
</style>
