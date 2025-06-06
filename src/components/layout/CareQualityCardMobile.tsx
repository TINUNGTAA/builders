import React, { useState } from "react";
import assets from "../../assets/assests";

interface Testimonial {
  title: string;
  description: string;
  name: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Carousel container for mobile */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full  flex-shrink-0">
              <div className="text-inter">
                <div className="w-[320px] h-[205px] mx-auto bg-white flex items-center justify-center border border-[#666666] rounded-lg">
                  <div className="w-[300px] h-[182px] border px-10 border-[#F0E1D3] rounded-lg">
                    <div className="mx-auto flex flex-col items-center space-y-3 text-center">
                      <h1 className="text-[12px] mt-2 font-extrabold">
                        {testimonial.title}
                      </h1>
                      <img src={assets.trust.stars} alt="Star rating" />
                      <p className="text-[10px] font-normal">
                        {testimonial.description}
                      </p>
                      <p className="font-semibold text-[12px]">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-brown" : "bg-[#D9D9D9]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
