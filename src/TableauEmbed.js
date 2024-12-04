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

  return <div className="tableauEmbed" ref={ref}></div>;
};

export default TableauEmbed;