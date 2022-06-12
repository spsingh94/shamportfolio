import React from "react";
// import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import MCLAHero from "../images/annie2.jpg";
import {MCLAStack} from "../components/ImageStack/index";
import {Button} from "../components/Button";
import {Center} from "../components/Center";

function MCLA() {
  return (
    <div>
      <Hero backgroundImage={MCLAHero} id="mcla-hero">
        {/* <Navbar /> */}
        <Title id="page-title">Morse Code Learning Academy</Title>
      </Hero>
      <Container style={{fontSize:"20px"}}>
        <Title id="about-title">About the Project</Title>
        <h1>Introduction</h1>
        <p>
          Web application dedicated to teaching students with learning
          disabilities how to read, write, and do math with morse code. Morse
          Code Learning Academy finds a new way to help children in need through
          gamification.
        </p>
        <h3>My Role</h3>
        <p>
          My role in this project was to help create and design the Alien
          Invaders math morse code game. Creating avatars, players, and enemies
          with the use of Photoshop.
        </p>
        <p>
          Created the login page as well as the functionality. Connected
          login/signup page to MongoDB with Mongoose to pass credentials to
          database. Searched and located Google Authentication API to give users
          alternative method to login and signup.
        </p>
        <p>
          Front-End + User Experience -- Styled and designed game page for all
          games and game board for Alien Invaders math game.
        </p>
        <MCLAStack/>
        <h3>Capabilities</h3>
        <ul>
          <li>
            Create account with credentials or by logging in with your Gmail
            account.
          </li>
          <li>
            Play games that use morse code to teach basic reading, writing, and
            math skills. Games such as Tic Tac Toe, Code Collector, and Alien
            Invaders.
          </li>
          <li>Track your progress and find out how far you have come.</li>
        </ul>


        <h1>Tools</h1>
        <h4>Languages</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>C#</li>
        </ul>
        <h4>Layout</h4>
        <ul>
          <li>MERN (MongoDB, ExpressJS, ReactJS, NodeJS)</li>
          <li>Reactstrap</li>
        </ul>
        <h4>Styling/Designing</h4>
        <ul>
          <li>Bootstrap</li>
          <li>Google Material</li>
          <li>Photoshop</li>
        </ul>
        <h4>Database</h4>
        <ul>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
        <h4>API's</h4>
        <ul>
          <li>Google Authentication</li>
        </ul>
        <h4>External Engines</h4>
        <ul>
          <li>Unity</li>
        </ul>
        <h1>Challenges</h1>
        <p>
          As a group we decided to implement Handlebars into our project. We
          This project was a continuation of a project that was created before
          with just HTML, CSS, and Javascript so we had to refactor the code
          into ReactJS. The code for the Tic Tac Toe and Code Collector game was
          already created and it contained a large amount of code. This was very
          difficult and very time consuming.
        </p>
        <p>
          Creating the Alien Invaders math game was also challenging because it
          required a lot of attention and it was created from scratch with pure
          javascript. We also spent a lot of time trying to use different
          methods to build the game and because of that a lot of time was wasted
          on simply getting the game operational.
        </p>
        <h1>Mindset</h1>
        <h3>Goals</h3>
        <p>
          Goal of the project was to get a fully functioning web application
          that children with disabilities can access at anytime and learn
          through gamification. We also wanted to make sure that the children
          can access their progress over time and see how far they have come.
          According to statistics, children find it easier to learn through
          gamification so our goal was to also make it an easy and fun
          experience for them.
        </p>

        <h3>Methodology</h3>
        <ol>
          <li>Refactoring the code into ReactJS.</li>
          <li>
            Discussing what type of game should be created to teach children
            with disabilities math and how to tie in morse code.
          </li>
          <li>
            Decided to work on the game first and then back track on any loose
            ends.
          </li>
          <li>
            Focused on the game and attempted to find different ways to get it
            running the way we wanted.
          </li>
          <li>
            Created the game and then worked on the game page that folded the
            game.
          </li>
          <li>
            Created login page which would allow the user to connect to their
            unique profile page by logging in to track their progress.
          </li>
          <li>
            Located Google Authentication API giving the user an alternative
            method to signing up and logging into their account. The user could
            now login with their Gmail accounts.
          </li>
          <li>Finished styling and mobile accessibility styling.</li>
        </ol>

        <h1>Target Audience</h1>
        <p>
          The target audience are students with disabilities and parents. We
          wanted to give these students that struggle to learn basic reading,
          writing, and mathematic skills a platform which they can continuously
          go back to and keep on learning and studying as much as they need.
        </p>
        <p>
          For parents we wanted to give them an alternative to help their
          children. It is true that school cannot help every child and that some
          children need special guidance or they need to be taught a different
          way. Morse Code Learning Academy is the different way.
        </p>

        <h1>Reflection</h1>
        <p>
          Morse Code Learning Academy is a very demanding and time consuming
          project that has great potential to help children in need.
        </p>
        <p>
          Over time we wish to implement more learning techniques and more
          games. We would also like to implement more levels and leaderboards,
          allowing children to feel a sense of accomplishment and competition.
        </p>
        <p>
          I would like to work more on creating games with javascript to better
          understand the flow of large amounts of code.
        </p>
        <Center>
          <Title id="sub-title">View More</Title>
        </Center>
        <Center>
          <Button to="/workbooks">Work Books</Button>
          <Button to="/socfit">Social Fit</Button>
        </Center>
      </Container>
    </div>
  );
}

export default MCLA;
