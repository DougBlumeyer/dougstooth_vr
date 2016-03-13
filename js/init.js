function init() {
  setupContainerAndRenderer();
  setupScenesCamerasAndPlayers();
  keyboardControls();
  renderedTexture();
  loadLights();
  loadDougsteeth();
  loadScreenCubes();
  new THREE.Raycaster();
  vrControls = new THREE.VRControls();
  vrEffect = vrEffect();
}
