import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0); // Lighter background color
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    camera.position.set(300, 300, 300);
    camera.up.set(0, 0, 1);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;
    controls.minDistance = 1;
    controls.maxDistance = 1000;
    controls.maxPolarAngle = Math.PI;

    const transformControls = new TransformControls(camera, renderer.domElement);
    transformControls.setMode('rotate');
    transformControls.setRotationSnap(THREE.MathUtils.degToRad(45));
    transformControls.addEventListener('change', () => renderer.render(scene, camera));
    transformControls.addEventListener('dragging-changed', (event) => {
        controls.enabled = !event.value;
    });
    scene.add(transformControls);
    transformControls.detach();

    let gridHelper = new THREE.GridHelper(200, 10);
    gridHelper.rotation.x = Math.PI / 2;
    scene.add(gridHelper);

    let mesh;
    let originalPositions = null;
    let originalRotation = null;
    let boundingBoxSize = 1;

    const light = new THREE.HemisphereLight(0xd3d3d3, 0x303030, 2); // light grey to dark grey

    light.position.set(0, 0, 300); // Position the light above the scene
    scene.add(light);

    const twistSlider = document.getElementById('twistSlider');
    twistSlider.addEventListener('input', () => {
        const twistAmount = twistSlider.value * Math.PI / 180;
        twistGeometry(mesh.geometry, twistAmount);
    });

    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const resetButton = document.getElementById('resetButton');
    const exportButton = document.getElementById('exportButton');
    const rotateButton = document.getElementById('rotateButton');

    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const contents = e.target.result;
                const loader = new STLLoader();
                const geometry = loader.parse(contents);

                geometry.computeBoundingBox();
                const boundingBox = geometry.boundingBox;
                const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;
                const centerY = (boundingBox.max.y + boundingBox.min.y) / 2;
                const centerZ = (boundingBox.max.z + boundingBox.min.z) / 2;
                const sizeX = boundingBox.max.x - boundingBox.min.x;
                const sizeY = boundingBox.max.y - boundingBox.min.y;
                const sizeZ = boundingBox.max.z - boundingBox.min.z;
                boundingBoxSize = Math.max(sizeX, sizeY, sizeZ);

                const offsetY = boundingBox.min.z;
                geometry.translate(-centerX, -centerY, -offsetY);

                if (mesh) {
                    scene.remove(mesh);
                }

                const material = new THREE.MeshPhongMaterial({ color: 0x808080, side: THREE.DoubleSide, shininess: 40 });
                mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);

                originalPositions = Float32Array.from(geometry.attributes.position.array);
                originalRotation = mesh.rotation.clone();

                twistSlider.value = 0;

                const maxDim = Math.max(sizeX, sizeY, sizeZ);
                const fov = camera.fov * (Math.PI / 180);
                const cameraDistance = maxDim * 1.5 / (2 * Math.tan(fov / 2));

                camera.position.set(centerX + cameraDistance, centerY - cameraDistance, centerZ + cameraDistance);
                camera.lookAt(centerX, centerY, centerZ);
                controls.update();

                scene.remove(gridHelper);
                gridHelper = new THREE.GridHelper(boundingBoxSize * 2, 10);
                gridHelper.rotation.x = Math.PI / 2;
                scene.add(gridHelper);

                transformControls.attach(mesh);
                transformControls.detach();
            };
            reader.readAsArrayBuffer(file);
        }
    });

    resetButton.addEventListener('click', () => {
        resetPosition();
    });

    function resetPosition() {
        if (mesh && originalPositions && originalRotation) {
            const geometry = mesh.geometry;
            const positionAttribute = geometry.attributes.position;

            for (let i = 0; i < positionAttribute.count; i++) {
                positionAttribute.setXYZ(i, originalPositions[i * 3], originalPositions[i * 3 + 1], originalPositions[i * 3 + 2]);
            }
            positionAttribute.needsUpdate = true;

            mesh.rotation.copy(originalRotation);

            twistSlider.value = 0;
        }
    }

    exportButton.addEventListener('click', () => {
        if (mesh) {
            const exporter = new STLExporter();
            const stlArrayBuffer = exporter.parse(mesh, { binary: true });

            const blob = new Blob([stlArrayBuffer], { type: 'application/octet-stream' });
            const link = document.createElement('a');
            link.style.display = 'none';
            document.body.appendChild(link);

            link.href = URL.createObjectURL(blob);
            link.download = 'twisted_model.stl';
            link.click();
        }
    });

    rotateButton.addEventListener('click', () => {
        transformControls.visible = !transformControls.visible;
        if (transformControls.visible) {
            transformControls.attach(mesh);
        } else {
            transformControls.detach();
        }
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function twistGeometry(geometry, twistAmount) {
        const positionAttribute = geometry.attributes.position;

        const vector = new THREE.Vector3();
        const rotatedVector = new THREE.Vector3();
        const quaternion = new THREE.Quaternion().copy(mesh.quaternion).invert();

        for (let i = 0; i < positionAttribute.count; i++) {
            vector.fromArray(originalPositions, i * 3);

            vector.applyQuaternion(quaternion);

            const normalizedZ = vector.z / boundingBoxSize;
            const angle = normalizedZ * twistAmount;
            const sinAngle = Math.sin(angle);
            const cosAngle = Math.cos(angle);

            const x = vector.x * cosAngle - vector.y * sinAngle;
            const y = vector.x * sinAngle + vector.y * cosAngle;

            rotatedVector.set(x, y, vector.z).applyQuaternion(mesh.quaternion);

            positionAttribute.setXYZ(i, rotatedVector.x, rotatedVector.y, rotatedVector.z);
        }

        positionAttribute.needsUpdate = true;
    }

    function animate() {
        requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
    }

    const initialLoader = new STLLoader();
    initialLoader.load('static/gnome.stl', (geometry) => {
        geometry.computeBoundingBox();
        const boundingBox = geometry.boundingBox;
        const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;
        const centerY = (boundingBox.max.y + boundingBox.min.y) / 2;
        const centerZ = (boundingBox.max.z + boundingBox.min.z) / 2;
        const sizeX = boundingBox.max.x - boundingBox.min.x;
        const sizeY = boundingBox.max.y - boundingBox.min.y;
        const sizeZ = boundingBox.max.z - boundingBox.min.z;
        boundingBoxSize = Math.max(sizeX, sizeY, sizeZ);

        const offsetY = boundingBox.min.z;
        geometry.translate(-centerX, -centerY, -offsetY);

        const material = new THREE.MeshPhongMaterial({ color: 0x808080, side: THREE.DoubleSide, shininess: 40 });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        originalPositions = Float32Array.from(geometry.attributes.position.array);
        originalRotation = mesh.rotation.clone();

        const maxDim = Math.max(sizeX, sizeY, sizeZ);
        const fov = camera.fov * (Math.PI / 180);
        const cameraDistance = maxDim * 1.5 / (2 * Math.tan(fov / 2));

        camera.position.set(centerX + cameraDistance, centerY - cameraDistance, centerZ + cameraDistance);
        camera.lookAt(centerX, centerY, centerZ);
        controls.update();

        scene.remove(gridHelper);
        gridHelper = new THREE.GridHelper(boundingBoxSize * 2, 10);
        gridHelper.rotation.x = Math.PI / 2;
        scene.add(gridHelper);

        transformControls.attach(mesh);
        transformControls.detach();
    });

    animate();

    // Add event listeners for radio buttons using click event on labels
    document.getElementById('lowLabel').addEventListener('click', () => {
        twistSlider.min = -50;
        twistSlider.max = 50;
        resetPosition();
    });

    document.getElementById('mediumLabel').addEventListener('click', () => {
        twistSlider.min = -180;
        twistSlider.max = 180;
        resetPosition();
    });

    document.getElementById('highLabel').addEventListener('click', () => {
        twistSlider.min = -500;
        twistSlider.max = 500;
        resetPosition();
    });
});
