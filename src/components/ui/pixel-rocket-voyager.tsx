import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';

// --- Three.js Canvas Component ---
export const PixelVoyagerCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 25;
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    // --- Pixel Rocket ---
    const rocket = new THREE.Group();
    const pixelSize = 0.2;
    const pixelGeo = new THREE.BoxGeometry(pixelSize, pixelSize, pixelSize);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x00aaff, flatShading: true });
    const wingMat = new THREE.MeshStandardMaterial({ color: 0x0055ff, flatShading: true });
    const cockpitMat = new THREE.MeshStandardMaterial({ color: 0x87ceeb, emissive: 0x87ceeb, emissiveIntensity: 0.5 });

    for (let y = -4; y < 5; y++) for (let x = -2; x < 3; x++) {
      if (Math.abs(x) === 2 && y > 1) continue;
      const pixel = new THREE.Mesh(pixelGeo, bodyMat);
      pixel.position.set(x * pixelSize, y * pixelSize, 0);
      rocket.add(pixel);
    }
    for (let y = -3; y < -1; y++) for (let x = -4; x < -2; x++) {
      const pixelL = new THREE.Mesh(pixelGeo, wingMat);
      pixelL.position.set(x * pixelSize, y * pixelSize, 0);
      rocket.add(pixelL);
      const pixelR = new THREE.Mesh(pixelGeo, wingMat);
      pixelR.position.set(-x * pixelSize, y * pixelSize, 0);
      rocket.add(pixelR);
    }
    const cockpit = new THREE.Mesh(pixelGeo, cockpitMat);
    cockpit.position.set(0, 3 * pixelSize, pixelSize);
    rocket.add(cockpit);
    scene.add(rocket);

    // --- Rocket Trail (Object Pooling for Performance) ---
    const trailPool: THREE.Mesh[] = [];
    let trailIndex = 0;
    const trailSize = 200;
    const trailGeo = new THREE.BoxGeometry(pixelSize * 1.5, pixelSize * 1.5, pixelSize * 1.5);
    for (let i = 0; i < trailSize; i++) {
      const trailMat = new THREE.MeshBasicMaterial({ color: Math.random() > 0.5 ? 0xff00ff : 0xee82ee });
      const particle = new THREE.Mesh(trailGeo, trailMat);
      particle.visible = false;
      scene.add(particle);
      trailPool.push(particle);
    }


    // Lerp target for smooth following
    const targetPos = new THREE.Vector3(0, 0, 0);
    const rocketBottom = 4 * pixelSize; // exact bottom of rocket body

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animFrameId: number;
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Smooth lerp toward cursor — natural inertia feel
      targetPos.set(mouse.x * 15, mouse.y * 10, 0);
      rocket.position.lerp(targetPos, 0.14);

      // Lerp tilt for smooth banking
      rocket.rotation.y += (mouse.x * 0.3 - rocket.rotation.y) * 0.1;
      rocket.rotation.x += (-mouse.y * 0.2 - rocket.rotation.x) * 0.1;

      // Spawn 2 trail particles per frame — no gap, dense trail
      for (let t = 0; t < 2; t++) {
        const particle = trailPool[trailIndex] as THREE.Mesh & { life: number };
        particle.position.set(
          rocket.position.x + (Math.random() - 0.5) * 0.2,
          rocket.position.y - rocketBottom,
          rocket.position.z
        );
        particle.scale.setScalar(1);
        particle.visible = true;
        particle.life = 1;
        trailIndex = (trailIndex + 1) % trailSize;
      }

      trailPool.forEach(p => {
        const particle = p as THREE.Mesh & { life: number };
        if (particle.visible) {
          particle.life -= delta * 2;
          particle.scale.setScalar(Math.max(0, particle.life));
          if (particle.life <= 0) particle.visible = false;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

// --- Navigation Component ---
const HeroNav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
      className="absolute top-0 left-0 right-0 z-20 p-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-cyan-500 dark:text-cyan-300">🚀</span>
          <span className="text-xl font-bold text-slate-800 dark:text-white">Voyager</span>
        </div>
      </div>
    </motion.nav>
  );
};

// --- Main Hero Component ---
export const PixelRocketHero = () => {
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    textControls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i as number) * 0.05 + 1.5,
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }));
    buttonControls.start({
      opacity: 1,
      transition: { delay: 2.5, duration: 1 }
    });

    return () => {
      document.head.removeChild(link);
    };
  }, [textControls, buttonControls]);

  const headline = "To the Moon!";

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-sky-100 dark:bg-[#1a0033]" style={{ fontFamily: "'Press Start 2P', system-ui" }}>
      <PixelVoyagerCanvas />
      <HeroNav />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold tracking-tighter text-slate-900 dark:text-white md:text-7xl" style={{ textShadow: '3px 3px 0px #ff00ff' }}>
          {headline.split("").map((char, i) => (
            <motion.span key={i} custom={i} initial={{ opacity: 0, y: 50 }} animate={textControls} style={{ display: 'inline-block' }}>
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          custom={headline.length}
          initial={{ opacity: 0, y: 30 }}
          animate={textControls}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
        >
          Embark on a new cosmic journey. Explore decentralized galaxies and claim your stake in the pixelated universe.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={buttonControls} className="mt-10">
          <button className="rounded-none border-2 border-slate-800 bg-white px-8 py-4 font-semibold text-slate-800 transition-all hover:bg-slate-200 dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black">
            Launch Mission
          </button>
        </motion.div>
      </div>
    </div>
  );
};
