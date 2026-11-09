const Celebration = () => {
    return (
        <>
        <div className="min-h-screen bg-orange-50 p-10">

            <h1 className="text-4xl font-bold text-red-900 mb-8">
                Diwali Celebrations
            </h1>

            <div className="grid grid-cols-2 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold text-orange-800 mb-3">
                        Lighting Diyas
                    </h2>
                    <p className="text-gray-700">
                        People light beautiful diyas to welcome happiness
                        and remove darkness from their homes.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold text-orange-800 mb-3">
                        Rangoli Decoration
                    </h2>
                    <p className="text-gray-700">
                        Colourful rangoli designs decorate entrances
                        and make homes look beautiful.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold text-orange-800 mb-3">
                        Sharing Sweets
                    </h2>
                    <p className="text-gray-700">
                        Families and friends share delicious sweets
                        and celebrate together.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold text-orange-800 mb-3">
                        Family Gathering
                    </h2>
                    <p className="text-gray-700">
                        Families come together, wear new clothes
                        and enjoy the festival.
                    </p>
                </div>

            </div>
        </div>
        </>
    )
}

export default Celebration