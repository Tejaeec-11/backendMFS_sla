const Gallery = () => {
    return (
        <>
         <div className="min-h-screen bg-orange-50 p-10">

            <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">
                Diwali Gallery
            </h1>

            <p className="text-center text-gray-700 mb-10">
                Explore the beautiful moments of Diwali celebrations.
            </p>

            <div className="grid grid-cols-3 gap-6">

                <div className="bg-white p-4 rounded-xl shadow">
                    <img
                        src="https://lostandlore.com/wp-content/uploads/2025/10/image-3-1.jpg"
                        alt="Diwali diya"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="text-center text-xl font-semibold mt-3">
                        Beautiful Diyas
                    </h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <img
                        src="https://m.economictimes.com/thumb/msid-124689154,width-1200,height-900,resizemode-4,imgsize-111498/diwali-2025-dos-donts-common-myths-and-beliefs-explained.jpg"
                        alt="Diwali lights"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="text-center text-xl font-semibold mt-3">
                        Festival Lights
                    </h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <img
                        src="https://cdn.dxbnewsnetwork.com/newsimage/2025/10/17/Diwali_decoration.jpg"
                        alt="Colourful rangoli"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="text-center text-xl font-semibold mt-3">
                        Colourful Rangoli
                    </h2>
                </div>

            </div>

        </div>
        </>
    )
}

export default Gallery