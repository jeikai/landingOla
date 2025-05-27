import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Star,
  Users,
  Award,
  BookOpen,
  Target,
  ArrowRight,
  Menu,
  X,
  Code,
  Zap,
  Trophy,
  CheckCircle,
} from "lucide-react";

const siteData = {
  brand: {
    name: "OlaClass",
    tagline: "FROM BIGTECH TO BIG OFFERS",
    description:
      "OlaClass cung cấp chương trình đào tạo trực tuyến chuyên nghiệp với Mentor cá nhân, giúp bạn phát triển kiến thức chuyên môn và kỹ năng thực tiễn. Chương trình được thiết kế để xây dựng lộ trình học tập bài bản, chuẩn bị cho bạn sẵn sàng bước vào thị trường công nghệ và nắm bắt cơ hội làm việc tại các công ty công nghệ hàng đầu.",
  },
  stats: {
    courses: "5+",
    experience: "2+",
    offers: "10+",
  },
  courses: [
    {
      id: 1,
      title: "Khóa 3in1 - Lập trình & Thực tập",
      duration: "4-5 tháng",
      target: "Sinh viên năm nhất và học sinh cấp 3",
      features: [
        "Xây dựng sản phẩm thực tế (website cá nhân, ứng dụng mini)",
        "Học thuật toán qua bài tập thực tiễn",
        "Chuẩn bị hồ sơ ứng tuyển thực tập công nghệ",
      ],
    },
    {
      id: 2,
      title: "Khóa 5in1 - Chuẩn Bị Phỏng Vấn",
      duration: "3 tháng",
      target: "Sinh viên năm 2-4",
      features: [
        "Luyện thuật toán, system design và kỹ năng phỏng vấn",
        "Hỗ trợ 1:1 từ xây dựng dự án, CV đến phỏng vấn thử",
        "Đồng hành đến khi bạn nhận được offer, không ràng buộc",
      ],
    },
    {
      id: 3,
      title: "Mentorship Program",
      duration: "Cá nhân hóa",
      target: "Đạt offer thực tập SWE 2026",
      features: [
        "Phát triển kỹ thuật và làm dự án thực tế",
        "Chuẩn bị CV và luyện phỏng vấn chuyên sâu",
        "Mentor cam kết đồng hành đến khi bạn đạt mục tiêu",
      ],
    },
  ],
  team: [
    {
      name: "Trúc",
      title: "Senior Mentor",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      experience: [
        "Kinh nghiệm mentor, nhiều offer mùa hè 2025: Microsoft, Morgan Stanley, Bank of America",
        "CS Teaching Assistant (2 năm Java, Data Structure) @ DePauw",
        "SWE Intern Microsoft (Summer 2023)",
        "SWE Fulltime Microsoft",
      ],
    },
    {
      name: "Dương",
      title: "Co-founder & CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      experience: [
        "Co-founder and CTO of HelloOcean - Education Website for Hola",
        "SWE Intern Amazon (AWS) (2022)",
        "SWE Intern SoFi (2023)",
        "Full-time Offer: SoFi (Former Fintech Unicorn)",
      ],
    },
    {
      name: "Duy",
      title: "Founder & Lead Mentor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      experience: [
        "Thủ khoa NTT - Á Khoa Tin Trường HN-Amsterdam",
        "Founder Persimmon + AIGlow (Outsource projects in Southeast Asia)",
        "SWE Intern Amazon, Microsoft",
        "Incoming SWE Fulltime Microsoft",
      ],
    },
    {
      name: "Hiếu",
      title: "Senior Mentor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      experience: [
        "SWE Intern Circle (Summer 2024)",
        "SWE Intern AffiniPay (Fall 2024)",
        "Full-time Offer Circle (Crypto Unicorn backed by Coinbase, Goldman Sachs, BlackRock)",
      ],
    },
  ],
  companies: [
    "Microsoft",
    "Amazon",
    "Bank of America",
    "Capital One",
    "Bain & Company",
  ],
  contact: {
    phone: "0378901937",
    facebook: "facebook.com/olaclass.aiglow",
    email: "olaclass.ai@gmail.com",
  },
};


const Navigation = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const NavigationMenu = ({ mobile = false }) => (
    <nav
      className={`${
        mobile ? "flex flex-col space-y-4" : "hidden md:flex space-x-8"
      }`}
    >
      {[
        { id: "home", label: "Home" },
        { id: "courses", label: "Lớp học" },
        { id: "team", label: "Our Team" },
        { id: "register", label: "Đăng ký" },
        { id: "contact", label: "Contact" },
      ].map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`transition-all duration-300 ${
            activeSection === id
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          } ${mobile ? "text-lg py-2" : ""}`}
        >
          {label}
        </button>
      ))}
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {siteData.brand.name}
          </div>

          <NavigationMenu />

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="pt-4">
              <NavigationMenu mobile />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full opacity-60 animate-bounce`}
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
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">
                  Khóa học chất lượng cao
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FROM BIGTECH
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  TO BIG OFFERS
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Chương trình đào tạo trực tuyến chuyên nghiệp với Mentor cá
                nhân, giúp bạn phát triển kiến thức chuyên môn và kỹ năng thực
                tiễn để làm việc tại các công ty công nghệ hàng đầu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("register")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  ĐĂNG KÝ KHÓA HỌC NGAY
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection("courses")}
                className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-black hover:bg-white/10 transition-all duration-300"
              >
                Xem Khóa Học
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                {
                  number: siteData.stats.courses,
                  label: "Coding Courses",
                  icon: BookOpen,
                },
                {
                  number: siteData.stats.experience,
                  label: "Years Experience",
                  icon: Trophy,
                },
                {
                  number: siteData.stats.offers,
                  label: "Big Tech Offers",
                  icon: Star,
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-3">
                    <stat.icon className="w-8 h-8 mx-auto text-blue-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-blue-400 text-sm font-mono">
                        const success = &#123;
                      </div>
                      <div className="text-white text-sm font-mono ml-4">
                        mentor:{" "}
                        <span className="text-green-400">
                          "BigTech Engineers"
                        </span>
                        ,
                      </div>
                      <div className="text-white text-sm font-mono ml-4">
                        result:{" "}
                        <span className="text-yellow-400">
                          "Dream Job Offers"
                        </span>
                      </div>
                      <div className="text-blue-400 text-sm font-mono">
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
                            className="w-8 h-8 rounded-full border-2 border-white/20"
                          />
                        ))}
                      </div>
                      <div className="text-white text-sm">
                        <div className="font-semibold">4+ Expert Mentors</div>
                        <div className="text-gray-400">
                          From Microsoft, Amazon & more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 shadow-xl animate-bounce">
                <Trophy className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-4 shadow-xl animate-pulse">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoursesSection = () => (
  <section
    id="courses"
    className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Chương Trình Đào Tạo
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Lộ trình học tập chuyên nghiệp từ cơ bản đến nâng cao, được thiết kế
          bởi các kỹ sư từ BigTech
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteData.courses.map((course, index) => (
          <div
            key={course.id}
            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div
                className={`p-3 rounded-2xl ${
                  index === 0
                    ? "bg-blue-100"
                    : index === 1
                    ? "bg-purple-100"
                    : "bg-green-100"
                } group-hover:scale-110 transition-transform duration-300`}
              >
                <BookOpen
                  className={`${
                    index === 0
                      ? "text-blue-600"
                      : index === 1
                      ? "text-purple-600"
                      : "text-green-600"
                  }`}
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                {course.title}
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Target className="mr-2" size={16} />
                <span className="text-sm font-medium">{course.duration}</span>
              </div>
              <p className="text-gray-700 font-medium bg-gray-50 rounded-lg p-3">
                {course.target}
              </p>
            </div>

            <ul className="space-y-3">
              {course.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);


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

const CompaniesSection = () => (
  <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Top Offers in the US 2025
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Các công ty hàng đầu mà học viên của chúng tôi đã nhận được offer, với
          mức lương từ $150k - $200k+
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {siteData.companies.map((company, index) => (
          <div
            key={index}
            className="group bg-white px-8 py-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
          >
            <span className="text-gray-800 font-bold text-lg group-hover:text-blue-600 transition-colors">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất có thể.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Đăng Ký Khóa Học
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Bắt đầu hành trình chinh phục BigTech của bạn ngay hôm nay. Chỉ còn
            vài click nữa thôi!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  placeholder="0123456789"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Khóa học quan tâm *
                </label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                >
                  <option value="" className="text-gray-900">
                    Chọn khóa học
                  </option>
                  <option value="3in1" className="text-gray-900">
                    Khóa 3in1 - Lập trình & Thực tập
                  </option>
                  <option value="5in1" className="text-gray-900">
                    Khóa 5in1 - Chuẩn Bị Phỏng Vấn
                  </option>
                  <option value="mentorship" className="text-gray-900">
                    Mentorship Program
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Tin nhắn (tùy chọn)
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none backdrop-blur-sm"
                placeholder="Chia sẻ mục tiêu hoặc câu hỏi của bạn..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ĐĂNG KÝ NGAY - MIỄN PHÍ TƯ VẤN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

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


const Footer = () => (
  <footer className="bg-black text-white py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          {siteData.brand.name}
        </div>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          {siteData.brand.tagline}
        </p>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500">
            © 2025 OlaClass. All rights reserved. Made with ❤️ for future
            BigTech engineers.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const OlaClassLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses", "team", "register", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <CoursesSection />
      <TeamSection />
      <CompaniesSection />
      <RegistrationForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default OlaClassLanding;
