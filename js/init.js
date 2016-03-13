function init() {
  setupContainerRenderer();
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  scene = new THREE.Scene();
  loadLight();
  loadDougstooth();
  new THREE.Raycaster();
  vrControls = new THREE.VRControls(camera);
  vrEffect = vrEffect();
}
