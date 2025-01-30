import React from "react";

const TechStack = () => {
  return (
    <section
      id="skills"
      className="py-15 flex flex-col text-slate-200"
    >
      <h4 className="font-fira-code text-xl font-semibold uppercase tracking-widest border-b border-b-slate-400">
        # Skills
      </h4>

      <div className="mt-5 flex flex-col space-y-7">
        <div className="bg-slate-950 p-3.5 flex flex-col items-center ">
          <h4 className="mb-2 font-general font-base uppercase">Frontend</h4>
          <div className="flex justify-center space-x-3">
            <img
              src="/assets/nextjs-icon.png"
              alt="nextjs"
              className="w-auto h-9"
            />
            <img
              src="/assets/reactjs-icon.png"
              alt="reactjs"
              className="w-auto h-9"
            />
            <img
              src="/assets/flutter-icon.png"
              alt="flutter"
              className="w-auto h-9"
            />
          </div>
        </div>
        <div className="bg-slate-950 p-3.5 flex flex-col items-center ">
          <h4 className="mb-2 font-general font-base uppercase">Backend</h4>
          <div className="flex justify-center space-x-3">
            <img
              src="/assets/golang-icon.png"
              alt="golang"
              className="w-auto h-9"
            />
            <img
              src="/assets/laravel-icon.png"
              alt="laravel"
              className="w-auto h-9"
            />
          </div>
        </div>
        <div className="bg-slate-950 p-3.5 flex flex-col items-center ">
          <h4 className="mb-2 font-general font-base uppercase">AI Tools</h4>
          <div className="flex justify-center space-x-3">
            <img
              src="/assets/huggingface-icon.png"
              alt="huggingface"
              className="w-auto h-9"
            />
          </div>
        </div>
        <div className="bg-slate-950 p-3.5 flex flex-col items-center ">
          <h4 className="mb-2 font-general font-base uppercase">Database</h4>
          <div className="flex justify-center space-x-3">
            <img
              src="/assets/postgresql-icon.png"
              alt="postgresql"
              className="w-auto h-9"
            />
            <img
              src="/assets/mysql-icon.png"
              alt="mysql"
              className="w-auto h-9"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
