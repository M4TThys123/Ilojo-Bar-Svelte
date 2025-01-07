<!-- ProgressBar.svelte -->
<script>
    import { createEventDispatcher, onMount } from 'svelte';

    export let percentage = 0;
    export let simulation = true;
    let loadingBar;

    // Dispatch event to notify when the loading is complete
    const dispatch = createEventDispatcher();

    // Simulate loading progress
    onMount(() => {
        if (simulation) {
            let simulatedPercentage = 0;
            const interval = setInterval(() => {
                simulatedPercentage += 10;
                percentage = simulatedPercentage;

                if (percentage >= 100) {
                    clearInterval(interval);
                    dispatch('complete');
                }
            }, 50); // Increase percentage every 150ms to simulate 1.5 seconds loading
        }
    });

    $: if (loadingBar) {
        if (percentage >= 100) {
            loadingBar.style.display = 'none';
        } else {
            loadingBar.style.display = 'block';
            loadingBar.style.width = percentage + '%';
            loadingBar.innerHTML = percentage + '%';
        }
    }
</script>

<div id="progress">
    <div bind:this={loadingBar} id="loadingBar">0%</div>
</div>

<style>
    #progress {
        width: 100%;
        max-width: 400px;
        background-color: var(--grey);
        border-radius: 15px;
        margin-top: 150px;
        z-index: 9999999999999999999999;
        position:  absolute;
    }

    #loadingBar {
        width: 0%;
        height: 30px;
        background-color: var(--dark);
        text-align: center;
        line-height: 30px;
        color: white;
        border-radius: 15px;
        font-family: Rubik, sans-serif;
        font-weight: bold;
    }
</style>
