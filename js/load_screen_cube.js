function loadScreenCube() {
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  // var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
  // console.log(renderedTexture);
  var material = new THREE.MeshBasicMaterial( { color: 0x666666, map: renderedTexture } );
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(2, 0, 0);
  window.screenCube = mesh;
  scene.add(mesh);
}
