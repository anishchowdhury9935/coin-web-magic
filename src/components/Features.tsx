
import { Heart, Shield, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Community First",
      description: "Built by the community, for the community. Every decision is made together!"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Audited smart contract with locked liquidity and renounced ownership."
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "Join thousands of ELECROCK lovers in our vibrant community!"
    },
    {
      icon: Rocket,
      title: "To The Moon",
      description: "Together we're building something special that will stomp to the moon!"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Why Choose ELECROCK?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            More than just a meme coin - we're building a community of elephant lovers who believe in fun, friendship, and financial freedom!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
