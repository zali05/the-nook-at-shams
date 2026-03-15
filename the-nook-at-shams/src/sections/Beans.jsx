import v60Video from '../assets/videos/v60.mp4';
import {motion} from 'framer-motion';

export default function Beans() {
    return(
        <section className="min-h-screen flex items-center  bg-[#111] text-white px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
                
                <motion.div
                className="md:col-span-7"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{once:true}}>
                <h2 className="text-4xl md:text-6xl font-semibold leading-tight">Our Coffee</h2>
                <p className="mt-6 text-3xl text-gray-200">
                    Discover the rich flavors of our carefully selected coffee beans. Our mission is not just to present you with a cup of good coffee, but rather to send you on a journey of exploration through the tradition and culture of coffee. From the grind to the final pour, every detail is about creating a coffee worth slowing down for.
                </p>
                </motion.div>

                <div className="md:col-span-5 relative w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl">
                    <a href= "https://www.instagram.com/thenookatshams/?hl=en" target="_blank" rel="noopener noreferrer" className="block relative w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl" >
                    <motion.video
                    src={v60Video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial = {{ scale:1}}
                    whileInView={{scale: 1.05}}
                    transition = {{ duration: 3, ease: "easeOut"}}
                    className="w-full h-full"
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