<script lang="ts">
    let imageUrl = 'path/to/placeholder.jpg'; // Replace this with your actual image URL
    let videoUrl = 'https://www.youtube.com/watch?v=mZeV4TAKsoY&ab_channel=TheFreedomBlueprint'; // Replace this with your YouTube video URL
    let videoId = 'T2ggkfha60g'; // Replace this with the ID of your YouTube video
</script>

<section class="container about-section">
    <div class="wrapper">
        <h1 class="text-center">About Ilojo Bar</h1>

        <section>
            <div class="row">
                <div class="col-md-6">
                    <h2>Introduction</h2>
                    <p>
                        Ilojo Bar of Casa do Fernandez was a landmark national monument in Lagos, Nigeria, which was
                        illegally demolished in 2016. Ilojo Bar was designed and built by Africans who returned from
                        slavery in Brazil in the nineteenth century. Legacy would like an English-language website that
                        becomes a kind of virtual monument to this remarkable building and the many stories surrounding
                        it.

                    </p>
                </div>
                <div class="col-md-6">
                    <img src="{imageUrl}" alt="Placeholder Image" class="img-fluid"/>
                </div>
            </div>
        </section>

        <section class="background-section">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="">Ilojo Bar over the years</h2>
                    <p class="">
                        This is a video of Ilojo Bar over the years, starting from the 1960 to the illigal demolishment on 11 Sept 2016.
                    </p>
                </div>
                <div class="col-md-12">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{videoId}"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>

    </div>
</section>

<style>
    .about-section{
        color: white;
    }
    .wrapper {
        padding: 5em 0;
    }

    /* You can customize the styles of the background section here */
    section.background-section {
        /* Add your custom styles for the background section */
    }

    .embed-responsive {
        position: relative;
        display: block;
        width: 100%;
        padding: 0;
        overflow: hidden;
    }

    .embed-responsive::before {
        content: '';
        display: block;
        padding-top: calc(9 / 16 * 100%);
    }

    .embed-responsive-item {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    h2.text-center,
    p.text-center {
        width: 100%;
    }
</style>


<!-- <script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

  </script>

    <section>
        {#each data.stories as story}
           <h1> {story.title}</h1>
        {/each}
    </section> -->