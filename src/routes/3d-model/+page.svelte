<script>
    import * as THREE from 'three';
    import {onMount} from "svelte";
    import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
    import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js';

    let scene, fbxLoader, hemiLight, spotLight, renderer, camera,
        controls, container, buildingObj, model;

    let loadingBar;
    let progressBar;

    export let modelPath = '/assets/models/building.fbx'; // You can pass the model path as a prop

    onMount(() => {
        progressBar = document.querySelector('#progress');

        setTimeout(() => {
            seeModel();
        }, 1000); // 2000 milliseconds (2 seconds) delay
    });


    function seeModel() {
        scene = new THREE.Scene();
        fbxLoader = new FBXLoader();
        hemiLight = new THREE.HemisphereLight('white', 'white', 1);
        spotLight = new THREE.SpotLight('white', 0.3);
        renderer = new THREE.WebGLRenderer({
            alpha: true,
        });
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        controls = new OrbitControls(camera, renderer.domElement);
        container = document.querySelector('#scene-container');

        scene.add(hemiLight);

        controls.enableDamping = true;
        controls.target.set(0, 1, 0);

        camera.position.set(0, 10, 1.0);

        fbxLoader.load(
            modelPath,
            (object) => {
                object.traverse(function (child) {
                    if (child.isMesh) {
                        if (child.material) child.material.side = THREE.DoubleSide;
                    }
                });
                object.scale.set(0.02, 0.02, 0.02);
                buildingObj = object;
                controls.enablePan = false;
                scene.add(object);

                // Hide the progress bar when the model is loaded
                if (loadingBar) {
                    loadingBar.style.display = 'none';
                }
            },
            (xhr) => {
                let percentage = (xhr.loaded / xhr.total) * 100;
                console.log(percentage + '% loaded');
                var roundedPerc = Math.round(percentage * 10) / 10;

                loadingBar.style.width = roundedPerc + '%';
                loadingBar.innerHTML = roundedPerc + '%';
            },
            (error) => {
                console.log(error);
            }
        );

        window.addEventListener('resize', onWindowResize, false);

        // renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // the default

        // add the automatically created <canvas> element to the page
        model = renderer.domElement;
        container.append(renderer.domElement);
        renderer.domElement.classList.add('modelCanvas');

        animate();
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }

    function resizeRendererToDisplaySize() {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = (canvas.clientWidth * pixelRatio) | 0;
        const height = (canvas.clientHeight * pixelRatio) | 0;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function animate() {
        requestAnimationFrame(animate);

        spotLight.position.set(camera.position.x + 10, camera.position.y + 10, camera.position.z + 10);

        if (buildingObj) buildingObj.rotation.y -= 0.002;

        controls.update();

        render();
    }

    function render() {
        renderer.render(scene, camera);

        if (resizeRendererToDisplaySize()) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        // disable vertical movement plus zooming
        controls.minPolarAngle = Math.PI / 2;
        controls.maxPolarAngle = Math.PI / 2;
        controls.enableZoom = false;
    }
</script>

<svelte:head>
    <title>Ilojo Bar - 3D Model</title>
</svelte:head>


<section class="content container">
    <h1 class=" mb-3">3D Model</h1>
</section>

<section class="model">
    <div id="progress">
        <div bind:this={loadingBar} id="loadingBar">0%</div>
    </div>

    <div id="scene-container"></div>
</section>

<style>
    /* 3D MODEL PAGE */
    .model {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    #scene-container {
        /*margin-bottom: 100px;*/
        position: absolute;
        top: 60px;
    }

    .modelCanvas {
        margin-top: -150px;
        margin-bottom: -190px;
    }

    #progress {
        width: 100%;
        max-width: 400px;
        background-color: var(--grey);
        border-radius: 15px;
        margin-top: 150px;
    }

    #loadingBar {
        width: 0%;
        height: 30px;
        background-color: var(--dark);
        text-align: center;
        line-height: 30px;
        color: white;
        border-radius: 15px;
    }

    h1 {

    }

</style>