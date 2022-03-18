import React, { useEffect, useRef } from 'react';
import scss from './index.module.scss';
import ymaps from 'ymaps';

export const Maps = () => {

  const mapContainer = useRef(null);

  async function addMap(): Promise<void> {
    try {
      const maps = await ymaps.load();
      new maps.Map(mapContainer.current, {
        center: [-8.369326, 115.166023],
        zoom: 8,
      });
    } catch (error) {
      console.error('Something went wrong', error);
    }
  }


  return (
        <div>
            <button onClick={() => addMap}>Add</button>
            <div ref={mapContainer}></div>
        </div>
  );
};

