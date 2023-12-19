<script lang="ts">
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';

    import type {PageData} from './$types';

    export let data: PageData;

    let currentPageRoute = data.route;
    let currentPageId = data.id;

    let pagination = [];

    let hyData = data.stories;
    for (let i = 0; i < hyData.length; i++) {
        pagination.push({
            route: hyData[i].route,
            id: hyData[i].id,
        });
    }

    // Find the index of the current page in the pagination array
    let currentIndex = pagination.findIndex((item) => item.id === currentPageId);

    // Get the previous and next pages
    let previousIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
    let nextIndex = currentIndex + 1 < pagination.length ? currentIndex + 1 : null;

    let previousPageId = previousIndex !== null ? pagination[previousIndex].id : null;
    let nextPageId = nextIndex !== null ? pagination[nextIndex].id : null;

    // Function to handle navigation to previous page
    const navigateToPrevious = () => {
        if (previousPageId !== null) {

            goto(`/discover/${previousPageId}`);
        }
    };

    // Function to handle navigation to next page
    const navigateToNext = () => {
        if (nextPageId !== null) {

            goto(`/discover/${nextPageId}`);

        }
    };


    // Use onMount to log pagination data when the component is mounted
    onMount(() => {
        console.log(pagination);

    });
</script>

<svelte:head>
    <title>Ilojo Bar - {data.title}</title>
</svelte:head>

<section class="story content container">
    <!--    <span>{data.route}</span>-->
    <h1 class="story__title mb-4">{data.title}</h1>
    <h2 class="story__title mb-3 mb-md-5">{data.subtitle}</h2>
    <section class="story__content">
        {@html data.content.html}
    </section>


    <div class="story-pagination mt-5 align-items-center">
        <div class="previous-wrapper">
            <a on:click={navigateToPrevious} class="previous pagination"
               class:hide={previousPageId===null}>
      <span class="pagination-text">
        &lt; Previous
          <!--{previousPageId}-->
      </span>
            </a>
        </div>


        <span>
      {currentPageRoute}
            <!--{currentPageId}-->
    </span>
        <div class="next-wrapper">
            <a on:click={navigateToNext} class="next pagination"
               class:hide={nextPageId===null}>
      <span class="pagination-text">
        Next &gt;
          <!--{nextPageId}-->
      </span>
            </a>
        </div>
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
        /*text-transform: uppercase;*/
        /*width: auto;*/
        display: flex;
        justify-content: center;
        transition: transform .75s ease;
        width: 160px;
    }

    .previous-wrapper, .next-wrapper {
        width: 160px;
    }

    .pagination-text {
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

    .hide {
        display: none;
    }

    :global(.video-container iframe){
        width: 100%;
        height: 20em;
    }
    :global(.video-container ){
        width: 100%;
    }

    /*===============  BREAKPOINTS ===============*/
    /* MD (for small laptops - screens ≥ than 992px wide) */
    @media (width >= 992px) {
        .story__content {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            /*align-items: center;*/
            gap: 5%;
        }

        :global(.story__content p) {
            width: 58%;
            box-sizing: border-box;
            font-size: 22px;
            margin-top: 2em;
        }

        :global(.story__content img) {
            width: 37%;
            margin-top: 2em;
            height: fit-content;
        }

        :global(.text-large > p) {
            width: 100%;
        }

        :global(.text-double) {
            width: 58%;
        }

        :global(.text-double p) {
            width: 100%;
        }

        :global(.video-container iframe) {
            height: 45em;
        }
    }

    /*!* LG (for laptops and desktops - screens ≥ than 1200px wide) *!*/
    /*@media (width >= 1200px) {*/
    /*}*/
</style>
