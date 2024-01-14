import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// import { state } from '../../store'

function Section2() {
  const transition = { type: '', duration: 0.2 }
  const config = {
    initial: { x: 100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: 100, opacity: 0, transition: { ...transition, delay: 0 } }
  }

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px'
  })

  return (
    <div ref={ref} style={{ height: '100vh', scrollSnapAlign: 'start' }}>
      {inView && (
        <motion.div key="page2-content" initial="initial" animate="animate" exit="exit" {...config}>
          <div className="section2 ">
            <motion.div
              key="title"
              initial={{ x: 1900, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                damping: 5,
                stiffness: 10,
                restDelta: 0.1,
                duration: 0.1
              }}>
              <h1>About Us</h1>
            </motion.div>
            <div className="section2-content">
              <motion.div
                key="p"
                initial={{ x: 1900, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  damping: 7,
                  stiffness: 10,
                  restDelta: 0.01,
                  duration: 0.3,
                  delay: 0.2,
                  delayChildren: 0
                }}>
                <p>
                "Auroverse" at Auro University is an immersive experience that transcends the traditional academic environment. Set to unfold in the second week of April 2023, it invites students from all backgrounds to participate, emphasizing inclusivity and accessibility with guidelines that ensure a smooth experience for everyone. The event promises a variety of contests, workshops, and learning opportunities, with the excitement of competition coupled with the spirit of collaboration. With a commitment to student engagement and development, Auroverse represents a hub where innovation, fun, and learning intersect to create an unforgettable adventure in academia.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Section2;
