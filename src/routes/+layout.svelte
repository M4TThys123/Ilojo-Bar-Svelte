<script lang="ts">
    // Style
    import "../styles/style.css"

    // Componenten
    // import Header from "$lib/components/Header.svelte";
    // import Footer from '$lib/components/Footer.svelte';


    // Data voor Header Component
    import type {PageData} from './$types';
    import Header3 from "$lib/components/Header3.svelte";

    export let data: PageData;
</script>

<div class="app">
<!--    <Header stories={data.stories}/>-->
    <Header3 stories={data.stories}></Header3>

    <main>
        <slot/>
    </main>
    <!--	    <Footer/>-->
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    /** {*/
    /*    font-family: 'Rubik', sans-serif;*/
    /*}*/
</style>

