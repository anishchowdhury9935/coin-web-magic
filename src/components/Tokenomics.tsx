
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tokenomics = () => {
  const data = [
    { name: "Community", value: 40, color: "#FBBF24" },
    { name: "Liquidity Pool", value: 30, color: "#8B5CF6" },
    { name: "Marketing", value: 15, color: "#EF4444" },
    { name: "Development", value: 10, color: "#10B981" },
    { name: "Team", value: 5, color: "#3B82F6" }
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 bg-black/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Fair and transparent distribution designed to benefit the entire CrocElephant community!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">Token Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Token Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Total Supply:</span>
                    <span className="text-white font-semibold">1,000,000,000 $CROCELEPHANT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Network:</span>
                    <span className="text-white font-semibold">Ethereum (ERC-20)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Tax:</span>
                    <span className="text-white font-semibold">5% Buy / 5% Sell</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Liquidity:</span>
                    <span className="text-white font-semibold">Locked for 1 Year</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-white font-semibold">{item.name}</span>
                <span className="text-white/70">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
