// components/BackToTop.js
import { useState, useEffect } from 'react';
import { UpArrow } from './Icon';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  // Show button when scrolled down 100px
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
          }}
        >
        <UpArrow className="flex items-center p-2 px-4
                rounded-lg text-lg
                dark:bg-light dark:text-dark 
              bg-dark text-light                
                md:p-2 md:px-3 md:text-base"/>
        </button>
      )}
    </>
  );
};

export default BackToTop;
