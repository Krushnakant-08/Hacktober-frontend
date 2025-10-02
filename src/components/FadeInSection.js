import React from "react";

export default function FadeInSection({ children, className = "" }) {
  return (
    <div className={`fade-in ${className}`}>{children}</div>
  );
}
