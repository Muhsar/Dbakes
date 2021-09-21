import React from 'react'
import img from "../../images/i17.jpg"
export default function About() {
  return (
  // <div className="container mx-auto px-5">
    <div className="mx-auto flex items-center justify-center max-h-screen">
      <div className="absolute flex flex-col items-center px-6 py-3 space-x-2 text-sm font-semibold text-blue-800 transition duration-300 transform hover:scale-110 bg-gray-200 w-full text-center justify-center">
      <div className="space-y-4 mb-12">
        <h4 className="text-2xl sm:text-3xl font-semibold">Phantom 4PRO V2.0</h4>
        <h1 className="text-5xl sm:text-7xl font-bold">Visionary intelligence</h1>
        <p className="sm:w-3/4 lg:w-2/4 xl:w-96 mx-auto text-lg sm:text-xl text-gray-600">Free HTML Single Product eCommerce langing page template</p>
      </div>
      <a href="#0" className="px-12 py-4 bg-blue-800 hover:bg-blue-900 transition duration-300 ease-in-out shadow hover:shadow-lg transform hover:scale-110 text-white font-semibold text-lg rounded-full inline-block">Buy now</a>
        {/* <span>View More</span> */}
      </div>
      <img src={img} alt="" className="h-screen object-center object-cover" />
    </div>
  // </div>
  )
}
