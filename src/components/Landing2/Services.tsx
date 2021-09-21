import React from 'react'
import img2 from "../../images/i18.jpg"
import img1 from "../../images/i19.jpg"
import img3 from "../../images/i20.jpg"

export default function Services() {
  return (
    <section className="py-10 lg:py-14">{/* Start Third Block */}
  <div className="container mx-auto px-5">
    <div className="space-y-5 lg:text-center mb-8 lg:mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold">Powerful Aerial Performance</h2>
      <p className="sm:w-3/4 lg:w-2/4 xl:w-1/3 lg:mx-auto text-lg sm:text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, aliquid!</p>
    </div>
    <div className="grid gap-y-10 lg:gap-y-0">
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-center">
        <div className="space-y-4 lg:pr-20">
          <h3 className="text-2xl sm:text-4xl font-semibold">Incredible Gimbal Camera</h3>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, doloribus. Ipsum saepe dicta excepturi vero sint dolorum quo ullam qui possimus inventore nesciunt incidunt, cum vel modi nostrum tempore. Commodi consectetur reiciendis veniam possimus corporis, distinctio officiis eos iste totam fuga, eum magnam adipisci accusantium.
          </p>
        </div>
        <div className="bg-gray-100 p-20">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-center">
        <div className="bg-gray-100 p-20 order-last lg:order-first">
          <img src={img1} alt="" />
        </div>
        <div className="space-y-4 lg:pl-20">
          <h3 className="text-2xl sm:text-4xl font-semibold">Intuitive Remote Controller</h3>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, doloribus. Ipsum saepe dicta excepturi vero sint dolorum quo ullam qui possimus inventore nesciunt incidunt, cum vel modi nostrum tempore. Commodi consectetur reiciendis veniam possimus corporis, distinctio officiis eos iste totam fuga, eum magnam adipisci accusantium.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-center">
        <div className="space-y-4 lg:pr-20">
          <h3 className="text-2xl sm:text-4xl font-semibold">Intelligent Flight Battery</h3>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, doloribus. Ipsum saepe dicta excepturi vero sint dolorum quo ullam qui possimus inventore nesciunt incidunt, cum vel modi nostrum tempore. Commodi consectetur reiciendis veniam possimus corporis, distinctio officiis eos iste totam fuga, eum magnam adipisci accusantium.
          </p>
        </div>
        <div className="bg-gray-100 p-20">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
