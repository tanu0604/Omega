import React from 'react'
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'
import { CardTitle } from './CardTitle'

export function CarOverview({ carData }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="bg-white text-black rounded-lg shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-blue-950">Car Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg"><strong className="text-blue-900">Model:</strong> {carData.model}</p>
          <p className="text-lg"><strong className="text-blue-900">Year:</strong> {carData.year}</p>
          <p className="text-lg"><strong className="text-blue-900">Mileage:</strong> {carData.mileage} miles</p>
          <p className="text-lg"><strong className="text-blue-900">Price:</strong> Rs {carData.price.toLocaleString()}L</p>
        </CardContent>
      </Card>
    </div>
  )
}
