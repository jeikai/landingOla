import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  Trophy,
  Star,
  Zap,
  Code,
  CheckCircle,
  Users,
} from "lucide-react";
import { siteData } from "../data/siteData.js";

const HeroSection = ({ scrollToSection }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-800 via-cyan-900 to-blue-900 w-[100]"
      style={{
        background: `linear-gradient(135deg, 
          #003140 0%, 
          #00587C 25%, 
          #00ABFD 50%,
          #71D9FF 75%, 
          #CDFFF 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-cyan-200 rounded-full opacity-60 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-300/30">
                <Zap className="w-5 h-5 mr-2 text-cyan-300" />
                <span className="text-sm font-medium text-cyan-100">
                  Lộ trình cá nhân hóa - Mentorship 1:1
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                  OLACLASS
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  ĐÀO TẠO
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  LẬP TRÌNH VIÊN
                </span>
              </h1>

              <p className="text-xl text-cyan-100 leading-relaxed max-w-2xl">
                OlaClass đào tạo lập trình viên chuyên nghiệp qua lộ trình cá
                nhân hóa, từ Easy đến Medium, kèm Mentorship 1:1, học cùng kỹ sư
                tại Microsoft, TikTok, FPT Software, Viettel... Giúp bạn trở
                thành lập trình viên chuyên nghiệp và có việc làm ngay sau khóa
                học.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("register")}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  ĐĂNG KÝ KHÓA HỌC NGAY
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection("courses")}
                className="px-8 py-4 border-2 border-cyan-300/40 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full font-semibold text-cyan-100 hover:bg-cyan-500/20 hover:border-cyan-300/60 transition-all duration-300"
              >
                Xem Lộ Trình Học
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                {
                  number: "5+",
                  label: "Lộ trình học",
                  icon: BookOpen,
                },
                {
                  number: "3+",
                  label: "Năm kinh nghiệm",
                  icon: Trophy,
                },
                {
                  number: "100+",
                  label: "Học viên thành công",
                  icon: Star,
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-3">
                    <stat.icon className="w-8 h-8 mx-auto text-cyan-300 group-hover:text-teal-300 transition-colors" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cyan-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-cyan-300/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Code className="w-6 h-6 text-cyan-300" />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20">
                      <div className="text-cyan-300 text-sm font-mono">
                        const learningPath = &#123;
                      </div>
                      <div className="text-white text-sm font-mono ml-4">
                        level:{" "}
                        <span className="text-teal-300">"Easy → Medium"</span>,
                      </div>
                      <div className="text-white text-sm font-mono ml-4">
                        mentorship:{" "}
                        <span className="text-cyan-300">"1:1 Support"</span>,
                      </div>
                      <div className="text-white text-sm font-mono ml-4">
                        companies:{" "}
                        <span className="text-blue-300">
                          "Microsoft, TikTok..."
                        </span>
                        ,
                      </div>
                      <div className="text-white text-sm font-mono ml-4">
                        outcome:{" "}
                        <span className="text-green-300">"Dream Job"</span>
                      </div>
                      <div className="text-cyan-300 text-sm font-mono">
                        &#125;;
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        {siteData.team.slice(0, 3).map((member, i) => (
                          <img
                            key={i}
                            src={member.image}
                            alt={member.name}
                            className="w-10 h-10 rounded-full border-2 border-cyan-300/40"
                          />
                        ))}
                      </div>
                      <div className="text-white text-sm">
                        <div className="font-semibold text-cyan-100">
                          4+ Expert Mentors
                        </div>
                        <div className="text-cyan-200">
                          Từ Microsoft, TikTok, FPT Software...
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4 border border-cyan-400/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-cyan-300" />
                        <span className="text-cyan-100 font-semibold">
                          Lộ trình cá nhân hóa
                        </span>
                      </div>
                      <p className="text-cyan-200 text-sm">
                        Từ Easy đến Medium - Phù hợp với mọi trình độ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-4 shadow-xl animate-bounce">
                <Trophy className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-4 shadow-xl animate-pulse">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -top-2 -left-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl p-3 shadow-lg animate-pulse delay-500">
                <Code className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
