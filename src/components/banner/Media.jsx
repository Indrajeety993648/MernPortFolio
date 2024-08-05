import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from 'react-icons/io'; // Latest Twitter icon
import { SiReact, SiNextdotjs, SiTailwindcss, SiJava, SiNodedotjs, SiMysql } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {/* <span className="bannerIcon">
              <FaFacebookF />
            </span> */}
            <a href="https://twitter.com/@INDRAJEETY67655" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <IoLogoTwitter title="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/indrajeet-yadav-5619b8283/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaLinkedinIn title="LinkedIn" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="bannerIcon">
              <SiJava title="Java" />
            </span>
            <span className="bannerIcon">
              <SiReact title="React" />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs title="Node.js" />
            </span>
            <span className="bannerIcon">
              <SiMysql title="MySQL" />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss title="Tailwind CSS" />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs title="Next.js" />
            </span>
            <span className="bannerIcon">
              <span>DSA</span> {/* Placeholder for Data Structures */}
            </span>
          </div>
        </div>
      </div>
  );
}

export default Media;
