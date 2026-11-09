const Contact = () => {
    return (
        <>
       <div className="min-h-screen bg-orange-50 p-10">

            <h1 className="text-4xl font-bold text-red-900 mb-6 text-center">
                Contact Us
            </h1>

            <p className="text-center text-gray-700 mb-10">
                Have a question? We'd love to hear from you!
            </p>

            <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow">

                <form className="flex flex-col gap-5">

                    <div>
                        <label className="block mb-2 font-semibold">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border p-3 rounded-lg outline-none focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border p-3 rounded-lg outline-none focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Write your message"
                            className="w-full border p-3 rounded-lg outline-none focus:border-orange-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-red-900 text-yellow-300 py-3 rounded-lg hover:bg-red-800"
                    >
                        Send Message
                    </button>

                </form>
            </div>

        </div>
        </>
    )
}

export default Contact