function loadDougsteeth() {
  var material = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material;
    });
    object.position.z = -5;
    window.dougstooth = object;
    scene.add(object);
  });

  var material2 = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material2;
    });
    object.position.z = -5;
    window.secondDougstooth = object;
    secondScene.add(object);
  });
}
