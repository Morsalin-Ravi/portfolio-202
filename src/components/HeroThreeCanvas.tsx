import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Pre-allocated math objects to avoid Garbage Collection in the render loop
const _targetRotation = new THREE.Euler();
const _currentRotation = new THREE.Euler();
const _mouse = new THREE.Vector2(0, 0);

export const HeroThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGlError, setHasWebGlError] = useState(false);
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect software WebGL
    let isSoftwareGl = false;
    try {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!gl) {
        setHasWebGlError(true);
        return;
      }
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    } catch {
      isSoftwareGl = true;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL init failed, using fallback:', e);
      setHasWebGlError(true);
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = false; // Soft ambient reflections preferred

    container.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    // Studio Environment reflection via RoomEnvironment + PMREMGenerator
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    pmremGenerator.dispose();

    // Studio 3-Point Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    const warmKeyLight = new THREE.DirectionalLight(0xffedd5, 2.5);
    warmKeyLight.position.set(5, 6, 6);
    scene.add(warmKeyLight);

    const electricFillLight = new THREE.DirectionalLight(0x38bdf8, 3.0);
    electricFillLight.position.set(-6, -3, 3);
    scene.add(electricFillLight);

    const violetRimLight = new THREE.DirectionalLight(0x818cf8, 2.2);
    violetRimLight.position.set(0, 5, -5);
    scene.add(violetRimLight);

    // Procedural Composite 3D Sculpture: Cinema Aperture / Kinetic Chrome Sculpture (Group of 5 Parts)
    const sculptureGroup = new THREE.Group();

    // Material 1: Liquid Chrome with Anisotropic Sheen
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xeeeeee,
      metalness: 0.96,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 1.0,
    });

    // Material 2: Deep Obsidian / Sapphire Crystal with subtle edge transmission
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1e3a8a,
      metalness: 0.1,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1.0,
      transmission: isSoftwareGl ? 0 : 0.65,
      ior: 1.6,
      thickness: 1.2,
    });

    // Material 3: Electric Blue Anodized Titanium
    const titaniumMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2563eb,
      metalness: 0.92,
      roughness: 0.22,
      clearcoat: 0.8,
    });

    // Part 1: Outer Torus Aperture Ring
    const torusGeom = new THREE.TorusGeometry(2.3, 0.18, 32, 100);
    const torusMesh = new THREE.Mesh(torusGeom, chromeMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    sculptureGroup.add(torusMesh);

    // Part 2: Inner Intersecting Gyroscope Ribbon
    const innerTorusGeom = new THREE.TorusGeometry(1.7, 0.12, 28, 80);
    const innerTorusMesh = new THREE.Mesh(innerTorusGeom, titaniumMaterial);
    innerTorusMesh.rotation.y = Math.PI / 4;
    sculptureGroup.add(innerTorusMesh);

    // Part 3: Central Cinematic Crystal Core (Icosahedron)
    const coreGeom = new THREE.IcosahedronGeometry(1.05, 1);
    const coreMesh = new THREE.Mesh(coreGeom, glassMaterial);
    sculptureGroup.add(coreMesh);

    // Part 4: Floating Kinetic Orbit Satellites (3 small spheres around rings)
    const satGroup = new THREE.Group();
    const satGeom = new THREE.SphereGeometry(0.18, 24, 24);
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const satMesh = new THREE.Mesh(satGeom, chromeMaterial);
      satMesh.position.set(Math.cos(angle) * 2.8, Math.sin(angle) * 1.5, Math.sin(angle * 2) * 0.8);
      satGroup.add(satMesh);
    }
    sculptureGroup.add(satGroup);

    // Part 5: Framing Camera Shutter Blades (procedural angled thin boxes)
    const bladeGeom = new THREE.BoxGeometry(0.08, 0.9, 0.02);
    const bladeGroup = new THREE.Group();
    for (let b = 0; b < 6; b++) {
      const bMesh = new THREE.Mesh(bladeGeom, titaniumMaterial);
      const bAngle = (b / 6) * Math.PI * 2;
      bMesh.position.set(Math.cos(bAngle) * 1.35, Math.sin(bAngle) * 1.35, 0);
      bMesh.rotation.z = bAngle + 0.4;
      bladeGroup.add(bMesh);
    }
    sculptureGroup.add(bladeGroup);

    scene.add(sculptureGroup);

    // Pre-warm shaders
    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    // Pointer event tracking for subtle mouse-tilt interaction
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      _mouse.x = Math.max(-1, Math.min(1, x));
      _mouse.y = Math.max(-1, Math.min(1, y));
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop with smooth damping
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Natural continuous organic floating motion
        sculptureGroup.rotation.y += delta * 0.28;
        sculptureGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.15;
        
        // Satellites orbiting around the sculpture
        satGroup.rotation.z += delta * 0.4;
        satGroup.rotation.y = Math.cos(elapsedTime * 0.3) * 0.3;

        // Shutter blades subtle breathing
        bladeGroup.rotation.z -= delta * 0.15;

        // Core gentle wobble
        coreMesh.rotation.y -= delta * 0.4;
        coreMesh.rotation.z = Math.sin(elapsedTime * 0.8) * 0.2;

        // Subtle mouse responsive tilt with exponential damping
        _targetRotation.y = _mouse.x * 0.45;
        _targetRotation.x = -_mouse.y * 0.35;

        _currentRotation.y = THREE.MathUtils.damp(_currentRotation.y, _targetRotation.y, 3, delta);
        _currentRotation.x = THREE.MathUtils.damp(_currentRotation.x, _targetRotation.x, 3, delta);

        camera.position.x = _currentRotation.y * 1.2;
        camera.position.y = _currentRotation.x * 1.2;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      // Clean disposal
      torusGeom.dispose();
      innerTorusGeom.dispose();
      coreGeom.dispose();
      satGeom.dispose();
      bladeGeom.dispose();

      chromeMaterial.dispose();
      glassMaterial.dispose();
      titaniumMaterial.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (hasWebGlError) {
    return (
      <div className="w-full h-full min-h-[380px] flex items-center justify-center p-8 bg-gradient-to-br from-zinc-950 to-blue-950/20 border border-zinc-800/60 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
        <div className="relative text-center space-y-3 max-w-sm">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900/80 border border-zinc-700/60 flex items-center justify-center text-blue-400">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-mono">Creative Spatial Center</p>
          <p className="text-sm text-zinc-300">Precision 4K post-production & cinematic motion design engine.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[520px] flex items-center justify-center select-none">
      {/* Background ambient lighting glow */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none -bottom-10" />
      
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" 
        style={{ touchAction: 'none' }}
        aria-label="Interactive 3D Kinetic Aperture Sculpture"
      />

      {/* Subtle Spec Label */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono text-zinc-500 tracking-wider">
        <span>INTERACTIVE 3D ARTIFACT</span>
        <span aria-hidden="true">·</span>
        <span>GLTF / PBR REFLECTIONS</span>
      </div>
    </div>
  );
};
