import React from "react";
import FadeInSection from "../components/FadeInSection";

export default function FadeInDemo() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl mb-8">Fade-in Demo</h1>

      {[1, 2, 3, 4, 5].map((n) => (
        <section key={n} className="mb-20">
          <FadeInSection className="bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl mb-4">Section {n}</h2>
            <p className="text-gray-300">
              This is an example paragraph to show the fade-in animation. Scroll to see more.
            </p>
          </FadeInSection>
        </section>
      ))}
    </div>
  );
}
