import React, { useEffect, useRef } from 'react';
import scss from './index.module.scss';
import ymaps from 'ymaps';
import { Button, ETypeButton } from '../button';
import { myMarks } from '../../server/marks';

const MyMaps = () => {
  const mapContainer = useRef(null);
  const mapRef = useRef<any>(null);


  const handleClick = (address: number[]) => () => mapRef.current?.setCenter(address);

  useEffect(() => {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      .then((maps: any) => {
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
      });

    return () => {
      mapRef.current.destroy();
    };
  }, []);

  return (
        <div>
          <div>
            {myMarks.map(mark =>
                <Button
                    onClick={handleClick(mark.address)}
                    className={scss.button}
                    type={ETypeButton.gray}
                    key={mark.address[0]}
                >
                    {mark.city}
                </Button>,
            )}
          </div>
          <div ref={mapContainer} className={scss.container}></div>
        </div>
  );
};

export const Maps = React.memo(MyMaps);

