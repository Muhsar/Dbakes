import React from 'react'
import image from "../images/i1.jpg"
export default function Header() {
    return (
        <>
           <section id="header">
        <div className="lg:flex flex-col lg:flex-row mx-auto lg:h-auto h-screen hidden">
          <div className="lg:h-screen h-1/3 flex flex-col items-center justify-center lg:w-1/3">
          Tade Shopping Complex
          </div>
          <img className="lg:h-screen lg:w-2/3 h-2/3 object-center object-cover" src={image} />
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center h-screen text-white text-2xl "
        style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}
        >
        <span className="transform transition-all hover:scale-110">
        Tade Shopping Complex
        </span>
        </div>
      </section> 
        </>
    )
}
