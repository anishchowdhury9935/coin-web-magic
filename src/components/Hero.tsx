
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Heart } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 relative">
            <img 
              src="/lovable-uploads/d4cf1ab2-021a-4c5b-82ce-3a825ce33bb6.png" 
              alt="CrocElephant Mascot" 
              className="w-64 h-64 mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-4 -right-4 animate-bounce">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                NEW!
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            $CROCELEPHANT
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            The most adorable meme coin in the crypto jungle! 🐘👟
            <br />
            Where cuteness meets community-driven innovation!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Buy $CROCELEPHANT
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              <Zap className="mr-2 h-5 w-5" />
              View Chart
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1M+</div>
              <div className="text-white/80">Market Cap</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">10K+</div>
              <div className="text-white/80">Holders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-white/80">Community Driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
