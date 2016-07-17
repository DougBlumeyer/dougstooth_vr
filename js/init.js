function init() {
  renderedTexture();
  setupScenesCamerasAndPlayers();
  setupContainerRendererAndRaycaster();
  setupComposers();
  keyboardControls();
  loadLights();
  loadDougsteeth();
  loadRooms();
  loadScreenCubes();
  vrControls = new THREE.VRControls();
  vrEffect = vrEffect();
}
