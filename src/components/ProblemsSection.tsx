import React from 'react';
import problemImage from "../assets/hero/ProblemImage.png";



const ProblemsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f9f9f9] text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="w-full h-full flex justify-center">
            <img
              src={problemImage}
              alt="Problem with existing apps"
              className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[400px]"
            />
          </div>

          {/* Text Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-semibold text-left mb-6 pb-4 border-b border-[#743d58]/20">
              The Problems We Solve
            </h2>

            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-[#743d58] mb-2">High Subscription</h3>
                <p className="text-base leading-relaxed">
                  Other apps in the market have high subscription rates without offering the specific services that EVAC4ME brings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#743d58] mb-2">Non-Availability</h3>
                <p className="text-base leading-relaxed">
                  While disaster alert apps exist, they fail to guide users with actionable steps—leaving them with uncertainty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
