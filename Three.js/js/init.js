function init() {
    // renderer
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000); // black

    // scene
    var scene = new THREE.Scene();

    // camera
    var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
    camera.position.set(-4, 3, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    // a cube in the scene
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1.5, 2, 3),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe:true
        })
    );
    scene.add(cube);

    var light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(0, 1.5, 2);
    scene.add(light);

    // render
    renderer.render(scene, camera);
}