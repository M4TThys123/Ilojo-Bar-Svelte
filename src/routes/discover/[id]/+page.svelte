<script lang="ts">
    import type {PageData} from './$types';
    import HamburgerButton from "$lib/components/HamburgerButton.svelte";

    export let data: PageData;

    console.log(data)

</script>

<svelte:head>
    <title>Ilojo Bar - {data.title}</title>
</svelte:head>


<section class="story">
    <h1 class="story__title">{data.title}</h1>
    <div class="story__content">
        {@html data.content.html}
    </div>
</section>

<HamburgerButton></HamburgerButton>


<style>
    .story {
        display: grid;
        place-items: center;
        background-color: #7A1006;
        overflow-x: hidden;

        padding: 0.8rem 1rem;
        width: 100%;
        margin-top: 4rem;
    }

    .story__title {
        /*font-size: 40px;*/
        font-weight: normal;
        line-height: 1.1em;
        text-align: center;
        color: rgb(254, 248, 248);
        padding-bottom: 1em;

        font-weight: bold;
        font-size: 2em;

    }
    img{
        width: 40% !important;
    }
    .story__content {
        position: relative;
        /*font-family: "Austral-Sans_Stamp-Regular";*/
        font-size: 1.3em;
        line-height: 1rem;
        color: white;
        width: 63em;
        padding: 1em;
    }

     p{
        margin-top: 0.3em;
        font-size: 22px;
        line-height: 1.2em;

        /*!* Statiche fix *\*/
        /*max-width: 35ch;*/
}

/* content global styling */
    :global(.story__content p) {
        margin-top: 0.3em;
        font-size: 22px;
        line-height: 1.2em;
}

:global(.story__content img) {
    width: 85%;
    height: 25em;
    object-fit: fill;
    border-radius: 15px;
    margin-left: 4.5em;
}

/* content specifiek styling */
    :global(.story__content >p){

    }
    :global(.story__content > img:nth-child(2)) {
        width: 16em;
        height: 25em;
        object-fit: auto;
        border-radius: 15px;
    }

    :global(.story__content > img:nth-child(4)) {
        position: absolute;
        top: 263px;
        left: 40%;
        width: 50%;
        height: 13em;
        object-fit: fill;
        border-radius: 15px;
        margin-left: unset;
    }

    :global(.story__content > p:nth-child(1)) {
        position: absolute;
        top: 1%;
        left: 37%;
        width: 55%;
        padding: unset;
        margin: unset;
    }

    :global(.story__content > p:nth-child(3)) {
        margin-top: 3em;
    }

    /* responsive */
    @media (max-width: 60em) {
        .story {
            display: grid;
            place-items: center;
        }

        .story__title {
            font-size: 23px;
        }

        .story__content {
            grid-template-columns: repeat(1, 1fr);
            width: 118%;
        }

        :global(.story__content img) {
            margin-left: 7%;
        }

        /* content specifiek styling */
        :global(.story__content > img:nth-child(2)) {
            width: 85%;
            height: inherit;
        }

        :global(.story__content > img:nth-child(4)) {
            position: unset;
            width: 85%;
            height: inherit;
            object-fit: fill;
            border-radius: 15px;
            margin-left: 7%;

        }

        :global(.story__content > p:nth-child(1)) {
            position: unset;
            width: 85%;
            margin-left: 7%;
            margin-bottom: 1em;

        }

    }
</style>
