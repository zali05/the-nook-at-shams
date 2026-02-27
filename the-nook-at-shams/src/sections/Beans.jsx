import v60Video from '../assets/videos/v60.mp4';

export default function Beans() {
    return(
        <section className="min-h-screen flex items-center  bg-[#111] text-white px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                <div>
                <h2 className="text-4xl md:text-6xl font-semibold leading-tight">Our Coffee</h2>
                <p className="mt-6 text-lg text-gray-300">
                    Discover the rich flavors of our carefully selected coffee beans. Our mission is not just to present you with a cup of good coffee, but rather to send you on a journey of exploration through the tradition and culture of coffee
                </p>
                </div>

                <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl">
                    <a href= "https://www.instagram.com/thenookatshams/?hl=en" target="_blank" rel="noopener noreferrer" className="block relative w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl" >
                    <video
                    src={v60Video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">View on Instagram</span>
                    </div>
                    </a>
                </div>

            </div>
        </section>
    );
}