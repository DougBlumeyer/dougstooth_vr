function loadDougstooth() {
  var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
  var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material;
    });
    object.position.z = -5;
    window.dougstooth = object;
    scene.add(object);
  });
}

function loadSecondDougstooth() {
  var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
  var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material;
    });
    object.position.z = -5;
    object.position.x = -5;
    window.secondDougstooth = object;
    secondScene.add(object);
  });
}
