function loadScreenCube() {
  var geometry = new THREE.BoxGeometry(5, 5, 0.1);
  var material = new THREE.MeshBasicMaterial( { color: 0x666666, map: renderedTexture } );
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, -2.5);
  window.screenCube = mesh;
  scene.add(mesh);
}
