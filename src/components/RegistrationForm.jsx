import React, { useState } from "react";

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

export default RegistrationForm;