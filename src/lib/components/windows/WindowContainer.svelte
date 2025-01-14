<script lang="ts">
    import { windows } from '$lib/script/windows.js'
    import WindowOne from "$lib/components/windows/WindowOne.svelte";
    import WindowTwo from "$lib/components/windows/WindowTwo.svelte"
    import WindowThree from "$lib/components/windows/WindowThree.svelte";
    import WindowFour from "$lib/components/windows/WindowFour.svelte";
    import Door from "$lib/components/windows/Door.svelte";
</script>


<div class="building-container" id="building-with-windows">
    <picture class="building-image__wrapper">
        <img src="/assets/images/building/building_high-res.png" alt="" class="building-image">
    </picture>



    <ul>
        {#each windows as window}
            <li class={window.class}>
                {#if window.component == 'WindowOne'}
                    <WindowOne link={window.link} image={window.image} />
                {:else if window.component == 'WindowTwo'}
                    <WindowTwo link={window.link} image={window.image} />
                {:else if window.component == 'WindowThree'}
                    <WindowThree link={window.link} image={window.image} />
                {:else if window.component == 'WindowFour'}
                    <WindowFour link={window.link} image={window.image} />
                {:else if window.component == 'Door'}
                    <Door link={window.link} image={window.image} />
                {:else}
                    <p>Unknown component type: {window.component}</p>
                {/if}
            </li>
        {/each}
    </ul>
</div>

<style>
    li{
        position: absolute;
    }

    .building-container{
        position: relative;
    }
    .building-container a {
        position: absolute;
    }

    .building-image, building-image__wrapper{
        width: 100%;
    }

    .window-small, .window-big, .door{
        background: #101010;

    }

    .window-small {
        width: 8.93615%;
        height: 12.85151%;
    }

    .window-big {
        width: 9.71385%;
        height: 12.85151%;
    }

    .door {
        width: 9.87778%;
        height: 19.87152%;
    }

    .top-layer{
        top: 40.63532%;
    }

    .window-one {
        left: 6.55376%;
        position: absolute;
    }

    .window-two {
        left: 24.08258%;
    }

    .window-three {
        left: 42.44487%;
    }

    .window-four {
        left: 58.12732%;
    }

    .window-five {
        left: 72.10727%;
    }

    .window-six {
        left: 86.18552%;
    }

    .bottom-layer{
        top: 79.60415%;

    }
    .window-seven {
        left: 6.55376%;
    }

    .window-eight {
        left: 24.14058%;
    }

    .window-nine {
        left: 42.44487%;
    }

    .door-frame {
        left: 57.95360%;
    }

    .window-ten {
        left: 72.10727%;
    }

    .window-eleven {
        left: 86.18552%;
    }
</style>
