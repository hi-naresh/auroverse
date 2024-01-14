import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// import { state } from '../../store'
import { useInView } from 'react-intersection-observer'
import Section2 from './pages/home/Section2';
import Section3 from './pages/home/Section3';
import Section4 from './pages/home/Section4';
import Section5 from './pages/home/Section5';


const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <HeroSection setSection={setSection} />
      <Section2 />
      <Section3 />
      <Section4 />
        <Section5 />
    </div>
  );
};

function HeroSection() {
    const {setSection} = props;
    const { ref, inView } = useInView({
      threshold: 0,
      rootMargin: '-100px 0px 0px 0px'
    })
  
    const fillVariants = {
      initial: {
        width: 0
      },
      animate: {
        width: '100%',
        transition: {
          duration: 2,
          ease: 'easeInOut'
        }
      }
    }
  
    const arrowVariants = {
      animate: {
        y: [0, 20, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }
    }
    const [text, setText] = useState('');
    const [renderCount, setRenderCount] = useState(0);
    const headerText = 'AURO VERSE.';
  
    useEffect(() => {
      let i = 0;
      let intervalId;
  
      if (inView) {
        intervalId = setInterval(() => {
          if (i <= headerText.length) {
            setText(headerText.substring(0, i));
            i++;
          } else {
            clearInterval(intervalId);
            setTimeout(() => {
              setRenderCount(renderCount + 1);
            }, 1200);
          }
        }, 200);
      }
  
      return () => {
        clearInterval(intervalId);
      }
    }, [inView, renderCount]);
  
    return (
      <div className='section1' ref={ref} style={{ height: '100vh', scrollSnapAlign: 'start', position: 'relative' }}>
        <motion.section
          initial={{ x: -1000, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          exit={{ x: 0, opacity: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.5 }}>
          <div className="section1-content">
            <motion.h2
              initial={{ x: -600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                damping: 5,
                stiffness: 10,
                restDelta: 0.001,
                duration: 0.3
              }}>
              Welcome To,
            </motion.h2>
          </div>
          <motion.h1 className="hero-header"
              initial={{ x: -600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                damping:10,
                stiffness: 10,
                restDelta: 0.01,
                duration: 1.0
              }}
              style={{ height: '200px',width:'200px' ,left:'3ex' }}
              >
              <motion.span
              initial={{ x: -600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
  
                transition={{
                  type: 'easeInOut',
                  damping: 10,
                  stiffness: 10,
                  delay: 0,
                  duration: 1.0,
                }}
              >
                {text}
              </motion.span>
            </motion.h1>
          <div className="scroll-text" style={{ position: 'relative',top:'5rem' }}>
            <p style={{ position: 'relative',fontStyle: 'italic' ,left:'39%'  }}>Scroll down for more</p>
            <motion.div
              className="fill"
              variants={fillVariants}
              animate={'animate'}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '5px',
                zIndex: 1,
              }}>
              <motion.span
                className="arrow"
                variants={arrowVariants}
                animate={inView ? 'animate' : 'initial'}
                style={{
                  position: 'absolute',
                  bottom: '60px',
                  left: '42.5%',
                  width: '24px',
                  height: '24px'
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24">
                  <path fill="white" d="M12.707 15.707l5-5a.999.999 0 0 0-1.414-1.414l-4.293 4.293-4.293-4.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0z" />
                </svg>
              </motion.span>
            </motion.div>
          </div>
        </motion.section>
      </div>
    )
  }
