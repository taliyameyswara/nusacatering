import { PhoneCall } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-white py-4 mt-auto bg-gradient">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} NusaCatering. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
