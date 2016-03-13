function setupContainerAndRenderer() {
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.sortObjects = false;

  container = document.createElement('div');
  document.body.appendChild(container);
  container.appendChild(renderer.domElement);
}
