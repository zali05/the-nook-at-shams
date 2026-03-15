import { motion } from 'framer-motion'

export default function Footer() {
    return(
        <section className = "bg-[#050505] text-white py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold">Visit Us</h2>
                    <p className="text-3xl mt-4 text-gray-200">Whether you're meeting a friend, working quietly, or just passing through, The Nook is a place to pause, relax, and enjoy a well-made cup of coffee.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-16 text-center">
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Location</h3>
                        <p className="text-2xl text-gray-400">Address of store</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Hours</h3>
                        <p className="text-2xl text-gray-400">Mon-Fri: 8am - 8pm</p>
                        <p className="text-2xl text-gray-400">Sat-Sun: 9am - 9pm</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Our Menu</h3>
                        <a href="menu.pdf" className="inline-block border border-white px-5 py-3 rounded-full hover:bg-white hover:text-black transition">Download Menu</a>
                    </div>

                    <div className="mt-24 text-center max-w-xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-4">Join our Newsletter</h3>
                        <p className="text-gray-400 mb-6">Never miss out on our seasonal updates</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input type="email" 
                            placeholder="Enter your email" 
                            className="w-full sm:w-auto px-4 py-3 rounded-full text-black focus:outline-none" />
                            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">Subscribe</button>
                        </div>
                    </div>

                <div className="mt-28 pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} The Nook at Shams</p>
                    <p className="mt-2">Follow us on social media.
                        <a href="https://www.instagram.com/thenookatshams/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition ml-2">Instagram</a>
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
}