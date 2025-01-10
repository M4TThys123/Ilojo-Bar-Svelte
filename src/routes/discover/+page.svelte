<script lang="ts">
    import Stories from "$lib/components/discover/Stories.svelte";
    import Slider01 from "$lib/components/slider/Slider01.svelte";

    export let stories: { title: string, id: number, thumbnail: { url: string } }[] = [];
    console.log(stories)

    export let data
    console.log(data.stories)
</script>

<svelte:head>
    <title>Ilojo Bar - Discover</title>
</svelte:head>

<section class="discover-wrapper">
    <div class="discover">

    <div class="discover-header">
        <h2>Discover stories</h2>

    </div>

    <Slider01 data={data}/>
    <!--    <Stories data={data}/>-->
    </div>

</section>

<style>
    discover-wrapper {
        padding: .8em 1.9em;
    }


    discover {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*height: calc(100vh - calc(1.6em + 50px));*/
        padding: 0;
        cursor: pointer;
        margin-top: 300px;
    }

    .discover header {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .discover h2 {
        font-size: 1.2em;
        min-height: 2.3em;
    }

</style>