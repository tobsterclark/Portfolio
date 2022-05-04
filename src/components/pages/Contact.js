import React, { forwardRef } from "react";

const Contact = forwardRef(({ onBackClick }, ref) => {
  return (
    <div ref={ref} className="w-screen h-screen text-red-500 flex items-center">
      <span className="w-full text-center">test</span>
    </div>
  );
});

export default Contact;
