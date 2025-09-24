"use client";
import { ChevronLeft, Github } from "lucide-react";
import React, { useState } from "react";


const projects = [
  {
    title: "Webinar.gg",
    desc: "Video streaming web app",
    status: "Live",
    tags: ["React Js", "Tailwind CSS", "Express Js", "Postgresql"],
    img: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
  },
  {
    title: "Supabase Rebuild",
    desc: "Landing page for Supabase",
    status: "Live",
    tags: ["Next Js", "Tailwind CSS"],
    img: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
  },
  {
    title: "Linear Rebuild",
    desc: "Landing page for Linear",
    status: "Live",
    tags: ["Next Js", "Tailwind CSS"],
    img: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
  },
  {
    title: "NFT",
    desc: "NFT website landing page",
    status: "Live",
    tags: ["Next Js", "Tailwind CSS", "Framer-Motion"],
    img: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
  },
];

const Projectcontext = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className="mx-auto text-white p-6 relative">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      {/* Show first 3 Live projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((project) => project.status === "Live")
          .slice(0, 3)
          .map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:bg-neutral-800 transition-colors"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Status */}
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            project.status === "Live"
                              ? "bg-green-400"
                              : "bg-yellow-400"
                          }`}
                        ></span>
                        <span
                          className={`relative inline-flex rounded-full h-3 w-3 ${
                            project.status === "Live"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        ></span>
                      </span>
                      <span
                        className={`text-sm ${
                          project.status === "Live"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Github Icon */}
                    <Github className="ml-2 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-neutral-700 text-gray-300 px-2 py-1 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Explore More
        </button>
      </div>

      {/* Full Screen Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        >
          {/* Header with back button */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-800">
            <div className="w-20"></div> {/* Spacer */}
            <h2 className="text-2xl font-bold">All Projects</h2>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <ChevronLeft /> Back
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {projects
                .filter((project) => project.status === "Live")
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:bg-neutral-800 transition-colors"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-lg">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">
                            {project.desc}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          {/* Status */}
                          <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                              <span
                                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                                  project.status === "Live"
                                    ? "bg-green-400"
                                    : "bg-yellow-400"
                                }`}
                              ></span>
                              <span
                                className={`relative inline-flex rounded-full h-3 w-3 ${
                                  project.status === "Live"
                                    ? "bg-green-500"
                                    : "bg-yellow-500"
                                }`}
                              ></span>
                            </span>
                            <span
                              className={`text-sm ${
                                project.status === "Live"
                                  ? "text-green-400"
                                  : "text-yellow-400"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>

                          {/* Github Icon */}
                          <Github className="ml-2 text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3 mt-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-neutral-700 text-gray-300 px-2 py-1 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Projectcontext;
