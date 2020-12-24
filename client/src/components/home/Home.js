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
    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
    
    <div className="p-4">
      <button className="bg-white-500 text-white rounded-full p-2 hover:bg-gray-400 focus:outline-none w-12 h-12 flex items-center justify-center">
         

        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="612.01px" height="612.01px" viewBox="0 0 612.01 612.01" style="enable-background:new 0 0 612.01 612.01;"
	 xml:space="preserve">
<g>
	<g id="_x34__4_">
		<g>
			<path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
				C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
				l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
				c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
				S377.82,467.8,257.493,467.8z"/>
		</g>
	</g>
</g>

</svg>




      </button>
      </div>
    </div>
  </div>
</div>



    
  </div>
</section>




    )
}


export default Home

