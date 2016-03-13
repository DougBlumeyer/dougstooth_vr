function init() {
  setupContainerAndRenderer();
  keyboardControls();

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  player = new THREE.Object3D();

  renderedTexture = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBFormat } );

  secondCamera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  secondCamera.position.set(-5, 0, 0)
  secondCamera.lookAt(-5, 0, -5);

  scene = new THREE.Scene();
  secondScene = new THREE.Scene();
  secondScene.add(secondCamera);
  scene.add(player);

  loadLights();
  loadDougsteeth();
  loadScreenCube();

  new THREE.Raycaster();
  vrControls = new THREE.VRControls(player, camera);
  vrEffect = vrEffect();
}
