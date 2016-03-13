function setupContainerRenderer() {
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xf0f0f0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.sortObjects = false;

  container = document.createElement('div');
  document.body.appendChild(container);
  container.appendChild(renderer.domElement);
}