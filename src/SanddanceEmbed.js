import React, { useEffect, useRef } from 'react';
import vegaEmbed from 'vega-embed';

const VegaVisualization = ({ spec }) => {
  const vegaContainerRef = useRef(null);

  useEffect(() => {
    if (spec) {
      vegaEmbed(vegaContainerRef.current, spec, { actions: false, width: '100%', height: '100%' })
        .then(result => {
          console.log('Vega embed result:', result);
        })
        .catch(error => {
          console.error('Error embedding Vega visualization:', error);
        });
    }
  }, [spec]);

  return <div ref={vegaContainerRef} />;
};

export default VegaVisualization;
