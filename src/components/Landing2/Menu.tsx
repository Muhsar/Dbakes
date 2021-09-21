import React from 'react'
import img from "../../images/i10.jpg"
import img1 from "../../images/i20.jpg"
import img2 from "../../images/i15.jpg"

export default function Menu() {
  return (
    <section className="py-10 lg:py-14 pb-20 lg:pb-28">{/* Start Fourth Block */}
  <div className="container mx-auto px-12 sm:px-5">
    <div className="space-y-5 text-center mb-8 lg:mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold">Great Specifications</h2>
      <p className="sm:w-3/4 lg:w-2/4 xl:w-1/3 mx-auto text-lg sm:text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, aliquid!</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="space-y-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">Feature</h5>
          <p className="text-lg text-gray-600">Sit distinctio similique voluptas delectus corporis similique nostrum vitae voluptas.</p>
        </div>
      </div>
      <div className="space-y-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">Feature</h5>
          <p className="text-lg text-gray-600">Sit distinctio similique voluptas delectus corporis similique nostrum vitae voluptas.</p>
        </div>
      </div>
      <div className="space-y-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">Feature</h5>
          <p className="text-lg text-gray-600">Sit distinctio similique voluptas delectus corporis similique nostrum vitae voluptas.</p>
        </div>
      </div>
      <div className="space-y-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">Feature</h5>
          <p className="text-lg text-gray-600">Sit distinctio similique voluptas delectus corporis similique nostrum vitae voluptas.</p>
        </div>
      </div>
      <div className="space-y-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">Feature</h5>
          <p className="text-lg text-gray-600">Sit distinctio similique voluptas delectus corporis similique nostrum vitae voluptas.</p>
        </div>
      </div>
      <div className="space-y-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">Feature</h5>
          <p className="text-lg text-gray-600">Sit distinctio similique voluptas delectus corporis similique nostrum vitae voluptas.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
