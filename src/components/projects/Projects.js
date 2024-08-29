import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree,projectFour } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Admin DashBoard Panel"
          des="A comprehensive dashboard panel for managing e-commerce operations, including product management, order tracking, and user analytics."
          src={projectOne}
          githubLink="https://github.com/Indrajeety993648/E-CommerceAdminDashBoard"
          liveLink=""
        />
        <ProjectsCard
          title="Yulu"
          des="An innovative bike-sharing app that allows users to locate, rent, and ride electric bikes in urban areas."
          src={projectThree}
          githubLink="https://github.com/Indrajeety993648/Yulu-Project"
          liveLink=""
        />
        <ProjectsCard
          title="Onebox-Frontend"
          des="Onebox-Frontend is a mailing platform designed for efficient communication. It allows users to manage emails seamlessly with a user-friendly interface. Developers with basic web development skills can contribute by creating features and submitting pull requests."
          src={projectFour}
          githubLink="https://github.com/Indrajeety993648/reachinbox-Frontened"
          liveLink="https://reachinbox-frontened.vercel.app/login"
        />
        <ProjectsCard
          title="Book My Show"
          des="A movie ticket booking platform where users can browse showtimes, book tickets, and read reviews for the latest films."
          src={projectTwo}
          githubLink="https://github.com/Indrajeety993648/BookmyshowfinalAssignment"
          liveLink=""
        />
        <ProjectsCard
          title="Quiz-App"
          des="An interactive quiz application where users can test their knowledge on various topics, track their scores, and challenge themselves with timed quizzes."
          src={projectTwo}
          githubLink="https://github.com/Indrajeety993648/QuizReact"
          liveLink="https://quiz-react-sepia-delta.vercel.app/"
        />

      </div>
    </section>
  );
};

export default Projects;
