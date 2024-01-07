<script>
    import WindowOne from "$lib/components/windows/WindowOne.svelte";

    export let data;
    console.log(data);
</script>

<svelte:head>
    <title>Ilojo Bar - Guestbook</title>
</svelte:head>

<section class="page container">
    <h1>Guestbook</h1>
    <h2>Read through stories from guests</h2>
    <p>People can leave their stories from ..</p>

    <ul>
        <li>
            <div class="window-inner" >
                <a href="/discover/cl8vh8rmx4wx80bw26jscwzhn" class="window-small">
                    <img src="https://media.graphassets.com/n3ASraESNOSwZQunBDFT" alt="" class="window-image"/>
                </a>
                <img class="window_L"  src="/assets/images/building/window-one/window_L.png"
                     alt="window left side Ilojo bar">
                <img class="window_R"  src="/assets/images/building/window-one/window_R.png"
                     alt="window left side Ilojo bar">
            </div>
        </li>
        <li class="window-small">
            <WindowOne></WindowOne>
        </li>
    </ul>
</section>

<style>
    .page {
        min-height: 100vh;
        position: relative;
    }

    ul {
        margin-top: 20em;
        display: flex;
        gap: 5em;
    }


    ul > li:nth-child(1){
        left: 213px;
        bottom: 12px;
    }

    .window-small{
        width: 226px!important;
        height: 186px!important;
    }



    .window-inner {
        position: relative;
        width: 226px;
        height: 186px;
        background: #101010;
        display: flex;
        justify-content: center; /* Center horizontally */
    }

    .window-small, .window-small img {
        width: 100%;
        height: 100%;
    }


    .window-inner::before {
        content: "";
        position: absolute;
        background: url('/assets/images/building/window-one/window-frame-one.png') center/cover;
        top: -146px;
        width: 270px;
        height: 534px;
        z-index: -1; /* Place it behind the .window-image */
    }


    :hover .window-inner::after{
        background: #8c0500;

    }

    .window_L, .window_R{
        transition: transform 1s ease,filter 1s ease;
        pointer-events: none;
    }

    .window_L{
        position: absolute;
        top: -146px;
        transform-origin: 8%;
    }

    .window_R {
        position: absolute;
        top: -146px;
        transform-origin: 92%;
    }

    :hover.window-inner .window_L
    {
        transform: perspective(1200px) translateZ(0) translateX(0) translateY(0) rotateY(-110deg);
        -webkit-filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
        filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
    }

    :hover.window-inner .window_R
    {
        transform: perspective(1200px) translateZ(0) translateX(0) translateY(0) rotateY(110deg);
        -webkit-filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
        filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
    }


</style>
