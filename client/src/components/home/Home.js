import React from 'react'
// import PropTypes from 'prop-types'

const Home=({})=> {
    return (
    
    
        <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-5xl text-5xl font-medium title-font mb-1 text-gray-900">Search Files</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-base">This app lets you upload and download any type of file to a remote monogodb server.<strong>Note: Server running on free plan and cant use more than 500mb</strong>,Use the about search bar to search files uploaded previosuly or use the add button to add your own files.</p>
    </div>


  <div className="p-8">
  <div className="bg-white flex items-center rounded-full shadow-xl">
    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
    
    <div className="p-4">
      <button className="bg-white-500 text-white rounded-full p-2 hover:bg-gray-400 focus:outline-none w-12 h-12 flex items-center justify-center">
         {/* add search icon */}
      </button>
      </div>
  </div>
</div>  
  </div>
  <div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add file</button>
  </div>
</section>




    )
}


export default Home

