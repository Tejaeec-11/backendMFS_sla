import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="min-h-screen bg-orange-50 p-8">

            <div className="relative min-h-[550px] rounded-2xl overflow-hidden
                bg-gradient-to-br from-red-950 via-red-800 to-orange-600
                flex flex-col justify-center items-center text-center p-10">

                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-32 h-32
                    rounded-full bg-yellow-400/10 blur-2xl">
                </div>

                <div className="absolute bottom-10 right-10 w-48 h-48
                    rounded-full bg-orange-300/20 blur-3xl">
                </div>

                {/* Main content */}
                <div className="relative z-10">

                    <p className="text-yellow-300 text-lg tracking-[5px] mb-5">
                        THE FESTIVAL OF LIGHTS
                    </p>

                    <h1 className="text-6xl font-bold text-yellow-300 mb-6">
                        Happy Diwali
                    </h1>

                    <p className="text-xl text-orange-100 max-w-xl mx-auto mb-8">
                        May the glow of diyas brighten your life
                        with happiness, peace and prosperity.
                    </p>

                    <Link
                        to="/celebrations"
                        className="inline-block bg-yellow-400 text-red-950
                        px-8 py-3 rounded-full font-bold
                        hover:bg-yellow-300 transition"
                    >
                        Explore Celebrations
                    </Link>

                </div>

                {/* Decorative Diyas */}
                <div className="relative z-10 flex gap-12 mt-16 text-5xl">
                    <span>🪔</span>
                    <span>🪔</span>
                    <span>🪔</span>
                </div>

            </div>

        </div>
    )
}

export default Home