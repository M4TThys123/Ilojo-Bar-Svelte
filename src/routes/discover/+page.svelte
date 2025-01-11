<script lang="ts">
    import Slider02 from "$lib/components/slider/Slider02.svelte";

    export let stories: { title: string, id: number, thumbnail: { url: string } }[] = [];
    console.log(stories)

    export let data
    console.log(data.stories)
    import { windows } from '$lib/script/windows.js'
    console.log(windows)
</script>

<svelte:head>
    <title>Ilojo Bar - Discover</title>
</svelte:head>

<section class="discover-wrapper page">
    <div class="discover">
        <div class="text-center">
            <h1>Discover stories</h1>
        </div>


    <Slider02/>

    </div>

</section>

<style>
    discover-wrapper {
        padding: .8em 1.9em;
        height: 80vh;
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