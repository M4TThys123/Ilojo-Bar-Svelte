<script lang="ts">
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
        <!--            Window 1-->
        <li class="window-one top-layer window-small">
            <WindowOne link={'/discover/cl8vh8rmx4wx80bw26jscwzhn'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowOne>
        </li>

        <li class="window-two top-layer window-small">
            <WindowOne link={'/discover/cl8vc7gt84tx30cuqor5bxqfy'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowOne>
        </li>

        <li class="window-three top-layer window-small">
            <WindowOne link={'/discover/cl8vjb2rn4x9i0burl532c8t2'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowOne>
        </li>

        <!--            Window 2-->
        <li class="window-four top-layer window-big">
            <WindowTwo link={'/discover/cl8ysy2yw08zy0bvy1hq4bnkf'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowTwo>
        </li>
        <li class="window-five top-layer window-big">
            <WindowTwo link={'/discover/cl8yszk6v08im0bvyodnw9lyy'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowTwo>
        </li>
        <li class="window-six top-layer window-big">
            <WindowTwo link={'/discover/cl8yt1lbr08kt0bvyck52dg6p'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowTwo>
        </li>

        <!--            Window 3-->
        <li class="window-seven bottom-layer window-small">
            <WindowThree link={'/discover/cl8ysx9tz08cs0auqxhojha3y'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowThree>
        </li>

        <li class="window-eight bottom-layer window-small">
            <WindowThree link={'/discover/cl8vjfmjh4yr00bw7jt60irl9'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowThree>
        </li>

        <li class="window-nine bottom-layer window-small">
            <WindowThree link={'/discover/cl8ysw30o08be0auq4yw1n8tj'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowThree>
        </li>

        <!--            Door-->
        <li class="door-frame bottom-layer door">
            <Door link={'/3d-model'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></Door>
        </li>
        <!--            Window 4 -->
        <li class="window-ten bottom-layer window-big">
            <WindowFour link={'/credits'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowFour>
        </li>
        <li class="window-eleven bottom-layer window-big">
            <WindowFour link={'/guestbook'} image={'https://media.graphassets.com/n3ASraESNOSwZQunBDFT'}></WindowFour>
        </li>
    </ul>



    <nav>
        <!--            <a href="/discover/cl8vh8rmx4wx80bw26jscwzhn" class="window-one top-layer window-small"></a>-->
        <!--            <a href="/discover/cl8vc7gt84tx30cuqor5bxqfy" class="window-two top-layer window-small"></a>-->
        <!--            <a href="/discover/cl8vjb2rn4x9i0burl532c8t2" class="window-three top-layer window-small"></a>-->

        <!--            <a href="/discover/cl8ysy2yw08zy0bvy1hq4bnkf" class="window-four top-layer window-big"></a>-->
        <!--            <a href="/discover/cl8yszk6v08im0bvyodnw9lyy" class="window-five top-layer window-big"></a>-->
        <!--            <a href="/discover/cl8yt1lbr08kt0bvyck52dg6p" class="window-six top-layer window-big"></a>-->

        <!--            <a href="/discover/cl8ysx9tz08cs0auqxhojha3y" class="window-seven bottom-layer window-small"></a>-->
        <!--            <a href="/discover/cl8vjfmjh4yr00bw7jt60irl9" class="window-eight bottom-layer window-small"></a>-->
        <!--            <a href="/discover/cl8ysw30o08be0auq4yw1n8tj" class="window-nine bottom-layer window-small"></a>-->

        <!--            <a href="/3d-model" class="door-frame bottom-layer door"></a>-->

        <!--            <a href="/credits" class="window-ten bottom-layer window-big"></a>-->
        <!--            <a href="/guestbook" class="window-eleven bottom-layer window-big"></a>-->
    </nav>
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
