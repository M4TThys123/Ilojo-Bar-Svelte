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

<div class="page container">
    <section class="page-content">

        <section class="timeline-hero">
            <h1 class="">{title}</h1>
            <h2 class="">{subTitle}</h2>
        </section>

        <section class="rich-text__field">
            {@html content.html}
        </section>
    </section>
</div>

<style>
    .credits-content {

    }


</style>