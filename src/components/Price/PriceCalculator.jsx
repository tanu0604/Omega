import React from 'react';
import { Button } from '../ui/Button';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Card } from '../Card/Card';
import { CardContent } from '../Card/CardContent';
import { CardHeader } from '../Card/CardHeader';
import { CardTitle } from '../Card/CardTitle';

export function PriceCalculator({ invites, setInvites, duration, setDuration, handleCalculate, calculatedValue }) {
  return (
    <Card className="mt-8 bg-white text-white rounded-lg shadow-2xl w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl text-blue-950 font-semibold">Price Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          
          {/* Number of Invites */}
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="invites" className="text-gray-400">Number of Invites</Label>
            <Input 
              id="invites" 
              type="number" 
              value={invites || ''}  // Handling undefined or null state for invites
              onChange={(e) => setInvites(Number(e.target.value))}
              className="bg-blue-200 text-black border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          
          {/* Duration of Event */}
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="duration" className="text-gray-400">Duration of Event (hours)</Label>
            <Input 
              id="duration" 
              type="number" 
              value={duration || ''} // Handling undefined or null state for duration
              onChange={(e) => setDuration(Number(e.target.value))}
              className="bg-blue-200 text-black border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          
          {/* Calculate Button */}
          <Button 
            onClick={handleCalculate} 
            className="bg-blue-900 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700 focus:ring-2 focus:ring-white"
          >
            Calculate
          </Button>
          
          {/* Display Calculated Value */}
          {calculatedValue > 0 && (
            <div className="text-2xl font-bold text-center text-blue-900 mt-4">
              Calculated Value: ₹{calculatedValue.toLocaleString()}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
