import React from "react";
import Logo from "./components/layouts/Logo";

const loading = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
        
      <div className="animate-ping">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default loading;
