import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex items-center gap-12">
        {/* Left side - Text content */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hello, I am</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Omkar
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Biradar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3">
            A recent Computer Science graduate specializing in web technologies. With hands-on experience in building responsive websites using React, TypeScript, and Tailwind CSS, I aim to craft clean, scalable digital experiences. Passionate about full-stack development, I've also contributed to cloud and machine learning projects during my academic and internship journey.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Repository
            </a>
          </div>
        </div>

        {/* Right side - Photo */}
        <div className="w-1/2 flex justify-center">
          <div className={`w-80 h-80 rounded-full overflow-hidden border-4 ${isDarkMode ? 'border-blue-500' : 'border-orange-400'} relative group`}>
            {/* Glow effect */}
            <div className={`absolute -inset-8 ${isDarkMode ? 'bg-blue-500/80' : 'bg-orange-400/80'} blur-[100px] rounded-full group-hover:${isDarkMode ? 'bg-blue-500/90' : 'bg-orange-400/90'} transition-all duration-500`}></div>
            
            {/* Cloud-like elements for light mode */}
            {!isDarkMode && (
              <>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/30 rounded-full blur-md animate-float-slow"></div>
                <div className="absolute top-8 -right-4 w-20 h-20 bg-white/40 rounded-full blur-md animate-float-slow-delay"></div>
                <div className="absolute -bottom-4 left-8 w-24 h-24 bg-white/30 rounded-full blur-md animate-float-slow-delay-2"></div>
              </>
            )}
            
            {/* Photo container */}
            <div className="relative z-10 w-full h-full">
              {/* Orange circle */}
              <div className="absolute -inset-4 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
              
              {/* Additional glow effects */}
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg"></div>
              <div className="absolute -inset-6 bg-orange-500/10 rounded-full blur-2xl"></div>
              
              {/* New glow effect */}
              <div className="absolute -inset-8 bg-orange-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
              
              <img
                src="/omkar_pic.jpg"
                alt="Omkar Biradar"
                className="w-full h-full object-cover relative z-20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
