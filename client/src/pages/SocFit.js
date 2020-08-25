import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { Title } from "../components/Title";
import Hero from "../components/Hero";
import RunForever from "../images/bluerunning.jpg";

function SocFit() {
  return (
    <>
      <Hero backgroundImage={RunForever}>
        <Navbar />
        <Title id="page-title">Social Fit</Title>
      </Hero>
      <Container>
        <h3>About the Project</h3>
        <h5>Introduction</h5>
        <p>
          A social media app designed to allow users to reach their fitness
          goals. A platform which encourages and motivates users with the help
          of work out routines and meal recipes, as well as friends and family
          members.
        </p>
        <h5>My Role</h5>
        <p>
          My role in this project was to create a shell for the web application
          so that it would be easier on the rest of the team to incorporate
          API's and data from databases.
        </p>
        <p>
          I focused heavily on the user interface and ensured that the pages
          where organized and mobile device compatible.
        </p>
        <p>
          With the help of my experience using photoshop, I worked on creating
          the logo, accolades, and other designs to give the application a
          modern look.
        </p>
        <p>
          After designing the web application I assisted my team memebers with
          integrating external API's as well as the mySQL database into the
          code. I was responsible for generating a unique profile for users when
          they login and signup with their credentials. Unique profile would be
          fetched from mySQL with the help of Sequelize from the database.
        </p>

        <h5>Capabilities</h5>
        <ul>
          <li>Set goals with goal setter tool on profile home page.</li>
          <li>Locate healthy recipes based off of your specific diet.</li>
          <li>Locate work outs based off of your workout routines.</li>
          <li>Save your favorite workouts and recipes for later.</li>
          <li>
            Visit friends and family members Social Fit profile to get a better
            look at their fitness goals and their diet and workout routines.
          </li>
          <li>
            Get rewarded for your progress when reaching your goals through our
            accolades system.
          </li>
        </ul>

        <h5>Tools</h5>
        <h6>Layout</h6>
        <ul>
          <li>Handlebars</li>
        </ul>
        <h6>Styling/Designing</h6>
        <ul>
          <li>Bootstrap</li>
          <li>Materialize CSS</li>
          <li>Photoshop</li>
        </ul>
        <h6>Database</h6>
        <ul>
          <li>mySQL</li>
          <li>Sequelize</li>
        </ul>
        <h6>API's</h6>
        <ul>
          <li>Nutrition</li>
          <li>Workout Routines</li>
        </ul>
        <h5>Challenges</h5>
        <p>
          Social Fit was the first project that I worked extensively on. This in
          itself was a challenge and it exposed me to many new things.
        </p>
        <p>
          As a group we decided to implement Handlebars into our project. We
          were unfamiliar with the use and were confused by the syntax and
          functionality. When beginning the project, due to our unfamiliarity,
          there was a learning curve. With very little knowledge on the of
          Handlebars syntax and functionality, a lot of time was used on
          understanding how to use it prior to implementing it.
        </p>
        <p>
          The signup page required a connection to the Back-End which would save
          and fetch a users unique profile depending on the credentials entered
          at the login/signup page. This was also a challenge because it
          required a lot of code that I knew existed but did not understand the
          flow of at the time.
        </p>
        <h3>Mindset</h3>
        <h5>Goals</h5>
        <p>
          Our goal was to create a web appliction for users to not only just go
          online and chat with their friends but also to take a step forward in
          their lives. Primarily, we wanted to create something that had meaning
          and would actually help someone.
        </p>
        <p>
          To ensure that we reached our goal of helping others we realized that
          it was important that once a user created an account, they would
          frequently return to their account. To ensure that the user would
          return, we created new goals which were to encourage and motivate the
          user.
        </p>

        <h5>Methodology</h5>
        <ol>
          <li>
            Discussion on whether or not we should implement Handlebars. We were
            worried about the learning curve but we were adamant on implementing
            it and overcoming the learning curve.
          </li>
          <li>Created Handlebars pages to distinguish reusable code.</li>
          <li>
            Coded nonreusable code for HTML pages and gave it the necessary
            styling (CSS) and functionality (Javascript).
          </li>
          <li>Helped team fetch information from API's</li>
          <li>Created login/signup page for returning and new users.</li>
        </ol>

        <h5>Target Audience</h5>
        <p>
          This type of social media web application caters to many and all
          groups of people. The main group of people that we targetted were
          those that lack encouragement and motivation in meeting their fitness
          goals.
        </p>
        <p>
          As we progressed deeper into the project and came up with new ideas to
          help the user we decided to use an API that contains workout routines
          and meal recipes. This decision created a larger spectrum of people
          that can use Social Fit. For example, a user may not workout but may
          want to eat healthy, or a user may care about both their workout
          routine and their diet. Overall, it is clear that any man or woman can
          use Social Fit.
        </p>

        <h5>Reflection</h5>
        <p>
          Everyone that was involved with this project was receiving an
          opportunity to work on a fully functional web application for the
          first time. Based off of our experience level at the time, I was very
          proud for all the work that we accomplished. Although, the project was
          not the best, it was something that we all worked really hard on.
        </p>
        <p>
          My favorite part of working with my team on this project was that we
          all gave amazing ideas and we worked as a unit. The most extraordinary
          aspect of the project was how it evolved. It first began as a simple
          social media application, allowing the user to update their goals and
          share them with others at any time. It soon became a fitness tracker,
          a motivational piece, a cook book, and a workout guide. I admired my
          team members passion on this project and would work with them again at
          any time.
        </p>
      </Container>
    </>
  );
}

export default SocFit;
