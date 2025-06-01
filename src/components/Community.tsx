
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Send, MessageCircle, Users, Heart, Star, ExternalLink } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/0"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
            <span className="text-yellow-300 font-semibold">Join Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Join Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">Herd!</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Be part of the most supportive and fun crypto community. Together we're stronger! 🐘💪
          </p>
        </div>
        
        <div className="text-center space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 rounded-xl overflow-hidden shadow-lg">
              <div className="h-2 bg-blue-400"></div>
              <CardContent className="p-8 text-center">
                <div className="bg-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Twitter className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Twitter</h3>
                <p className="text-white/70 mb-6">Follow us for the latest updates, memes, and community events!</p>
                <Button 
                  className="bg-blue-400 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 h-auto w-full"
                >
                  <a href="https://x.com/real_trader_og" className="flex items-center justify-center w-full">
                    Follow on Twitter
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 rounded-xl overflow-hidden shadow-lg">
              <div className="h-2 bg-blue-500"></div>
              <CardContent className="p-8 text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Telegram</h3>
                <p className="text-white/70 mb-6">Join our active Telegram community for real-time discussions!</p>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 h-auto w-full"
                >
                  <a href="https://t.me/elecroc_og" className="flex items-center justify-center w-full">
                    Join Telegram
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-xl max-w-4xl mx-auto mt-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-white font-bold text-2xl">Community Love</span>
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-white font-medium text-lg mb-6 italic">
              "ELECROCK isn't just a token, it's a family! The community here is amazing and supportive. Love my elephant fam! 🐘❤️"
            </p>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-white/70 text-center">- Happy Community Member</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
