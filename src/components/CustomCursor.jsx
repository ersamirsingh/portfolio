import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);
  const requestRef = useRef();

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(touchSupport);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const animateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease/lerp factor
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        id="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        id="cursor-ring"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
    </>
  );
}
