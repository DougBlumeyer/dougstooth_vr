function loadScreenCubes() {
  var geometry = new THREE.BoxGeometry(5, 5, 0.1)
  var mesh = new THREE.Mesh(geometry);
  mesh.position.set(0, 0, -8);
  window.screenCube = mesh;
  thirdScene.add(mesh);

  mesh = new THREE.Mesh(geometry);
  mesh.position.set(0, 0, -7);
  window.secondScreenCube = mesh;
  fourthScene.add(mesh);
}
