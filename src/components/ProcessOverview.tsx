import React, { useEffect, useRef, useState } from 'react';
import { Upload, Calendar, Gift, Clock } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

export function ProcessOverview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  // Observer to detect when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  // Canvas particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size based on parent container
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = container.offsetWidth * devicePixelRatio;
        canvas.height = container.offsetHeight * devicePixelRatio;
        canvas.style.width = `${container.offsetWidth}px`;
        canvas.style.height = `${container.offsetHeight}px`;
        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };

    resizeCanvas();

    // Create particles with responsive count based on screen size
    const createParticles = () => {
      const width = canvas.width;
      const height = canvas.height;
      const particleCount = Math.min(50, Math.max(15, Math.floor(width / 30)));

      const particles: Array<{
        x: number;
        y: number;
        radius: number;
        speedX: number;
        speedY: number;
        opacity: number;
      }> = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }

      return particles;
    };

    let particles = createParticles();
    let animationFrameId: number;

    const drawParticles = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Only animate when in view for performance
      if (isInView) {
        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 157, 120, ${particle.opacity})`;
          ctx.fill();

          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Wrap around edges
          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;
        });

        // Draw connecting lines between nearby particles with distance limitation
        particles.forEach((p1, i) => {
          particles.slice(i + 1).forEach((p2) => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = Math.min(100, width * 0.1);

            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(180, 157, 120, ${0.1 * (1 - distance / maxDistance)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        });
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    const handleResize = () => {
      resizeCanvas();
      particles = createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isInView]);

  const steps = [
    {
      title: 'Upload & Lock Data',
      icon: <Upload className="h-6 w-6 text-sepia-600" />,
      description: 'Securely upload your memories and lock them with encryption.',
    },
    {
      title: 'Set Reveal Date',
      icon: <Calendar className="h-6 w-6 text-sepia-600" />,
      description: 'Choose a future date for when your time capsule will be unlocked.',
    },
    {
      title: 'Earn Rewards',
      icon: <Gift className="h-6 w-6 text-sepia-600" />,
      description: 'Accumulate points as you preserve your memories over time.',
    },
    {
      title: 'Unlock & Rediscover',
      icon: <Clock className="h-6 w-6 text-sepia-600" />,
      description: 'Revisit your memories and experience the journey all over again.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative py-16 sm:py-20 overflow-hidden"
      id="process-overview"
    >
      {/* Background canvas with improved performance */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />

      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-vintage-50/80 via-transparent to-vintage-50/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl font-bold text-vintage-900 sm:text-4xl lg:text-5xl tracking-tight">
            Your Time Capsule Journey
          </h2>
          <motion.div
            className="mt-2 mx-auto w-20 sm:w-24 h-1 bg-sepia-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-vintage-600 leading-relaxed">
            Follow these steps to secure and unlock your cherished memories.
          </p>
        </motion.div>

        {/* Steps container with responsive layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-6 lg:gap-x-8"
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center px-4 relative"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="flex items-center justify-center h-16 w-16 rounded-full bg-sepia-100 mb-6 shadow-md"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-sepia-600">{step.icon}</div>
                </motion.div>
                <h4 className="text-xl font-semibold text-vintage-900 mb-3">{step.title}</h4>
                <p className="text-vintage-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>

                {/* Desktop & Tablet: Horizontal arrow connecting to the next step */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 w-20">
                    <motion.svg
                      width="100"
                      height="50"
                      viewBox="0 0 100 50"
                      fill="none"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
                      className="text-sepia-500"
                    >
                      <motion.path
                        d="M5,25 C20,5 50,45 85,25"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ delay: 0.3 * (index + 1), duration: 1, ease: 'easeInOut' }}
                      />
                      <motion.path
                        d="M75,18 L85,25 L75,32"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3 * (index + 1) + 1, duration: 0.3 }}
                      />
                    </motion.svg>
                  </div>
                )}

                {/* Tablet only: Horizontal arrow with adjusted spacing */}
                {index !== steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden sm:block lg:hidden absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-10">
                    <motion.svg
                      width="40"
                      height="30"
                      viewBox="0 0 40 30"
                      fill="none"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
                      className="text-sepia-500"
                    >
                      <motion.path
                        d="M5,15 L32,15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="3 3"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ delay: 0.3 * (index + 1), duration: 0.8, ease: 'easeInOut' }}
                      />
                      <motion.path
                        d="M25,8 L32,15 L25,22"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3 * (index + 1) + 0.8, duration: 0.3 }}
                      />
                    </motion.svg>
                  </div>
                )}

                {/* Mobile & Tablet: Vertical arrow between steps */}
                {index !== steps.length - 1 && ((index % 2 === 1 && !window.matchMedia("(min-width: 1024px)").matches) || window.matchMedia("(max-width: 639px)").matches) && (
                  <div className="block sm:hidden sm:even:block lg:hidden w-full py-4">
                    <motion.svg
                      className="mx-auto"
                      width="30"
                      height="40"
                      viewBox="0 0 30 40"
                      fill="none"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
                    >
                      <motion.path
                        d="M15,5 L15,32"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="3 3"
                        className="text-sepia-500"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ delay: 0.3 * (index + 1), duration: 0.8, ease: 'easeInOut' }}
                      />
                      <motion.path
                        d="M8,25 L15,32 L22,25"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sepia-500"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3 * (index + 1) + 0.8, duration: 0.3 }}
                      />
                    </motion.svg>
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.button
            className="px-6 py-3 sm:px-8 sm:py-4 bg-sepia-600 hover:bg-sepia-700 text-white rounded-lg shadow-lg text-base sm:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-sepia-500 focus:ring-offset-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Start Your Journey
          </motion.button>
          <p className="mt-4 text-vintage-600 text-sm sm:text-base">
            Begin preserving your memories today
          </p>
        </motion.div>
      </div>

      {/* Enhanced responsive bottom spacing */}
      <div className="h-8 md:h-0"></div>

      {/* Floating decorative elements with improved responsiveness */}
      <div className="absolute top-20 left-4 lg:left-10 w-16 lg:w-24 h-16 lg:h-24 bg-sepia-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-4 lg:right-10 w-20 lg:w-32 h-20 lg:h-32 bg-sepia-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-12 lg:w-16 h-12 lg:h-16 bg-sepia-300 rounded-full opacity-10 blur-lg"></div>

      {/* Accessible timeline indicator */}
      <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2" role="navigation" aria-label="Step indicators">
          {steps.map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-sepia-400"
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0.5 }}
              transition={{ delay: 0.2 * i, duration: 0.4 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Enhanced AnimatedCursor component with better performance
export const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!cursorRef.current) return;
    const cursor = cursorRef.current;

    // Performance optimization - use requestAnimationFrame
    let cursorX = 0;
    let cursorY = 0;
    let requestId: number;

    const moveCursor = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;

      // Only show cursor on desktop
      if (window.innerWidth < 1024) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const updateCursorPosition = () => {
      if (cursor) {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      }
      requestId = requestAnimationFrame(updateCursorPosition);
    };

    window.addEventListener('mousemove', moveCursor);
    requestId = requestAnimationFrame(updateCursorPosition);

    // Handle cursor visibility when mouse leaves window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (window.innerWidth >= 1024) {
        setIsVisible(true);
      }
    };

    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Handle resize events
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 mix-blend-difference ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-6 h-6 rounded-full border-2 border-sepia-400"></div>
    </motion.div>
  );
};

// Export both components for flexible usage
export function EnhancedProcessOverview() {
  return (
    <>
      <AnimatedCursor />
      <ProcessOverview />
    </>
  );
}

export default EnhancedProcessOverview;