import React, { useEffect, useRef, useState } from 'react';
import scss from './index.module.scss';
import ymaps from 'ymaps';
import { Button, ETypeButton } from '../button';

const MyMaps = () => {
  const mapContainer = useRef(null);
  const [downloaded, setDownloaded] = useState(false);

  const mapRef = useRef(null);

  const myMarks = [
    { city: 'п.Щельяюр', address: [65.325869, 53.417911] },
    { city: 'д.Вертеп', address: [65.298888, 53.204001] },
    { city: 'с.Краснобор', address: [65.294896, 53.285252] },
    { city: 'д.Диюр', address: [65.277608, 53.359888] },
  ];

  useEffect(() => {
    return () => {
      mapRef.current.destroy();
    };
  }, []);


  useEffect(() => {
    if (!downloaded) {
      ymaps
        .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
        .then(maps => {
          mapRef.current = new maps.Map(mapContainer.current, {
            center: [65.325869, 53.417911],
            zoom: 15,
            controls: ['zoomControl'],
            behaviors: ['drag'],
          });

          const myCollection = new maps.GeoObjectCollection({}, {
            preset: 'islands#redIcon',
          });

          myMarks.map(mark => {
            myCollection.add(new maps.Placemark(mark.address));
          });

          mapRef.current.geoObjects.add(myCollection);
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));
    }
    setDownloaded(true);


  }, [downloaded]);

  return (
        <div>
          <div>
            {myMarks.map(mark => <Button onClick={() => {
              mapRef.current.setCenter(mark.address);
            }} className={scss.button} type={ETypeButton.gray} key={mark.address[0]}>{mark.city}</Button>)}
          </div>
          <div ref={mapContainer} className={scss.container}></div>
        </div>
  );
};

export const Maps = React.memo(MyMaps);

