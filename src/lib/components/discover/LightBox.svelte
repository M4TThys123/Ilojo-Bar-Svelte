<script>
    export let images = [];
    export let currentImageIndex = 0;
    export let isOpen = true;
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function closeLightbox() {
        isOpen = false;
        dispatch('close');
    }

    function showNext() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    function showPrev() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
</script>

{#if isOpen}
    <div class="lightbox-overlay" on:click={closeLightbox}>
        <div class="lightbox-content" on:click|stopPropagation>
            <button class="close-btn round-btn" on:click={closeLightbox}>×</button>
            <button class="prev-btn round-btn" on:click={showPrev}>←</button>
            <img src={images[currentImageIndex]?.src} alt={images[currentImageIndex]?.alt} />
            <p class="caption">{images[currentImageIndex]?.caption}</p>
            <button class="next-btn round-btn" on:click={showNext}>→</button>
        </div>
    </div>
{/if}

<style>
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        max-width: 100%;
        max-height: 80vh;
    }

    .caption {
        color: white;
        margin-top: 1em;
        text-align: center;
    }

    .close-btn, .prev-btn, .next-btn {
        position: absolute;
        background: none;
        color: white;
        border: none;
        font-size: 2rem;
        cursor: pointer;
    }

    .close-btn {
        top: 10px;
        right: 10px;
    }

    .prev-btn {
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .next-btn {
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>