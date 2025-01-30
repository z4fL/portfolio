import React from "react";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-15 text-slate-200">
      <h4 className="font-fira-code text-xl font-semibold uppercase tracking-widest border-b border-b-slate-400">
        # Projects
      </h4>

      <div className="mt-5">
        <p className="font-general text-slate-300 mb-8">
          Some of the latest projects that I have developed myself or with my
          friends are:
        </p>
        <div className="mb-5">
          <div className="mb-4">
            <div className="bg-slate-950 p-3.5">
              <p className="font-inter font-semibold text-base">
                Chatbot Energy Eanagement
              </p>
              <p className="font-general text-sm text-slate-300 mt-2 mb-5">
                An application for managing user electricity usage by uploading
                historical data from the IoT server for analysis and can provide
                energy saving recommendations.
              </p>
              <p className="font-fira-code text-[10px]">
                Reactjs, TailwindCSS, Golang, Huggingface API, PostgreSQL
              </p>
              <div className="mt-6">
                <FiGithub className="h-5 w-auto text-slate-200" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-slate-950 p-3.5">
              <p className="font-inter font-semibold text-base">
                MPL ID Season 14 Winning Prediction
              </p>
              <p className="font-general text-sm text-slate-300 mt-2 mb-5">
                Application to predict game wins based on draft picks from
                Mobile Legend: Bang Bang in the MPL ID S14 tournament.
              </p>
              <p className="font-fira-code text-[10px]">
                Reactjs, TailwindCSS, Golang, Flask, Random Forest
              </p>
              <div className="mt-6">
                <FiGithub className="h-5 w-auto text-slate-200" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-slate-950 p-3.5">
              <p className="font-inter font-semibold text-base">Heroes</p>
              <p className="font-general text-sm text-slate-300 mt-2 mb-5">
                Wikipedia of Mobile Legends: Bang Bang based on design from
                Dota2 web with awesome design.
              </p>
              <p className="font-fira-code text-[10px]">
                Nextjs, TailwindCSS, Framer Motion, Prisma, PostgreSQL
              </p>
              <div className="mt-6">
                <FiGithub className="h-5 w-auto text-slate-200" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-slate-950 p-3.5">
              <p className="font-inter font-semibold text-base">
                Jual Beli Akun Game
              </p>
              <div className="-mt-1 font-fira-code text-[10px]">Team</div>
              <p className="font-general text-sm text-slate-300 mt-2 mb-5">
                A simple application for buying and selling various game
                accounts between seller and buyer. Flutter for Frontend and
                Laravel for Backend.
              </p>
              <p className="font-fira-code text-[10px]">Flutter, Laravel</p>
              <div className="mt-6">
                <FiGithub className="h-5 w-auto text-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <p className="font-general text-slate-300 mb-8">
          And other projects with my team are:
        </p>
        <div className="mb-5">
          <div className="mb-4">
            <div className="bg-slate-950 p-3.5">
              <p className="font-inter font-semibold text-base">SMEGA MART</p>
              <div className="-mt-1 font-fira-code text-[10px]">Team</div>
              <p className="font-general text-sm text-slate-300 mt-2 mb-5">
                SMKN 1 Purbalingga online retail store with COD payment.
              </p>
              <p className="font-fira-code text-[10px]">
                Laravel, Reactjs, TailwindCSS, Flowbite, MySQL, Cloudinary
              </p>
              <div className="mt-6">
                <FiGithub className="h-5 w-auto text-slate-200" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-slate-950 p-3.5">
              <p className="font-inter font-semibold text-base">BIMA HELM</p>
              <div className="-mt-1 font-fira-code text-[10px]">Team</div>
              <p className="font-general text-sm text-slate-300 mt-2 mb-5">
                A website to buy various brands of helmets. Warehouse stock
                management and monthly reports
              </p>
              <p className="font-fira-code text-[10px]">
                Laravel, Reactjs, TailwindCSS, Flowbite, MySQL, Cloudinary
              </p>
              <div className="mt-6">
                <FiGithub className="h-5 w-auto text-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
