
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Heart, ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-28 pb-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left md:w-1/2">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                <span className="text-yellow-300 font-semibold">🔥 The Next Big Meme Coin</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                $ELECROCK
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">To The Moon!</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                He don't now what's going on!🐘👟
                <br />
                Where cuteness meets community-driven innovation!
              </p>
              
              {/* <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-auto"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  munity
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-xl shadow-lg transition-all duration-300 h-auto"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div> */}
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -right-10 z-20 animate-bounce">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  NEW!
                </div>
              </div>
              
              <div className="relative z-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 p-4 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/d4cf1ab2-021a-4c5b-82ce-3a825ce33bb6.png" 
                  alt="ELECROCK Mascot" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Community Driven</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2">1M+</div>
              <div className="text-white/80">Market Cap</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2">10K+</div>
              <div className="text-white/80">Holders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2">100%</div>
              <div className="text-white/80">Community Driven</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
