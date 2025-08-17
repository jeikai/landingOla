import React, { useState } from "react";
import { BookOpen, Target, CheckCircle, ArrowRight, X } from "lucide-react";

const CourseDetailModal = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white  max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white  border-gray-200 p-6 rounded-t-3xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{course.title}</h2>
              <p className="text-lg text-gray-600 mt-1">{course.subtitle}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center text-gray-600">
              <Target className="mr-3" size={20} />
              <div>
                <span className="font-medium text-gray-900">Thời gian:</span>
                <span className="ml-2">{course.duration}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen className="mr-3" size={20} />
              <div>
                <span className="font-medium text-gray-900">Đối tượng:</span>
                <span className="ml-2">{course.target}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mô tả khóa học</h3>
            <p className="text-gray-700 leading-relaxed">{course.detailContent.description}</p>
          </div>

          {course.detailContent.highlights && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Điểm nổi bật</h3>
              <div className="grid gap-3">
                {course.detailContent.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start bg-green-50 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{course.detailContent.curriculum}</h3>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Bạn sẽ nhận được gì khi học {course.title}</h4>
              <div className="space-y-3">
                {course.detailContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-2">Sẵn sàng bắt đầu hành trình?</h4>
            <p className="mb-4 opacity-90">Đăng ký ngay để nhận tư vấn miễn phí</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Đăng ký tư vấn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal