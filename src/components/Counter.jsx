import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Counter = ({ count,para }) => {
  const countRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const countTo = parseInt(count, 10);
    const counter = countRef.current;

    gsap.to(counter, {
      duration: 1,
      innerHTML: countTo,
      ease: "none",
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          let countObj = { val: 0 };
          gsap.to(countObj, {
            duration: 1,
            val: countTo,
            onUpdate: () => {
              counter.innerHTML = Math.floor(countObj.val);
            }
          });
          gsap.to(counter, {
            duration: 1,
            transform: "translateY(0)",
            opacity: 1,
            ease: "power3.out"
          });
        }
      }
    });
  }, [count]);

  return (
    <div className="counter">
      <h1 className="count" ref={countRef}>0</h1>
      <p>{para}</p>
    </div>
  );
};

export default Counter