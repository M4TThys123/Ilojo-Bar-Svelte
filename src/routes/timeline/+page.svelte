<script lang="ts">
    export let data;

    // Ensure data is available and timelines is an array
    if (!data || !data.timelines || !Array.isArray(data.timelines)) {
        console.error('Invalid data format');
    }
</script>

<!-- Render data from Hygraph -->
<section class="timeline-hero content container">
    <h1 class="mb-4">Timeline</h1>
    <h2 class="mb-3">Discover the Legacy of Our Iconic Nigerian Building</h2>
    <p class="timeline-para">
        Travel through time and explore the extraordinary history of our beloved Nigerian building. From the enchanting
        streets of the 1940s to the vibrant life of the 21st century, let us guide you on an enthralling journey through the
        heart and soul of this historical landmark.
    </p>
</section>

<section class="timeline-section mt-4 mt-lg-5">
    <section class="timeline-container container">
        <section class="timeline container">
            {#each data.timelines as { nummer, jaartal, titel, beschrijving, afbeelding }}
                <div class="timeline-block">
                    <div class="timeline-dot"></div>

                    <div class="timeline-inner row align-items-center justify-content-md-between mb-5">
                        <div class="timeline-image__wrapper col-12 col-md-5 mb-3">
                                <img class="timeline-image" src={afbeelding.url} alt="">
                        </div>

                        <section class="timeline-content col-12 col-md-5">
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
    * {
        color: var(--light);
        font-family: 'Rubik', sans-serif;
    }

    .timeline-hero{
        padding: 0 1rem;
    }
    .timeline-para{
        font-size: 18px;
    }

    .timeline{
        padding: 16px 0;
    }
    .timeline-container{
        width: 100%;
        max-width: 1140px;
        padding-right: 0.75rem;
        padding-left: 0.75rem;
        margin-right: auto;
        margin-left: auto;
    }
    .timeline-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 30px;
        height: 100%;
        width: 4px;
        background: #d7e4ed;
    }


    .timeline-block{
        position: relative;
    }

    .timeline-dot{
        background: var(--redLight);

        position: absolute;
        /*top: 200px;*/
        bottom:  80px;
        left: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }

    .timeline-inner{
        margin-left: 40px;
    }

    /* Image styles */
    story__image-background{

    }

    .timeline-image__wrapper{

    }

    .timeline-image {
        width: 100%;
        display: block;
        border-width: 20px;
        border-style: solid;
        border-image: url(/assets/images/timeline/frame.png) 30 round;
    }


    /* Timeline content styles */
    .timeline-content{
        order: 2
    }

    .timeline-jaartal {
        font-size: 28px;
        /* Add specific styles for timeline year here */
    }

    .timeline-subtitle {
        /* Add specific styles for timeline subtitle here */
        font-size: 20px;
    }

    .timeline-para {
        /* Add specific styles for timeline paragraph here */
    }


    /* Timeline section styles */
    .timeline-section {
        position: relative;
    }


    /* Timeline item styles*/
    /*styles voor links en rechts*/




    /* SM (for tablets - screens ≥ than 768px wide) */
    @media (width >= 768px) {
        /* CSS rules for tablets go here */
        .timeline-container::before {
            left: 50%;
        }

        .timeline-inner{
            margin-left: 0px;
        }
        .timeline-dot{
            left: calc(50% - 8px);
            top: 50%;
        }

        .timeline-block:nth-child(even)  .timeline-content {
            order: -1;
            text-align: end;
        }

        }

    /* MD (for small laptops - screens ≥ than 992px wide) */
    @media (width >= 992px) {
        /* CSS rules for small laptops go here */
        .timeline-image {
            border-width: 35px;
        }
    }

    /* LG (for laptops and desktops - screens ≥ than 1200px wide) */
    @media (width >= 1200px) {
        /* CSS rules for laptops and desktops go here */
        .timeline-container{
            max-width: 1520px;
        }
    }

</style>
