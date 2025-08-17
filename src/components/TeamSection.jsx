import React from "react";
import { Star } from "lucide-react";
import { siteData } from "../data/siteData.js";

const TeamSection = () => (
  <section id="team" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Đội Ngũ Mentor
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Học từ những chuyên gia hàng đầu đang làm việc tại các công ty công
          nghệ lớn nhất thế giới
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {siteData.team.map((member, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <div className="flex items-start mb-6">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="ml-6 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.title}
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-500">BigTech Expert</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {member.experience.map((exp, expIndex) => (
                <div key={expIndex} className="flex items-start group/item">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-purple-500 transition-colors"></div>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {exp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;