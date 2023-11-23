<script lang="ts">
    export let data;

    // Ensure data is available and timelines is an array
    if (!data || !data.timelines || !Array.isArray(data.timelines)) {
        console.error('Invalid data format');
    }
</script>

<!-- Render data from Hygraph -->
<section class="timeline-hero content container">
    <h1 class="text-center mb-4">Timeline</h1>
    <h2 class="text-center mb-3">Discover the Legacy of Our Iconic Nigerian Building</h2>
    <p>
        Travel through time and explore the extraordinary history of our beloved Nigerian building. From the enchanting
        streets of the 1940s to the vibrant life of the 21st century, let us guide you on an enthralling journey through the
        heart and soul of this historical landmark.
    </p>
</section>

<section class="timeline-section mt-5">
    <section class="timeline-container container">
        <section class="timeline">
            {#each data.timelines as { nummer, jaartal, titel, beschrijving, afbeelding }}
                <div class="timeline-item">
                    <div class="timeline-dot">

                    </div>

                    <div class="timeline-inner row align-items-center mb-5">
                        <div class="col-12 col-md-6 mb-3">
                            <section class="story__image-background">
                                <img class="story__image" src={afbeelding.url} alt="">
                            </section>
                        </div>
                        <section class="timeline-content col-12 col-md-6">
                            <h3 class="timeline-jaartal">{jaartal}</h3>
                            <h4 class="timeline-subtitle">{titel}</h4>
                            <p class="timeline-para">{beschrijving}</p>
                        </section>
                    </div>
                </div>
            {/each}
        </section>
    </section>
</section>

<style>
    /* General styles */
    .content {
        margin-top: 5em;
    }

    .timeline{

    }

    .timeline-item{

    }

    .timeline-dot{

    }

    /* Image styles */
    story__image-background{

    }

    .story__image {
        width: 100%;
        display: block;
        border-width: 35px;
        border-style: solid;
        border-image: url(/assets/images/timeline/frame.png) 30 round;
    }


    /* Timeline content styles */
    .timeline-content{}

    .timeline-jaartal {
        font-size: 28px;
        /* Add specific styles for timeline year here */
    }

    .timeline-subtitle {
        /* Add specific styles for timeline subtitle here */
    }

    .timeline-para {
        /* Add specific styles for timeline paragraph here */
    }


    /* Timeline section styles */
    .timeline-section {
        position: relative;
    }

    .timeline-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 18px;
        height: 100%;
        width: 4px;
        background: #d7e4ed;
    }

    .timeline-container {
        padding-left: 4em;
    }





    /* Timeline item styles */
    /*styles voor links en rechts*/
    /*.timeline-item:nth-child(even) .timeline-content {*/
    /*    order: 2;*/
    /*}*/

</style>
