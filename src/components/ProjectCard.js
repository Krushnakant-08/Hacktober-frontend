import React from "react";
import "../App.css";
import GlareHover from "./GlareHover";
import { useTilt } from "../hooks/useTilt";

export default function ProjectCard({ title, description, image, link }) {
  const { style, onMouseMove, onMouseLeave } = useTilt({
    max: 8,
    perspective: 1000,
    scale: 1.02,
    speed: 400,
  });

  return (
    <div
      className="bg-[rgba(36,12,60,0.78)] rounded-[1.2rem] shadow-lg shadow-purple-500/8 hover:shadow-purple-500/25 border-[1.5px] border-purple-500/[0.22] hover:border-purple-400/35 p-8 pb-6 my-5 flex flex-col items-center min-w-[300px] max-w-[500px] relative overflow-hidden preserve-3d backface-hidden z-10 transition-all duration-400 isolate hover:after:opacity-100 after:content-[''] after:absolute after:inset-[-1px] after:rounded-inherit after:bg-gradient-to-tr after:from-purple-500/[0.06] after:to-60% after:to-transparent after:translate-z-1 after:pointer-events-none after:transition-opacity after:duration-300 after:opacity-0 hover:bg-[rgba(46,20,70,0.84)]"
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-20 h-20 object-cover rounded-lg mb-5 shadow-md shadow-purple-500/10 transition-shadow duration-200 translate-z-20 hover:shadow-lg hover:shadow-purple-500/20" 
        />
      )}
      <div className="w-full text-center translate-z-30">
        <h2 className="text-2xl font-semibold mb-2.5 text-purple-100 tracking-wide transition-colors">{title}</h2>
        <p className=" text-gray-300 mb-4 min-h-[48px] text-xl">{description}</p>
        {link && (
          <div className="flex justify-center w-full">
            <GlareHover
              width="auto"
              height="100%"
              background="rgba(60, 18, 90, 0.18)"
              borderRadius="0.7rem"
              borderColor="rgba(180, 0, 255, 0.26)"
              glareColor="#C084FC"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={1200}
              playOnce={false}
              className="inline-block translate-z-40"
            >
              <a
                href={link}
                className="text-inherit no-underline font-medium text-sm px-5 py-2.5 rounded-[0.7rem] whitespace-nowrap transform transition-transform duration-200 hover:scale-105"
              >
                View Project →
              </a>
            </GlareHover>
          </div>
        )}
      </div>
    </div>
  );
}