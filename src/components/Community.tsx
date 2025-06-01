
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Send, MessageCircle, Users, Heart, Star } from "lucide-react";

const Community = () => {
  const socialStats = [
    { platform: "Twitter", followers: "15.2K", icon: Twitter, color: "bg-blue-400" },
    { platform: "Telegram", members: "8.7K", icon: Send, color: "bg-blue-500" },
    { platform: "Discord", members: "5.3K", icon: MessageCircle, color: "bg-indigo-500" }
  ];

  return (
    <section id="community" className="py-20 px-4 bg-black/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Join Our Herd!
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Be part of the most supportive and fun crypto community. Together we're stronger! 🐘💪
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialStats.map((social, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{social.platform}</h3>
                <div className="text-2xl font-bold text-yellow-400 mb-1">{social.followers || social.members}</div>
                <div className="text-white/70 text-sm">
                  {social.followers ? 'Followers' : 'Members'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold text-white mb-8">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Twitter className="mr-2 h-5 w-5" />
              Follow on Twitter
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Send className="mr-2 h-5 w-5" />
              Join Telegram
            </Button>
            <Button 
              size="lg" 
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 mt-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-black font-bold text-xl">Community Love</span>
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-black font-semibold text-lg mb-4">
              "CrocElephant isn't just a token, it's a family! The community here is amazing and supportive. Love my elephant fam! 🐘❤️"
            </p>
            <div className="flex justify-center items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-600 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
