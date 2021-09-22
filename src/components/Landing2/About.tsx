import React from 'react'
import img from "../../images/i17.jpg"
import Images from '../../utils/Images';
import {Link} from "react-router-dom"
export default function About() {
  return (
  // <div className="container mx-auto px-5">
    <div className="mx-auto flex items-center justify-center max-h-screen h-screen">
      <div className="absolute flex flex-col items-center px-6 py-3 space-x-2 text-sm font-semibold text-purple-800 transition duration-300 transform hover:scale-110 bg-gray-200 w-full text-center justify-center">
      <div className="space-y-4 mb-5">
        {/* <h4 className="text-2xl sm:text-3xl font-semibold">Phantom 4PRO V2.0</h4> */}
        <h1 className="text-4xl sm:text-7xl font-bold">Deezah Bakes It</h1>
        <p className="sm:w-3/4 lg:w-2/4 xl:w-96 mx-auto text-lg sm:text-xl text-gray-600">Your One Stop For All Quality Baked Foods</p>
      </div>
      <Link to="/products" className="px-12 py-4 bg-purple-800 hover:bg-purple-900 transition duration-300 ease-in-out shadow hover:shadow-lg transform hover:scale-110 text-white font-semibold text-lg rounded-full inline-block">Get Started</Link>
        {/* <span>View More</span> */}
      </div>
      <img src={`${Images()[Math.floor(Math.random() * Images().length)]}`} alt="" className="h-screen object-center object-cover w-screen" />
    </div>
  // </div>
  )
}
