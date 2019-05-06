let camera, scene, renderer, controls;

init();
animate();

function init() {
  scene = new THREE.Scene();
  let width = window.innerWidth;
  let height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 10, 100000);
  camera.position.z = 700; 
  camera.position.y = 200;
  scene.add(camera);

  let light = new THREE.DirectionalLight(0xfffffff, 1); 
  light.position.set(1, 5, 5); 
  scene.add(light);

  let spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000);
  spotlight.castShadow = false;

  

  scene.add(spotlight);

  
  let textureLoader = new THREE.TextureLoader();

  textureLoader.load('planet.jpg', function(texture) {
    let material = new THREE.MeshStandardMaterial({map: texture});

    let sphereGeometry = new THREE.SphereGeometry(150, 75, 75);
    let sphere = new THREE.Mesh(sphereGeometry, material);
    sphere.position.y = 100;
    sphere.castShadow = true;
    scene.add(sphere);

  });


  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update(); 
}