import React from 'react'
import img from "../../images/i2.jpg"

export default function App() {
  return (
    <section className="bg-gray-800 py-20 lg:py-28">{/* Start Fifth Block */}
  <div className="container mx-auto px-5">
    <div className="grid lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold">Phantom 4PRO V2.0</h2>
          <p className="text-xl text-gray-600">Visionary intelligence. Elevated imagination.</p>
        </div>
        <div className="flex justify-center lg:justify-start items-center space-x-4">
          <a href="#0" className="inline-block rounded-full px-6 py-3 bg-white hover:bg-blue-900 text-blue-800 hover:text-white shadow transition duration-300 hover:shadow-lg text-lg font-semibold">Buy now</a>
          <div className="text-xl font-semibold text-blue-800">From $1,599</div>
        </div>
      </div>
      <div>
        <img src={img} alt="Drone" />
      </div>
    </div>
  </div>
</section>

  )
}
