import React from "react";
import "./footer.module.scss"

export function Footer() {
  return (
    <footer className="bg-gray-900 shrink-0">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-1"> Avitrader </h3>
          <p> Welcome to Avitrader App. </p>
        </div>
        <div className="mt-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2021. </p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer