import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function ContactText(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    <div style ={{display: "flex", justifyContent: "center"}}>
      <motion.p ref={ref} style ={{display: "flex", alignItems: "center"}}
                variants={{
                  hidden: { y: 25, opacity: 0, scale: 1 },
                  visible: { y: 0, opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.1, 0.4, 0.2, 1.0]
                }}>
                Reach out by e-mail if you want to connect! 
                You can also find me on{' '}
                  <a className='contact-linkedin-text'
                    href="https://www.linkedin.com/in/romain-trost-9a3955197/">Linkedin
                  </a> 
                {' '}if you prefer.
      </motion.p>         
    </div>

  );
}

export default ContactText;
