<script lang="ts">
    // Style
    import "../styles/style.css"

    // Componenten
    import Header from "$lib/components/Header.svelte";
    import Footer from '$lib/components/Footer.svelte';


    // Data voor Header Component
    import type {PageData} from './$types';
    // import Footer from "$lib/components/Footer.svelte";
    import PageTransition from "$lib/components/PageTransition.svelte";

    export let data: PageData;
</script>

<div class="app">
    <Header stories={data.stories}></Header>

    <main>
        <slot/>
    </main>


    <Footer
    >

    </Footer>

    <PageTransition></PageTransition>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
    }




</style>

