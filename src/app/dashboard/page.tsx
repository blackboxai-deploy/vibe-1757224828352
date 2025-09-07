"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import Link from "next/link";

const todayChallenges = [
  {
    id: 1,
    title: "Use Public Transport",
    description: "Take bus, train, or metro instead of private vehicle",
    points: 50,
    category: "Transport",
    difficulty: "Easy",
    completed: false,
    icon: "🚌"
  },
  {
    id: 2,
    title: "Save 20L Water",
    description: "Turn off tap while brushing, take shorter showers",
    points: 30,
    category: "Water",
    difficulty: "Easy",
    completed: true,
    icon: "💧"
  },
  {
    id: 3,
    title: "Plastic-Free Lunch",
    description: "Bring lunch in reusable containers",
    points: 40,
    category: "Waste",
    difficulty: "Medium",
    completed: false,
    icon: "🍱"
  }
];

const recentAchievements = [
  { title: "First Week Warrior", icon: "🎯", date: "2 days ago", points: 100 },
  { title: "Water Saver", icon: "💧", date: "1 week ago", points: 150 },
  { title: "Public Transport Pro", icon: "🚌", date: "2 weeks ago", points: 200 }
];

const learningProgress = [
  { module: "Climate Change Basics", progress: 85, lessons: "8/10" },
  { module: "Water Conservation", progress: 100, lessons: "12/12" },
  { module: "Sustainable Energy", progress: 60, lessons: "6/10" },
  { module: "Waste Management", progress: 30, lessons: "3/10" }
];

const impactStats = [
  { label: "CO₂ Saved", value: "125", unit: "kg", icon: "🌱", color: "from-green-500 to-emerald-500" },
  { label: "Water Conserved", value: "2.4", unit: "kL", icon: "💧", color: "from-blue-500 to-cyan-500" },
  { label: "Waste Reduced", value: "18", unit: "kg", icon: "♻️", color: "from-purple-500 to-pink-500" },
  { label: "Trees Equivalent", value: "5.2", unit: "trees", icon: "🌳", color: "from-emerald-500 to-teal-500" }
];

export default function DashboardPage() {
  const currentLevel = 5;
  const currentPoints = 1250;
  const pointsToNextLevel = 300;
  const totalPointsForNextLevel = 1550;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-poppins text-gray-900 mb-2">
            Welcome back, Arjun! 👋
          </h1>
          <p className="text-gray-600">
            Ready to make an environmental impact today? Complete your challenges and continue learning.
          </p>
        </div>

        {/* Level & Points Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span>Level {currentLevel}</span>
                <span className="text-2xl">🏆</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold">{currentPoints.toLocaleString()} points</div>
                <Progress value={(currentPoints / totalPointsForNextLevel) * 100} className="bg-white/20" />
                <div className="text-sm opacity-90">{pointsToNextLevel} points to Level {currentLevel + 1}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span>Today's Progress</span>
                <span className="text-2xl">🎯</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">1/3</div>
                <Progress value={33.33} className="bg-emerald-100" />
                <div className="text-sm text-gray-600">Challenges completed</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span>Weekly Streak</span>
                <span className="text-2xl">🔥</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-orange-600">7 days</div>
                <Progress value={100} className="bg-orange-100" />
                <div className="text-sm text-gray-600">Keep it going!</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Challenges */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <span>🎯</span>
                    <span>Today's Challenges</span>
                  </CardTitle>
                  <Link href="/challenges">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <CardDescription>Complete these tasks to earn points and make environmental impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayChallenges.map((challenge) => (
                    <div key={challenge.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{challenge.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold">{challenge.title}</h4>
                            <Badge variant={challenge.completed ? "default" : "secondary"} className="text-xs">
                              {challenge.completed ? "✓ Completed" : challenge.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{challenge.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-emerald-600">+{challenge.points} points</div>
                        {!challenge.completed && (
                          <Button size="sm" className="mt-2">Mark Complete</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <span>📚</span>
                    <span>Learning Progress</span>
                  </CardTitle>
                  <Link href="/learn">
                    <Button variant="outline" size="sm">Continue Learning</Button>
                  </Link>
                </div>
                <CardDescription>Track your progress across different environmental topics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningProgress.map((module, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{module.module}</h4>
                        <span className="text-xs text-gray-600">{module.lessons}</span>
                      </div>
                      <Progress value={module.progress} className="mb-2" />
                      <div className="text-xs text-emerald-600 font-semibold">{module.progress}% Complete</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Impact Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🌱</span>
                  <span>Your Impact</span>
                </CardTitle>
                <CardDescription>Environmental impact you've created this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} mb-2`}>
                        <span className="text-xl">{stat.icon}</span>
                      </div>
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.unit}</div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/impact">
                  <Button variant="outline" className="w-full mt-4">View Detailed Impact</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🏆</span>
                  <span>Recent Achievements</span>
                </CardTitle>
                <CardDescription>Your latest environmental milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-amber-50 rounded-lg">
                      <div className="text-xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{achievement.title}</div>
                        <div className="text-xs text-gray-600">{achievement.date}</div>
                      </div>
                      <div className="text-xs font-semibold text-amber-600">+{achievement.points}</div>
                    </div>
                  ))}
                </div>
                <Link href="/leaderboard">
                  <Button variant="outline" className="w-full mt-4">View All Achievements</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>⚡</span>
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/challenges">
                    <Button variant="outline" className="w-full text-xs py-2 h-auto flex flex-col space-y-1">
                      <span>🎯</span>
                      <span>New Challenge</span>
                    </Button>
                  </Link>
                  <Link href="/community">
                    <Button variant="outline" className="w-full text-xs py-2 h-auto flex flex-col space-y-1">
                      <span>👥</span>
                      <span>Community</span>
                    </Button>
                  </Link>
                  <Link href="/learn">
                    <Button variant="outline" className="w-full text-xs py-2 h-auto flex flex-col space-y-1">
                      <span>📚</span>
                      <span>Study</span>
                    </Button>
                  </Link>
                  <Link href="/impact">
                    <Button variant="outline" className="w-full text-xs py-2 h-auto flex flex-col space-y-1">
                      <span>📊</span>
                      <span>Analytics</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}