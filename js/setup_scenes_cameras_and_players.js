function setupScenesCamerasAndPlayers() {
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  player = new THREE.Object3D();
  scene = new THREE.Scene();
  scene.add(camera);
  scene.add(player);

  secondCamera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  secondPlayer = new THREE.Object3D();
  secondScene = new THREE.Scene();
  secondScene.add(secondCamera);
  secondScene.add(secondPlayer);

  thirdScene = new THREE.Scene();
  fourthScene = new THREE.Scene();
}
