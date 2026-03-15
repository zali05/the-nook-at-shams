import heroVideo from '../assets/videos/book-vid.mp4';
import { motion } from 'framer-motion';
export default function Hero() {
    return (
      <section className= "relative h-screen overflow-hidden bg-black">
            {/* Background video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Overlay */}
            <div className= "absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className= "relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-7xl font-semibold tracking-tight">
                    Welcome to The Nook at Shams
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="mt-6 text-1xl md:text-3xl text-gray-200 max-w-2xl">
                    Tucked into a quiet corner at the end of Shams, The Nook is a cozy retreat for coffee lovers and curious minds — a place where good coffee and good company meet.
                </motion.p>
            </div>

        </section>
    );
}