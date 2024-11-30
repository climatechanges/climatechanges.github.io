import React, { useEffect, useRef } from 'react';

const TableauEmbed = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    const { tableau } = window;
    const viz = new tableau.Viz(ref.current, url);
    return () => {
      viz.dispose();
    };
  }, [url]);

  return <div ref={ref} style={{ width: '100%', height: '600px' }}></div>;
};

export default TableauEmbed;