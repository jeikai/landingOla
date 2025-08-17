import React from "react";
import { Phone, Mail, Facebook } from "lucide-react";
import { siteData } from "../data/siteData.js";

const ContactSection = () => (
  <section
    id="contact"
    className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Liên Hệ Với Chúng Tôi
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Có câu hỏi về khóa học? Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn
          24/7
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Phone,
            title: "Điện Thoại",
            info: siteData.contact.phone,
            color: "from-green-400 to-blue-500",
          },
          {
            icon: Facebook,
            title: "Facebook",
            info: siteData.contact.facebook,
            color: "from-blue-400 to-purple-500",
          },
          {
            icon: Mail,
            title: "Email",
            info: siteData.contact.email,
            color: "from-purple-400 to-pink-500",
          },
        ].map((contact, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <div
              className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <contact.icon className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              {contact.title}
            </h3>
            <p className="text-gray-300 text-center break-all">
              {contact.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;