import React from "react";

const Education = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center py-4 px-6 border border-zinc-800 rounded-md gap-4 mt-3 hover:scale-105 transition-all shadow-lg">
        <div className="flex flex-col flex-grow">
          <h3 className="text-md font-semibold text-white">
            Vishwakarma Institute of Technology, Pune
          </h3>
          <p className="text-md text-gray-400">
            Bachelor of Technology - Electronics and Telecommunications
            Engineering
          </p>
        </div>
        <div className="text-right flex flex-col items-end">
          <p className="text-md text-gray-400">2023 - 2026</p>
          <p className="text-md text-gray-400">
            <span className="font-semibold">CGPA:</span> 8.27
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center py-4 px-6 border border-zinc-800 rounded-md gap-4 mt-3 hover:scale-105 transition-all shadow-lg">
        <div className="flex flex-col flex-grow">
          <h3 className="text-md font-semibold text-white">
            Puranmal Lahoti Government Polytechnic, Latur
          </h3>
          <p className="text-md text-gray-400">
            Diploma in Electronics Engineering
          </p>
        </div>
        <div className="text-right flex flex-col items-end">
          <p className="text-md text-gray-400">2020 - 2023</p>
          <p className="text-md text-gray-400"> 90.16 %</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
