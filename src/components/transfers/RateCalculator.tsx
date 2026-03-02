'use client'

import React, { useState } from 'react';
import { VEHICLE_RATES,VehicleType } from '@/src/lib/types';

interface CalculatorProps {
  defaultDistance: number;
  title: string;
}

export const RateCalculator: React.FC<CalculatorProps> = ({ defaultDistance, title }) => {
  const [vehicle, setVehicle] = useState<VehicleType>('Sedan');
  const [distance, setDistance] = useState<number>(defaultDistance);

  const calculateTotal = () => {
    const config = VEHICLE_RATES[vehicle];
    return config.base + (distance * config.perKm);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C5A059]/20">
      <h3 className="text-2xl font-instrument-serif mb-6">{title} Estimator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Select Vehicle</label>
          <select 
            className="w-full p-3 bg-[#FDFBF7] border rounded-md"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value as VehicleType)}
          >
            {Object.keys(VEHICLE_RATES).map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Estimated Distance (km)</label>
          <input 
            type="number" 
            className="w-full p-3 bg-[#FDFBF7] border rounded-md"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>

        <div className="pt-6 border-t border-dashed">
          <div className="flex justify-between items-end">
            <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Estimated Total</span>
            <span className="text-3xl font-instrument-serif text-[#C5A059]">
              KSh {calculateTotal().toLocaleString()}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 italic">
            *Final price includes fuel, driver, and tolls.
          </p>
        </div>
      </div>
    </div>
  );
};