import React, { useEffect, useRef, useState } from 'react';

const TableauEmbed = ({ url }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const { tableau } = window;
      const viz = new tableau.Viz(ref.current, url);
      return () => {
        viz.dispose();
      };
    }
  }, [isInView, url]);

  return <div className="tableauEmbed" ref={ref} style={{ width: '100%', height: '600px' }}></div>;
};

export default TableauEmbed;