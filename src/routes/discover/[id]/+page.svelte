<script lang="ts">
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';
    import PaginationComponent from "$lib/components/PaginationComponent.svelte";

    // import type {PageData} from './$types';
    export let data;

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

<div class="page">
    <section class="page-content story container content page">

        <!--    <span>{data.route}</span>-->

        <h1 class="page-title mb-4">{data.title}</h1>
        <h2 class="story__title mb-3 mb-md-5">{data.subtitle}</h2>
        <section class="story__content">
            {@html data.content.html}
        </section>


            <PaginationComponent {data}></PaginationComponent>
    </section>
</div>


<style>
    .page-content {
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

    :global(.video-container iframe) {
        width: 100%;
        height: 20em;
    }

    :global(.video-container) {
        width: 100%;
        margin-top: 2em;
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
</style>
