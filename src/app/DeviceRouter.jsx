'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const RestaurantLanding = dynamic(() => import('./RestaurantLanding'));
const BetLanding = dynamic(() => import('./BetLanding'));

export default function DeviceRouter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  return isMobile ? <BetLanding /> : <RestaurantLanding />;
}
