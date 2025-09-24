"use client";
import { Github, ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { projects } from "@/app/data";

const ProjectsPage = () => {
  return (

    <>
     <div className="bg-gradient-to-b from-black via-gray-700 to-black">
      <div
      className="min-h-screen flex flex-col  text-white"
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
        <Link
          href="/"
          className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <ChevronLeft /> Back
        </Link>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects
            .filter((project) => project.status === "Live")
            .map((project, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:bg-neutral-800 transition-colors"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover cursor-pointer"
                  />
                </a>
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
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="ml-2 text-gray-400 hover:text-white cursor-pointer" />
                      </a>
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
      </div>  

     
    </>
    
  );
};

export default ProjectsPage;
