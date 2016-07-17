function setupComposers() {
	var clearPass = new THREE.ClearPass();
	var clearMaskPass = new THREE.ClearMaskPass();

	var maskPass1 = new THREE.MaskPass( thirdScene, camera );
	var maskPass2 = new THREE.MaskPass( fourthScene, secondCamera );
	
	var renderedTexturePass = new THREE.TexturePass( myRenderedTexture.texture );

	var outputPass = new THREE.ShaderPass( THREE.CopyShader );
	outputPass.renderToScreen = true;

	var renderPass1 = new THREE.RenderPass( scene, camera );
	var renderPass2 = new THREE.RenderPass( secondScene, secondCamera);

	var parameters = {
		minFilter: THREE.LinearFilter,
		magFilter: THREE.LinearFilter,
		format: THREE.RGBFormat,
		stencilBuffer: true
	};
  	renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, parameters );

  	composer1 = new THREE.EffectComposer(renderer, renderTarget);
  	composer1.addPass(renderPass1);
	composer1.addPass(maskPass1);
	composer1.addPass(renderedTexturePass);
	composer1.addPass(clearMaskPass);
	composer1.addPass(outputPass);

	composer2 = new THREE.EffectComposer(renderer, renderTarget);
	composer2.addPass(renderPass2);
	composer2.addPass(maskPass2);
	composer2.addPass(renderedTexturePass);
	composer2.addPass(clearMaskPass);
	composer2.addPass(outputPass);
}