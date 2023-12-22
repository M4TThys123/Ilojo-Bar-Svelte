<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
    console.log(data.page)
    let pageData = data.page
    let title = pageData.title
    let subTitle = pageData.subtitle
    let content = pageData.content

</script>

<svelte:head>
    <title>Ilojo Bar - Credits</title>
</svelte:head>

<section class="timeline-hero content container">
    <h1 class="mb-4">{title}</h1>
    <h2 class="mb-3">{subTitle}</h2>
</section>

<section class="credits-content">
    <!--{@html data.content.html}-->
</section>

<style>
    .credits-content{

    }

</style>