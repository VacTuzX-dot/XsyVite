// Import CSS
import "../style/index.css";
// Import other things that require
import React from "react";
import { Button } from "flowbite-react";

const About: React.FC = () => {
  return (
    <>
      <div>
        <h1>About Us</h1>
        <Button href="/about/leo">Leo</Button>
        <Button href="/about/nice">Nice</Button>
      </div>
    </>
  );
};

export default About;
