"use client";
import { Github } from "lucide-react";
import Link from "next/link"; // 👈 use Next.js Link
import React from "react";
import { projects } from "@/app/data";

const Projectcontext = () => {
  return (
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
                    <h3 className="font-semibold text-lg">{project.title}</h3>
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

      {/* Explore More Button → Go to page.jsx */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/projects" // 👈 this should point to your page.jsx route
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Projectcontext;
