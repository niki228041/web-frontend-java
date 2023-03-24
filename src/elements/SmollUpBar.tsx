import React from 'react'
import { Link } from 'react-router-dom'



const SmollUpBar=()=> {
  return (
<nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* <Link to="/">
              <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            </Link> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/categorys" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Additional
              </Link>
              <Link to="/products" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Info
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default SmollUpBar
