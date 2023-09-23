<button class="scroll_btn"><i></i><span>Scroll down or click</span></button>


<style>
    scroll_btn {
        opacity: 1;
    }

    .scroll_btn i {
        height: 5em;
        width: 3.125em;
        border: 0.25em solid #ffffff;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 3.125em;
        border-radius: 1.5em;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        margin-bottom: .5em;
        transform: scale(.8);
    }

    .scroll_btn i:before {
        position: absolute;
        content: "";
        margin: auto;
        left: 0;
        right: 0;
        top: .8em;
        height: .8em;
        width: .8em;
        background-color: #ffffff;
        border-radius: 100%;
        animation: move-down 2s infinite;
    }

    @keyframes move-down {
        80% {
            opacity: 0.5;
        }

        100% {
            transform: translateY(2.60em);
            opacity: 0;
        }
    }

    .scroll_btn {
        appearance: none;
        border: none;
        background: transparent;
        height: auto;
        text-align: center;
        font-size: 1em;
        color: #ffffff;
        letter-spacing: 1px;
    }

    .scroll_btn span {
        text-align: center;
        font-size: 1.2em;
        color: #ffffff;
        letter-spacing: 1px;
    }

</style>