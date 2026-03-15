import { motion} from 'framer-motion';
import v60Video from '../assets/videos/v60.mp4';
import cookie from '../assets/videos/cookie.mp4';
import latte from '../assets/videos/latte.mp4';


export default function Gallery() {
    const videos = [v60Video, cookie, latte];
    return(
        <section className="bg-[#0a0a0a] text-white py-32 px-6">
            <motion.div
            initial = {{ opacity: 1, y: 40}}
            whileInView={{opacity: 1, y:0}}
            transition={{ duration: 0.8, ease: "easeOut"}}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-semibold">Feel the vibe</h2>
                <p className="text-3xl mt-4 text-gray-300 max-w-7xl mx-auto">Our menu is simple and thoughtful: freshly toasted sandwiches, freshly baked cookies, and pastries sourced localy within Islamabad; all made to complement the coffee and the moment.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {videos.map((video, i) =>(
                    <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                    >
                     <div className="overflow-hidden rounded-3xl shadow-xl max-w-xs">
                        <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                        />
                    </div>
                    </motion.div>
                ))}
                
            </div>
        </section>
    );
}