function init() {
  setupContainerRendererAndRaycaster();
  setupScenesCamerasAndPlayers();
  keyboardControls();
  renderedTexture();
  loadLights();
  loadDougsteeth();
  loadScreenCubes();
  vrControls = new THREE.VRControls();
  vrEffect = vrEffect();
}
