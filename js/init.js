function init() {
  renderedTexture();
  setupScenesCamerasAndPlayers();
  setupContainerRendererAndRaycaster();
  keyboardControls();
  loadLights();
  loadDougsteeth();
  loadRooms();
  loadScreenCubes();
  vrControls = new THREE.VRControls();
  vrEffect = vrEffect();
}
