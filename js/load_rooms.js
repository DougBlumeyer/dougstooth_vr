function loadRooms() {
  var geometry = new THREE.BoxGeometry(30, 30, 30);
  var material = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888, side: THREE.BackSide});
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  var geometry = new THREE.BoxGeometry(30, 30, 30);
  var material = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888, side: THREE.BackSide});
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  secondScene.add(mesh);
}
