"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const features = [
  {
    icon: "🎮",
    title: "Gamified Learning",
    description: "Earn points, unlock badges, and climb leaderboards while learning about environmental conservation.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "🌍",
    title: "Real-World Challenges",
    description: "Complete daily eco-challenges and weekly projects that make a real difference in your community.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: "📊",
    title: "Impact Tracking",
    description: "Visualize your environmental impact with carbon footprint calculators and progress analytics.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "👥",
    title: "Community Learning",
    description: "Connect with peers, share success stories, and collaborate on environmental initiatives.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "🇮🇳",
    title: "India-Focused Content",
    description: "Learn about local environmental issues, government schemes, and region-specific solutions.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "🏆",
    title: "Achievement System",
    description: "Unlock achievements, earn certifications, and showcase your environmental leadership.",
    color: "from-yellow-500 to-amber-500"
  }
];

const stats = [
  { label: "Active Students", value: "25,000+", icon: "👨‍🎓" },
  { label: "Schools & Colleges", value: "500+", icon: "🏫" },
  { label: "CO₂ Reduced", value: "1.2M kg", icon: "🌱" },
  { label: "Trees Planted", value: "50,000+", icon: "🌳" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZjc3NjEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                🌱 Launching in Indian Schools & Colleges
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                Learn. <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Act.</span> Impact.
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                Transform environmental education through gamification, real-world challenges, and community action. 
                Join thousands of students creating a sustainable future for India.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-3">
                    Start Learning
                    <span className="ml-2">🚀</span>
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3">
                  Watch Demo
                  <span className="ml-2">▶️</span>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-8">
                <img 
                  src="https://placehold.co/600x400?text=Students+engaged+in+environmental+learning+with+interactive+digital+platform+showing+gamification+elements" 
                  alt="Students engaged in environmental learning with interactive digital platform showing gamification elements"
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Floating Achievement Cards */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 max-w-32">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🏆</span>
                    <div>
                      <div className="text-xs font-semibold text-gray-800">Achievement</div>
                      <div className="text-xs text-emerald-600">Eco Warrior</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🌱</span>
                    <div>
                      <div className="text-xs font-semibold text-gray-800">Impact</div>
                      <div className="text-xs text-green-600">125 kg CO₂ saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
              Why Choose <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">EcoLearn</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge gamification with real-world environmental action to create lasting impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your environmental learning journey in just three simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up & Set Goals",
                description: "Create your profile, choose your learning path, and set personal environmental goals.",
                icon: "📝"
              },
              {
                step: "2",
                title: "Learn & Challenge",
                description: "Complete interactive lessons, take on daily eco-challenges, and participate in community projects.",
                icon: "🎯"
              },
              {
                step: "3",
                title: "Track & Share Impact",
                description: "Monitor your environmental impact, earn achievements, and inspire others with your progress.",
                icon: "📈"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 max-w-screen-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students across India who are already creating positive environmental impact through EcoLearn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-3">
                Start Your Journey
                <span className="ml-2">🌱</span>
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-8 py-3">
              Learn More
              <span className="ml-2">📚</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}