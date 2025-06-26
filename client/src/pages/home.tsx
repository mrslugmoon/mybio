import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiDiscord, SiX, SiRoblox } from "react-icons/si";
import avatarImage from "@assets/1743573733040-WgyMxZRRYzTi8BusYPvS3xvH2WlvWlAt14GWXGtlCHduPfx8_1750917906835.png";
import freshluxLogo from "@assets/FreshluxSymbol_1_1750919703351.png";
import freshluxBg from "@assets/FRESHLUX_20250508_011010_0000_1750919829042.png";

const socialLinks = [
  {
    name: "Discord",
    description: "Connect with me",
    url: "https://discord.com/users/963454399160668220",
    icon: SiDiscord,
    color: "#5865F2",
  },
  {
    name: "Twitter / X",
    description: "Follow my updates",
    url: "https://x.com/slugmoonrblx",
    icon: SiX,
    color: "#000000",
  },
  {
    name: "Roblox",
    description: "Check out my games",
    url: "https://www.roblox.com/users/1734102247/profile",
    icon: SiRoblox,
    color: "#00A2FF",
  },
];

const particles = [
  { size: "w-4 h-4", position: "top-20 left-20", animation: "animate-float" },
  { size: "w-6 h-6", position: "top-40 right-32", animation: "animate-bounce-slow" },
  { size: "w-3 h-3", position: "top-60 left-1/4", animation: "animate-pulse-slow" },
  { size: "w-5 h-5", position: "bottom-40 right-20", animation: "animate-float" },
  { size: "w-2 h-2", position: "bottom-20 left-1/3", animation: "animate-bounce-slow" },
  { size: "w-4 h-4", position: "top-1/3 right-1/4", animation: "animate-pulse-slow" },
];

export default function Home() {
  return (
    <div className="min-h-screen animated-bg overflow-x-hidden font-inter">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className={`particle ${particle.size} ${particle.position} ${particle.animation}`}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mx-auto space-y-8"
        >
          {/* Profile Section */}
          <div className="text-center space-y-6">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-block"
            >
              <div className="glassmorphism rounded-full p-2 animate-float">
                <img
                  src={avatarImage}
                  alt="Slugmoon Roblox Avatar"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-75 blur animate-pulse-slow"></div>
            </motion.div>

            {/* Animated Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold gradient-text"
            >
              Slugmoon
            </motion.h1>

            {/* About Me Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glassmorphism rounded-2xl p-6 text-center"
            >
              <p className="text-gray-200 text-lg leading-relaxed">
                Hey! I'm Slugmoon! I am a developer on the Roblox platform combined with other languages, like Java and TypeScript! You might know me from games I own, such as Freshlux!
              </p>
            </motion.div>
          </div>

          {/* Discord Server Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${freshluxBg})`,
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* Content */}
            <div className="relative z-10 p-6 text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <img
                  src={freshluxLogo}
                  alt="Freshlux Logo"
                  className="w-10 h-10 object-contain drop-shadow-lg"
                />
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">Join Freshlux</h2>
              </div>
              <p className="text-gray-100 text-sm drop-shadow-md">
                Join our Discord community and connect with other players!
              </p>
              <motion.a
                href="https://discord.gg/freshlux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiDiscord className="w-5 h-5" />
                <span>Join Server</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="social-link glassmorphism rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/20 group block"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: link.color }}
                >
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">{link.name}</h3>
                  <p className="text-gray-300 text-sm">{link.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm">
              Made with ❤️ by Slugmoon
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
