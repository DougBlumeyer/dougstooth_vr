function init() {
  setupContainerRendererAndRaycaster();
  setupScenesCamerasAndPlayers();
  keyboardControls();
  renderedTexture();
  loadLights();
  loadDougsteeth();
  loadRooms();
  loadScreenCubes();
  vrControls = new THREE.VRControls();
  vrEffect = vrEffect();
}
