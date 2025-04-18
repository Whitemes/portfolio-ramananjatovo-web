// app/merci/page.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import * as THREE from 'three'
import styles from './page.module.css'

export default function MerciPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    // ─── Basic Three.js Setup ─────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a192f)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    // ─── Lights ───────────────────────────────────────────────────────
    const pointLight = new THREE.PointLight(0x64ffda, 1)
    pointLight.position.set(5, 5, 5)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(pointLight, ambientLight)

    // ─── Particles ────────────────────────────────────────────────────
    const particlesCount = 1000
    const geo = new THREE.BufferGeometry()
    const posArr = new Float32Array(particlesCount * 3)
    const scaleArr = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount; i++) {
      posArr[i * 3] = (Math.random() - 0.5) * 100
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 100
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 100
      scaleArr[i] = Math.random()
    }

    geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3))
    geo.setAttribute('scale', new THREE.BufferAttribute(scaleArr, 1))

    const material = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x64ffda,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(geo, material)
    scene.add(particlesMesh)

    // ─── Torus ────────────────────────────────────────────────────────
    const torusGeo = new THREE.TorusGeometry(10, 3, 16, 100)
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x64ffda,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    scene.add(torus)

    // ─── Animate ──────────────────────────────────────────────────────
    function animate() {
      requestAnimationFrame(animate)
      torus.rotation.x += 0.01
      torus.rotation.y += 0.005
      torus.rotation.z += 0.01
      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      // smooth camera follow
      camera.position.x += (mouse.current.x - camera.position.x) * 0.05
      camera.position.y += (-mouse.current.y - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    // ─── Resize ───────────────────────────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // ─── Mouse / Touch ───────────────────────────────────────────────
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let x = 0, y = 0
      if (e instanceof MouseEvent) {
        x = (e.clientX - window.innerWidth / 2) * 0.01
        y = (e.clientY - window.innerHeight / 2) * 0.01
      } else if (e.touches.length === 1) {
        x = (e.touches[0].clientX - window.innerWidth / 2) * 0.01
        y = (e.touches[0].clientY - window.innerHeight / 2) * 0.01
      }
      mouse.current = { x, y }
    }
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('touchmove', handleMove)

    // ─── Cleanup ──────────────────────────────────────────────────────
    return () => {
      renderer.dispose()
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('touchmove', handleMove)
    }
  }, [])

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.content}>
        <h1 className={styles.thankYou}>Merci ! 🎉</h1>
        <p className={styles.message}>
          Votre message a bien été envoyé. Je vous remercie pour votre intérêt
          et je vous répondrai dans les plus brefs délais.
        </p>
        <Link href="/" className={styles.ctaButton}>
          Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}
