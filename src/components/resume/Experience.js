import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fresher"
            subTitle="Scaler School Of Technology"
            result="Bangalore"
            des="Currently pursuing initial professional experience at Scaler School Of Technology, gaining hands-on skills and exposure to real-world projects in a dynamic tech environment."
          />
          {/* Uncomment and modify as needed for actual content
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="Malaysia"
            des="Contributed as a Web Developer and Trainer, creating innovative web solutions and training team members in cutting-edge technologies within a leading tech company."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="Worked as a Front-end Developer, delivering engaging user experiences and optimizing web interfaces for a globally recognized brand in a rapidly evolving market."
          />
          */}
        </div>
      </div>
      <div>
        {/* Uncomment and modify as needed for actual content
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="Dhaka"
            des="Guided clients in achieving fitness goals at Rainbow Gym Center, focusing on personalized training programs and promoting overall wellness."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="Canada"
            des="Developed web applications and taught web development courses, equipping students with practical skills and industry insights at SuperKing College."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="Nevada"
            des="Taught various subjects at Kingstar Secondary School, fostering a supportive learning environment and contributing to student academic growth."
          />
        </div>
        */}
      </div>
    </motion.div>
  );
};

export default Experience;
