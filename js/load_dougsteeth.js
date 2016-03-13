function loadDougsteeth() {
  //SCENE
  var material = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material;
    });
    object.position.set(-4,0,0)
    // window.dougstooth = object;
    scene.add(object);
  });

  var material2 = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  // var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material2;
    });
    object.position.set(4,0,0)
    // window.dougstooth = object;
    scene.add(object);
  });

  var material3 = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  // var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material3;
    });
    object.position.set(-4,0,-8)
    // window.dougstooth = object;
    scene.add(object);
  });

  var material4 = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  // var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material4;
    });
    object.position.set(4,0,-8)
    // window.dougstooth = object;
    scene.add(object);
  });


  var material5 = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  // var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material5;
    });
    object.position.set(-4,0,-7)
    // window.dougstooth = object;
    secondScene.add(object);
  });

  var material6 = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  // var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material6;
    });
    object.position.set(4,0,-7)
    // window.dougstooth = object;
    secondScene.add(object);
  });

  var material7 = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  // var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material7;
    });
    object.position.set(-4,0,-15)
    // window.dougstooth = object;
    secondScene.add(object);
  });

  var material8 = new THREE.MeshLambertMaterial({color: Math.random() * 0x888888 + 0x888888});
  // var loader = new THREE.OBJLoader(new THREE.LoadingManager());
  loader.load('assets/dougstooth.obj', function(object) {
    object.traverse(function(child) {
      if (child instanceof THREE.Mesh) child.material = material8;
    });
    object.position.set(4,0,-15)
    // window.dougstooth = object;
    secondScene.add(object);
  });
}
