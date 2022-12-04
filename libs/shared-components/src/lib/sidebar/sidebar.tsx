

import React from "react";
import Link from 'next/link'
// import { useRouter } from "next/router";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  // const router = useRouter();
  return (
    // <nav className="flex flex-col w-72 h-full p-4">
    //   <Link href="/">Home</Link>
    //   <Link href="/about">About</Link>
    //   <Link href="/dashboard">Dashboard</Link>
    // </nav>
    <div className="h-screen w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
      <div className="px-8 h-full flex flex-col flex-grow">
        <div className="h-16 text-white w-full flex items-center font-black text-2xl">
          Tailwind
        </div>
        <ul className="mt-12">
          <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
            <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <i className="mdi mdi-view-dashboard-outline"></i>
              <span className="text-sm ml-2">Dashboard</span>
            </a>
            <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5</div>
          </li>
          <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <i className="mdi mdi-puzzle-outline"></i>
              <span className="text-sm ml-2">Products</span>
            </a>
            <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8</div>
          </li>
          <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <i className="mdi mdi-compass-outline"></i>
              <span className="text-sm ml-2">Performance</span>
            </a>
          </li>
        </ul>
        <div className="flex justify-center mt-auto mb-4 w-full">
          <div className="relative">
            <div className="text-gray-300 absolute ml-3 mb-3 inset-0 m-auto w-4 h-4">
              <i className="mdi mdi-magnify"></i>
            </div>
            <input className="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}