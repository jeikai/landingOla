import React from "react";
import { BookOpen, Target, CheckCircle, ArrowRight, X} from "lucide-react";
import { siteData } from "../data/siteData.js";
import CourseDetailModal from "./CourseDetailModal.jsx";
import { useState } from "react";

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
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
                onClick={() => handleCourseClick(course)}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-2xl ${
                      index === 0
                        ? "bg-blue-100"
                        : index === 1
                        ? "bg-purple-100"
                        : index === 2
                        ? "bg-green-100"
                        : index === 3
                        ? "bg-orange-100"
                        : "bg-gray-100"
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    <BookOpen
                      className={`${
                        index === 0
                          ? "text-blue-600"
                          : index === 1
                          ? "text-purple-600"
                          : index === 2
                          ? "text-green-600"
                          : index === 3
                          ? "text-orange-600"
                          : "text-gray-600"
                      }`}
                      size={24}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600">{course.subtitle}</p>
                  </div>
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

                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  <span>Xem chi tiết</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseDetailModal 
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default CoursesSection;