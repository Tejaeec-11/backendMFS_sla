const About = () => {
    return (
        <>
         <div className="min-h-screen bg-orange-50 p-10">

            <div className="bg-gradient-to-r from-red-950 to-orange-800
                rounded-2xl p-10 text-center mb-10">

                <h1 className="text-5xl font-bold text-yellow-300 mb-4">
                    About Diwali
                </h1>

                <p className="text-orange-100 text-lg">
                    Discover the beauty and meaning of the Festival of Lights
                </p>

            </div>

            <div className="grid grid-cols-2 gap-8 items-center">

                <div>
                    <h2 className="text-3xl font-bold text-red-900 mb-5">
                        The Story of Diwali
                    </h2>

                    <p className="text-gray-700 leading-8 text-lg mb-5">
                        Diwali is one of the most beautiful festivals
                        celebrated in India. It represents the victory
                        of light over darkness and good over evil.
                    </p>

                    <p className="text-gray-700 leading-8 text-lg">
                        People celebrate this festival by lighting
                        diyas, decorating their homes, sharing sweets
                        and spending wonderful moments with family.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

                    <div className="text-8xl mb-5">
                        🪔
                    </div>

                    <h2 className="text-2xl font-bold text-orange-800 mb-3">
                        Festival of Lights
                    </h2>

                    <p className="text-gray-600 leading-7">
                        A celebration filled with light, happiness,
                        hope and new beginnings.
                    </p>

                </div>

            </div>

            <div className="mt-12 bg-yellow-100 rounded-xl p-8 text-center">

                <h2 className="text-2xl font-bold text-red-900 mb-3">
                    The Meaning of Diwali
                </h2>

                <p className="text-gray-700 text-lg">
                    Light a lamp, spread happiness and welcome
                    positivity into your life.
                </p>

            </div>

        </div>
    
        </>
    )
}

export default About