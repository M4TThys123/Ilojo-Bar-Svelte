<div class="window-inner" >
    <a href="/discover/cl8vh8rmx4wx80bw26jscwzhn" class="window-small">
        <img src="https://media.graphassets.com/n3ASraESNOSwZQunBDFT" alt="" class="window-image"/>
    </a>
    <img class="window_L"  src="/assets/images/building/window-one/window_L.png"
         alt="window left side Ilojo bar">
    <img class="window_R"  src="/assets/images/building/window-one/window_R.png"
         alt="window left side Ilojo bar">
</div>


<style>
    .window-inner {
        position: relative;
        width: 100%;
        height: 100%;
        background: #101010;
        display: flex;
        justify-content: center; /* Center horizontally */
    }

    /*.window-small, */
    .window-small img {
        width: 100%;
        height: 100%;
    }


    .window-inner::before {
        content: "";
        position: absolute;
        background: url('/assets/images/building/window-one/window-frame.png') center/cover;
        /*top: -146px;*/
        /*width: 270px;*/
        /*height: 534px;*/
        width: 119.469%;
        height: 287.0967%;
        top: -78.172%;
        z-index: -1; /* Place it behind the .window-image */
    }


    :hover .window-inner::after{
        background: #8c0500;

    }

    .window_L, .window_R{
        transition: transform 1s ease,filter 1s ease;
        pointer-events: none;
        width: 119.469%;
        height: 287.0967%;
        top: -78.172%;
        position: absolute;

    }

    .window_L{
        transform-origin: 8%;
    }

    .window_R {
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