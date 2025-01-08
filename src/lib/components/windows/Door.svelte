<script>
    export let link;
    export let image;

    let isHovered = false;

    const handleMouseEnter = () => {
        isHovered = true;
        document.body.classList.add('light-red');
    };

    const handleMouseLeave = () => {
        isHovered = false;
        document.body.classList.remove('light-red');
    };
</script>

<div
        class="window-inner {isHovered ? 'hovered' : ''}"
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}
>
    <a href={link} class="window-small">
        <img
                src={image}
                alt="Window small image"
                class="window-image"
        />
    </a>
    <img class="window_L"  src="/assets/images/building/door/door_L.png"
         alt="window left side Ilojo bar">
    <img class="window_R"  src="/assets/images/building/door/door_R.png"
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
        background: url('/assets/images/building/door/door-frame.png') center/cover;
        /*top: -146px;*/
        /*width: 270px;*/
        /*height: 534px;*/
        width: 106.469%;
        height: 159.0277%;
        top: -58.172%;
        z-index: -1; /* Place it behind the .window-image */
    }


    :hover .window-inner::after{
        background: #8c0500;

    }

    .window_L, .window_R{
        transition: transform 1s ease,filter 1s ease;
        pointer-events: none;
        width: 106.469%;
        /*height: 287.0967%;        */
        eight: 159.0277%;
        top: -58.172%;
        position: absolute;

    }

    .window_L{
        transform-origin: 3%;
    }

    .window_R {
        transform-origin: 97%;
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