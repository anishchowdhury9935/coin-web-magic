
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Users, TrendingUp, Twitter, Send, MessageCircle, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Community from "@/components/Community";
import Roadmap from "@/components/Roadmap";

const Index = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast({
      title: "Contract Address Copied!",
      description: "The contract address has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d4cf1ab2-021a-4c5b-82ce-3a825ce33bb6.png" 
              alt="CrocElephant" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white font-bold text-xl">$CROCELEPHANT</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-white hover:text-yellow-300 transition-colors">About</a>
            <a href="#tokenomics" className="text-white hover:text-yellow-300 transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-white hover:text-yellow-300 transition-colors">Roadmap</a>
            <a href="#community" className="text-white hover:text-yellow-300 transition-colors">Community</a>
          </div>
          <Button 
            onClick={copyToClipboard}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
          >
            {copied ? "Copied!" : "Copy CA"}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Contract Address Banner */}
      <div className="bg-black/20 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-white font-semibold">Contract Address:</span>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
              <code className="text-yellow-300 text-sm font-mono">{contractAddress}</code>
              <Button
                size="sm"
                variant="ghost"
                onClick={copyToClipboard}
                className="text-white hover:text-yellow-300 p-1"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Tokenomics Section */}
      <Tokenomics />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Community Section */}
      <Community />

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/d4cf1ab2-021a-4c5b-82ce-3a825ce33bb6.png" 
              alt="CrocElephant" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white font-bold">$CROCELEPHANT</span>
          </div>
          <p className="text-white/70 mb-4">
            The cutest meme coin in the crypto jungle! 🐘👟
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-yellow-300">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-yellow-300">
              <Send className="w-4 h-4 mr-2" />
              Telegram
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-yellow-300">
              <MessageCircle className="w-4 h-4 mr-2" />
              Discord
            </Button>
          </div>
          <p className="text-white/50 text-sm mt-4">
            © 2024 CrocElephant. All rights reserved. This is a meme coin with no intrinsic value.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
