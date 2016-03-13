function init() {
  setupContainerAndRenderer();
  setupScenesCamerasAndPlayers();
  keyboardControls();
  renderedTexture();
  loadLights();
  loadDougsteeth();
  loadScreenCube();
  new THREE.Raycaster();
  vrControls = new THREE.VRControls();
  vrEffect = vrEffect();
}
