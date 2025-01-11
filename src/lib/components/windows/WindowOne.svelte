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
    <img
            class="window_L"
            src="/assets/images/building/window-one/window_L.png"
            alt="Window left side Ilojo bar"
    />
    <img
            class="window_R"
            src="/assets/images/building/window-one/window_R.png"
            alt="Window right side Ilojo bar"
    />
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

    .window-small img {
        width: 100%;
        height: 100%;
    }

    .window-inner::before {
        content: "";
        position: absolute;
        background: url('/assets/images/building/window-one/window-frame.png') center/cover;
        width: 119.469%;
        height: 287.0967%;
        top: -78.172%;
        z-index: -1;
    }

    .window_L,
    .window_R {
        transition: transform 1s ease, filter 1s ease;
        pointer-events: none;
        width: 119.469%;
        height: 287.0967%;
        top: -78.172%;
        position: absolute;
    }

    .window_L {
        transform-origin: 8%;
    }

    .window_R {
        transform-origin: 92%;
    }

    .hovered .window_L {
        transform: perspective(1200px) translateZ(0) translateX(0) translateY(0) rotateY(-110deg);
        filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
    }

    .hovered .window_R {
        transform: perspective(1200px) translateZ(0) translateX(0) translateY(0) rotateY(110deg);
        filter: drop-shadow(-10px 6px 5px rgba(0, 0, 0, 0.2));
    }
</style>