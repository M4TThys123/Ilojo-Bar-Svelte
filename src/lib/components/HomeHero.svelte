<script>
    import ScrollButton from "$lib/components/ScrollButton.svelte";
</script>

<section>
    <div class="para-container">
        <h2>Welcome to the <br /> Stories of Ilojo Bar</h2>
        <p>Discover 9 stories about the shattered bar of Lagos</p>
    </div>

    <ScrollButton></ScrollButton>
</section>

<style>
    section {
        position: fixed;
        z-index: 1;
        padding-top: 5.5rem;
        padding-bottom: 1.5rem;
        left: 50%;
        transform: translate(-50%);
        text-align: center;
        max-width: 45rem;
        color: white;

        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }


    h2 {
        font-size: 2.5rem;
        font-weight: bold;
    }

    p {
        margin-top: .5rem;
        font-size: 1.5rem;
    }

    @media (max-width: 55rem) {
        h2 {
            font-size: 2rem;
            white-space: nowrap;
            line-height: 2.5rem;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.5rem;
        }
    }
</style>
