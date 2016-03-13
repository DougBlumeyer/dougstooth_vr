function init() {
  setupContainerAndRenderer();
  setupScenesCamerasAndPlayers();

  keyboardControls();

  renderedTexture = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBFormat } );

  loadLights();
  loadDougsteeth();
  loadScreenCube();

  new THREE.Raycaster();
  vrControls = new THREE.VRControls();
  vrEffect = vrEffect();
}
