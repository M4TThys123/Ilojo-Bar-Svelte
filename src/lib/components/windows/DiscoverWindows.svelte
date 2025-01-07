<script>
    import WindowOne from "$lib/components/windows/WindowOne.svelte";
    import WindowThree from "$lib/components/windows/WindowThree.svelte";
    import WindowTwo from "$lib/components/windows/WindowTwo.svelte";
    import WindowFour from "$lib/components/windows/WindowFour.svelte";
    import Door from "$lib/components/windows/Door.svelte";
</script>

<section class="discover-windows">
    <ul>
        <!--            <li>-->
        <!--                <div class="window-inner" >-->
        <!--                    <a href="/discover/cl8vh8rmx4wx80bw26jscwzhn" class="window-small">-->
        <!--                        <img src="https://media.graphassets.com/n3ASraESNOSwZQunBDFT" alt="" class="window-image"/>-->
        <!--                    </a>-->
        <!--                    <img class="window_L"  src="/assets/images/building/window-one/window_L.png"-->
        <!--                         alt="window left side Ilojo bar">-->
        <!--                    <img class="window_R"  src="/assets/images/building/window-one/window_R.png"-->
        <!--                         alt="window left side Ilojo bar">-->
        <!--                </div>-->
        <!--            </li>-->
        <li class="window-small">
            <WindowOne></WindowOne>
        </li>
        <li class="window-large">
            <WindowTwo></WindowTwo>
        </li>
        <li class="window-small">
            <WindowThree></WindowThree>
        </li>

        <!--            <li class="door">-->
        <!--                <Door></Door>-->
        <!--            </li>-->

        <li class="window-large">
            <WindowFour></WindowFour>
        </li>
    </ul>
</section>