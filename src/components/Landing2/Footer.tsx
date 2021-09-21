import React from 'react'

export default function Footer() {
  return (
   <footer className="py-8 lg:py-12">
  <div className="container mx-auto px-5 text-center">
    <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-500 mb-6">
      <p>Copyright © 2021 Rance. All rights reserved.</p>
      <p>Images and texts from <a className="text-blue-700 underline" href="https://dji.com" rel="nofollow" target="_blank">dji.com</a> | <a className="text-blue-700 underline" href="https://unsplash.com" rel="nofollow" target="_blank">unsplash.com</a></p>
    </div>
    <div className="sm:w-2/4 lg:w-1/3 mx-auto">
      <p className="text-xs text-gray-400">Photos and texts are used to demonstrate the capabilities of the site template, please do not use them for commercial purposes.</p>
    </div>
  </div>
</footer>

  )
}
