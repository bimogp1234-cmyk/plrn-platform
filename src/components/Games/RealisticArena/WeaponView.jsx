import React, { useRef, useEffect } from "react"; // 💥 أضف useEffect
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber"; // 💥 أضف useThree
import * as THREE from "three";

export default function WeaponView({ shooting }) {
  const { scene } = useGLTF(
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
  );
  const groupRef = useRef(); // 💥 مرجع للمجموعة الخارجية (لإلحاقها بالكاميرا)
  const gunRef = useRef(); // 💥 مرجع للبندقية نفسها (للاهتزاز والارتداد)
  const recoil = useRef(0);
  const muzzleLight = useRef();

  const { camera } = useThree(); // 💥 الوصول إلى الكاميرا

  // 💥 الكود الجديد: إلحاق البندقية بالكاميرا
  useEffect(() => {
    if (groupRef.current && camera) {
      // قم بإضافة مجموعة البندقية كـ "طفل" للكاميرا
      camera.add(groupRef.current);
    }
    // دالة تنظيف لإزالة البندقية عند مغادرة المكون
    return () => {
      if (groupRef.current && camera) {
        camera.remove(groupRef.current);
      }
    };
  }, [camera]);

  useFrame((state, delta) => {
    // حركة السلاح (اهتزاز بسيط) - مستمر حتى لو لم يتحرك اللاعب
    if (gunRef.current) {
      const t = state.clock.getElapsedTime();
      const sway = Math.sin(t * 2) * 0.003;
      gunRef.current.rotation.x = -0.1 + Math.sin(t * 1.5) * 0.02;
      gunRef.current.rotation.y = sway;
      gunRef.current.position.y = -1.3 + Math.sin(t * 3) * 0.005;
    }

    // مؤثر ارتداد عند إطلاق النار
    if (shooting && gunRef.current) {
      recoil.current = THREE.MathUtils.lerp(recoil.current, 0.05, 0.2);
      gunRef.current.position.z = -0.5 - recoil.current;
      muzzleLight.current.intensity = 3.0;
    } else if (gunRef.current) {
      recoil.current = THREE.MathUtils.lerp(recoil.current, 0, 0.1);
      gunRef.current.position.z = -0.5;
      muzzleLight.current.intensity = 0;
    }
  });

  return (
    // 💥 نستخدم groupRef للمجموعة الخارجية
    // ونستخدم gunRef للـ primitive الداخلي (كما في الكود الأصلي)
    // 💡 ملاحظة: بما أن المجموعة تم إلحاقها بالكاميرا، فهذا الموضع هو موضعها "بالنسبة" للكاميرا.
    <group ref={groupRef} position={[3, 0, 0]} rotation={[0, Math.PI, 0]}>
      {/* تأكد من ضبط scale هنا - القيمة 0.05 هي قيمة تجريبية */}
      <primitive ref={gunRef} object={scene} scale={5.0} />
      {/* فلاش فوهة إطلاق */}
      <pointLight
        ref={muzzleLight}
        position={[0.3, -1.4, -1.8]}
        intensity={0}
        color="#ffcc66"
        distance={3}
      />
    </group>
  );
}

useGLTF.preload("/models/gun.glb");
