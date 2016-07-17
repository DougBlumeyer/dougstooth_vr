function setupContainerRendererAndRaycaster() {
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

  renderer = new THREE.WebGLRenderer({
  	antialias: true,
  	// alpha: true,
  	// autoClear: true
  });
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

	var clearPass = new THREE.ClearPass();
	var clearMaskPass = new THREE.ClearMaskPass();
	// clearMaskPass.renderToScreen = true;

	var maskPass1 = new THREE.MaskPass( thirdScene, camera ); //this is why when switch to renderPass2 the portal is stuck to screen, b/c this i relative to the first scene camera, not the second
	// var maskPass2 = new THREE.MaskPass( fourthScene, camera );
	var maskPass2 = new THREE.MaskPass( fourthScene, secondCamera );
	// var texture1 = new THREE.TextureLoader().load( renderedTexture );
	// var texture2 = new THREE.TextureLoader().load( 'assets/pano_4k.jpg' );
	console.log(myRenderedTexture.texture)
	var renderedTexturePass = new THREE.TexturePass( myRenderedTexture.texture );
	// var texturePass1 = new THREE.TexturePass( texture1 );

	// var texturePass2 = new THREE.TexturePass( texture2 );

	var outputPass = new THREE.ShaderPass( THREE.CopyShader );
	outputPass.renderToScreen = true;

	var renderPass1 = new THREE.RenderPass( scene, camera );
	// renderPass.renderToScreen = true;

	var renderPass2 = new THREE.RenderPass( secondScene, secondCamera);

	var parameters = {
		minFilter: THREE.LinearFilter,
		magFilter: THREE.LinearFilter,
		format: THREE.RGBFormat,
		stencilBuffer: true
	};
	// console.log(parameters)
  	renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, parameters );

  	composer1 = new THREE.EffectComposer( renderer, renderTarget );
  	composer1.addPass( renderPass1 );
  	// composer.addPass( clearPass ); //############################################CONSIDER THIS
	composer1.addPass( maskPass1 );
	// composer.addPass( texturePass1 );
	// composer.addPass( renderPass2);
	composer1.addPass(renderedTexturePass);
	composer1.addPass( clearMaskPass );
	// composer.addPass( maskPass2 );
	// composer.addPass( texturePass2 );
	// composer.addPass( clearMaskPass );
	composer1.addPass( outputPass );


	// // composer.addPass(texturePass1);
	// // composer.addPass(outputPass);

		// composer.addPass(renderedTexturePass);
		// composer.addPass(outputPass);


		composer2 = new THREE.EffectComposer( renderer, renderTarget);
		composer2.addPass( renderPass2)
		composer2.addPass(maskPass2)
		composer2.addPass(renderedTexturePass)
		composer2.addPass(clearMaskPass)
		composer2.addPass(outputPass)
}
