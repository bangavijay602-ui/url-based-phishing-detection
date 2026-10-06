import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CyberBackground3DProps {
  threatMode?: boolean; // Changes ambient color when threat is active
}

export const CyberBackground3D: React.FC<CyberBackground3DProps> = ({ threatMode = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const threatRef = useRef(threatMode);
  threatRef.current = threatMode;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070d, 0.002);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 240;
    camera.position.y = 20;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Cyber Network Nodes & Connecting Lines
    const particleCount = prefersReducedMotion ? 40 : 90;
    const maxDistance = 55;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    const bounds = { x: 260, y: 160, z: 120 };

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * bounds.x;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * bounds.y + 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * bounds.z;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.18,
        y: (Math.random() - 0.5) * 0.18,
        z: (Math.random() - 0.5) * 0.12
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 2.8,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    worldGroup.add(particles);

    // Connecting line segments
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    const lineColors = new Float32Array(particleCount * particleCount * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    worldGroup.add(lines);

    // 2. Holographic Rotating Cyber Geometric Polyhedron
    const polyGeometry = new THREE.IcosahedronGeometry(36, 1);
    const polyWireframe = new THREE.WireframeGeometry(polyGeometry);
    const polyMaterial = new THREE.LineBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.18
    });
    const hologram = new THREE.LineSegments(polyWireframe, polyMaterial);
    hologram.position.set(0, 0, -40);
    worldGroup.add(hologram);

    // Inner core sphere
    const coreGeometry = new THREE.OctahedronGeometry(18, 0);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.28
    });
    const innerCore = new THREE.LineSegments(coreWireframe, coreMaterial);
    innerCore.position.set(0, 0, -40);
    worldGroup.add(innerCore);

    // 3. Subtle Cyber Grid Floor
    const gridHelper = new THREE.GridHelper(500, 36, 0x00f0ff, 0x1e293b);
    gridHelper.position.y = -80;
    // Set material opacity
    const gridMat = gridHelper.material as THREE.Material;
    gridMat.transparent = true;
    gridMat.opacity = 0.12;
    worldGroup.add(gridHelper);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.04;
      mouseY = (event.clientY - windowHalfY) * 0.04;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window Resize Handler
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      worldGroup.rotation.y = targetX * 0.015;
      worldGroup.rotation.x = targetY * 0.01;

      // Rotate geometric hologram
      if (!prefersReducedMotion) {
        hologram.rotation.y += 0.003;
        hologram.rotation.x += 0.0018;
        innerCore.rotation.y -= 0.005;
        innerCore.rotation.z += 0.0025;
      }

      // Dynamic color shift if threat detected
      const isThreat = threatRef.current;
      const targetParticleColor = isThreat ? new THREE.Color(0xff2a55) : new THREE.Color(0x00f0ff);
      const targetPolyColor = isThreat ? new THREE.Color(0xff0044) : new THREE.Color(0x0088ff);

      particleMaterial.color.lerp(targetParticleColor, 0.05);
      polyMaterial.color.lerp(targetPolyColor, 0.05);

      // Animate particles and construct lines
      const positions = particleGeometry.attributes.position.array as Float32Array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        if (!prefersReducedMotion) {
          positions[i * 3] += particleVelocities[i].x;
          positions[i * 3 + 1] += particleVelocities[i].y;
          positions[i * 3 + 2] += particleVelocities[i].z;

          // Boundary bounce
          if (Math.abs(positions[i * 3]) > bounds.x / 2) particleVelocities[i].x *= -1;
          if (Math.abs(positions[i * 3 + 1] - 10) > bounds.y / 2) particleVelocities[i].y *= -1;
          if (Math.abs(positions[i * 3 + 2]) > bounds.z / 2) particleVelocities[i].z *= -1;
        }

        // Distance check for connecting lines
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistance * maxDistance) {
            const alpha = 1.0 - Math.sqrt(distSq) / maxDistance;

            linePositions[lineIndex * 6] = positions[i * 3];
            linePositions[lineIndex * 6 + 1] = positions[i * 3 + 1];
            linePositions[lineIndex * 6 + 2] = positions[i * 3 + 2];

            linePositions[lineIndex * 6 + 3] = positions[j * 3];
            linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1];
            linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2];

            // Color based on threat mode
            const r = isThreat ? 1.0 : 0.0;
            const g = isThreat ? 0.15 : 0.94;
            const b = isThreat ? 0.33 : 1.0;

            lineColors[lineIndex * 6] = r * alpha;
            lineColors[lineIndex * 6 + 1] = g * alpha;
            lineColors[lineIndex * 6 + 2] = b * alpha;

            lineColors[lineIndex * 6 + 3] = r * alpha;
            lineColors[lineIndex * 6 + 4] = g * alpha;
            lineColors[lineIndex * 6 + 5] = b * alpha;

            lineIndex++;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex * 2);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      polyGeometry.dispose();
      polyMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
