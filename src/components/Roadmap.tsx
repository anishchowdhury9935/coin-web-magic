
import { CheckCircle, Circle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      status: "completed",
      items: [
        "Token Creation & Audit",
        "Website Launch",
        "Social Media Setup",
        "Initial Liquidity Pool"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Community Building",
      status: "current",
      items: [
        "CoinGecko & CoinMarketCap Listings",
        "Community Growth to 10K",
        "First Marketing Campaign",
        "Partnerships with Influencers"
      ]
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      status: "upcoming",
      items: [
        "NFT Collection Launch",
        "Merchandise Store",
        "Mobile App Development",
        "Cross-Chain Bridge"
      ]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem",
      status: "upcoming", 
      items: [
        "DeFi Integration",
        "Staking Platform",
        "Governance Token",
        "Metaverse Integration"
      ]
    }
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case "current":
        return <Clock className="w-6 h-6 text-yellow-400" />;
      default:
        return <Circle className="w-6 h-6 text-white/50" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-400 bg-green-400/10";
      case "current":
        return "border-yellow-400 bg-yellow-400/10";
      default:
        return "border-white/30 bg-white/5";
    }
  };

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our journey to becoming the most beloved meme coin in the crypto space!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <Card key={index} className={`${getStatusColor(phase.status)} backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105`}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  {getIcon(phase.status)}
                  <div>
                    <div className="text-sm text-white/70">{phase.phase}</div>
                    <div className="text-lg font-bold text-white">{phase.title}</div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/80 text-sm flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
