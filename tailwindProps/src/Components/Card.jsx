function Card({object='No product'}){// If in object variable if value not present it will set by default as 'No product'
    //console.log(props)//It contain empty object
    //console.log(props.object)
    //console.log(props.name)
    //console.log(name)
    console.log(object)
    return(

        <>
   

    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden max-w-xs w-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1114627/pexels-photo-1114627.jpeg"
            alt="Product"
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-4 text-center">{object}</h3>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transform active:scale-95">
            Buy
          </button>

          <button className="w-full bg-gradient-to-r from-blue-400 to-blue-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transform active:scale-95 mt-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
 

 


         


  
        </>
        
        
    )
}

export default Card




   

