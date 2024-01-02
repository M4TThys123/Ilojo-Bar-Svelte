<script lang="ts">
    export let data
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';

    // import type {PageData} from '/$types';

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

<div class="story-pagination mt-5 align-items-center">
    <div class="previous-wrapper">
        <nav>
            <a href="/discover/{previousPageId}" class="previous pagination"  class:hide={previousPageId === null}>
                <span class="pagination-text">
        &lt; Previous
                    <!--{previousPageId}-->
      </span>
            </a>
        </nav>
    </div>


    <!--    <span>-->
    <!--      {currentPageRoute}-->
    <!--        &lt;!&ndash;{currentPageId}&ndash;&gt;-->
    <!--    </span>-->
    <div class="next-wrapper">
        <nav>
            <a href="/discover/{nextPageId}" class="next pagination" class:hide={nextPageId===null}>
      <span class="pagination-text">
        Next &gt;
          <!--{nextPageId}-->
      </span>
            </a>
        </nav>
    </div>
</div>


<style>
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

</style>