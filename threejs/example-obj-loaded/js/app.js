window.onload = function () {

  let camera, controls, scene, renderer, geometry;

  function init() {

    let container = document.getElementById('container');

    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.z = 500;

    controls = new THREE.OrbitControls(camera, renderer.domElement);


    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    var pointLight = new THREE.PointLight(0xffffff, 0.8);
    camera.add(pointLight);
    scene.add(camera);

    let axes = new THREE.AxesHelper();
    axes.scale.set(1000, 1000, 1000);
    scene.add(axes);



    // manager
    function loadModel() {
      object.traverse(function (child) {
        if (child.isMesh) child.material.map = texture;
      });
      object.position.y = 0;
      scene.add(object);
    }
    var manager = new THREE.LoadingManager(loadModel);
    manager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total);
    };
    // texture
    var textureLoader = new THREE.TextureLoader(manager);
    var texture = textureLoader.load('models/apple-texture.jpg');
    // model
    function onProgress(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
      }
    }

    function onError(xhr) {}
    var loader = new THREE.OBJLoader(manager);
    loader.load('models/apple.obj', function (obj) {
      object = obj;
    }, onProgress, onError);



  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  init();
  animate();

}