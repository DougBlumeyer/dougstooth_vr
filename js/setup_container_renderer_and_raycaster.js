function setupContainerRendererAndRaycaster() {
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0xe0e0e0 );
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.autoClear = false;
  renderer.sortObjects = false;

  container = document.createElement('div');
  document.body.appendChild(container);
  container.appendChild(renderer.domElement);

  raycaster = new THREE.Raycaster();
}
