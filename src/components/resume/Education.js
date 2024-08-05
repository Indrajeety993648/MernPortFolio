import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="High School from Jawahar Navodaya Vidyalaya"
            subTitle="District 3rd topper (2020) "
            result="94%"
            des="Completed high school education with a strong academic performance, ranking 3rd in the district. The curriculum included a broad range of subjects designed to provide a solid foundation for further education."
          />
          <ResumeCard
            title="InterMediate From Jawahar Navodaya  Vidyalaya"
            subTitle="District 11th Rank (2022)"
            result="95%"
            des="Pursued intermediate education with a focus on advanced subjects, achieving an 11th rank in the district. The program emphasized preparing students for higher education and specialized career paths."
          />
          <ResumeCard
            title="B.Sc in Computer Science + M.sc in Computer Science"
            subTitle=" from Bits -Pilani (2023 -2026) + Woolf University (U.S)(2026 -2027)"
            result="8.5/10"
            des="Currently enrolled in a Bachelor of Science program in Computer Science at BITS Pilani. The course covers core areas of computer science including algorithms, programming, data structures, and system design, aimed at equipping students with practical and theoretical knowledge in the field."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div> */}
      {/* </div> */}
    </motion.div>
  );
}

export default Education