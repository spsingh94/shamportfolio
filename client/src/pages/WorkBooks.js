import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import BooksBanner from "../images/bluebook.jpg";
import Hero from "../components/Hero";
import { Title } from "../components/Title";
import { BooksStack } from "../components/ImageStack/index";
import Button from "../components/Button";
import {Center} from "../components/Center";

function WorkBooks() {
  return (
    <>
      <Hero backgroundImage={BooksBanner}>
        <Navbar />
        <Title id="page-title">Work Books</Title>
      </Hero>
      <Container style={{fontSize:"23px", fontFamily:"'Pathway Gothic One', sans-serif"}}>
      <Title id="about-title">About the Project</Title>
        <h1>Introduction</h1>
        <p>
          Web Books is an organizational tool for entrepreneurs/business owners
          to better assess their finances and investments.
        </p>
        <h3>My Role</h3>
        <p>
          Working on creating a platform in which the user can update, add, or
          delete important information from a table at anytime by connecting the
          page to a database (MongoDB).
        </p>
        <p>
          Help give the user a place where they can access financial information
          such as the stock market, cryptocurrency, and currency conversion
          rates in different countries.
        </p>
        <p>
          Creating the cryptocurrency table which lets the user search and
          locate cryptocurrency prices as needed with the help of an external
          cryptocurrency API.
        </p>
        <p>Connecting created table to external API.</p>
        <p>
          Refatoring code from simple HTML, CSS, and Javascript files to React
          Components and Pages.
        </p>

        <BooksStack />

        <h3>Capabilities</h3>
        <ul>
          <li>Search and locate the names and share rates of stocks.</li>
          <li>
            Search and locate the names and conversion rate of currency from
            different countries.
          </li>
          <li>Search and locate the names and prices of cryptocurrency.</li>
          <li>
            Instantly add, update, or save important information found from the
            currency or stock tables.
          </li>
          <li>Save your favorite workouts and recipes for later.</li>
        </ul>

        <h1>Tools</h1>
        <h4>Basics</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <h4>Layout</h4>
        <ul>
          <li>MERN (MongoDB, ExpressJS, ReactJS, NodeJS)</li>
          <li>Reactstrap</li>
        </ul>
        <h4>Styling/Designing</h4>
        <ul>
          <li>Bootstrap</li>
          <li>Materialize CSS</li>
          <li>Photoshop</li>
        </ul>
        <h4>Database</h4>
        <ul>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
        <h4>API's</h4>
        <ul>
          <li>Stock Market</li>
          <li>Currency Converter</li>
          <li>Cryptocurrency</li>
        </ul>
        <h1>Challenges</h1>
        <p>
          There were two things that were challenging in regards to this
          project. The first things that was challenging was the MVC
          (Model-View-Controller) because of the files that are required to use
          MongoDB through Mongoose. Understanding how the data was retrieved,
          stored and used made things especially complicated because to better
          understand it you must understand what is being achieved in each file.
        </p>
        <p>
          The other part that was difficult was refactoring code from a
          different repo into the repo of this project. This was mostly
          difficult because the code that was retrieved from another repo was
          created in simple HTML, CSS, and Javscript files, which meant that I
          would have to refactor them to work properly on React.
        </p>
        <h1>Mindset</h1>
        <h3>Goals</h3>
        <p>
          The main goal of this project was to give business owners and
          entrepreneurs a tool which allows them to better organize information
          to help with day-to-day finance goals.
        </p>
        <p>
          We know that it can be tough to gather financial information for
          business owners and entrepreneurs. We hope to make a platform which
          lets the user gather the financial information and store it instantly
          for future use. We hoped to find a way to save time, because time is
          money.
        </p>

        <h3>Methodology</h3>
        <ol>
          <li>
            Coming up with ideas on how to create a new application using code
            from previous project to create a new project that holds more value
            for entrepreneurs.
          </li>
          <li>Refactor code from previous project into React App.</li>
          <li>
            Create table that connects to database (MongoDB) with the help of
            Mongoose that allows the user to add, update, or delete important
            information.
          </li>
        </ol>

        <h1>Target Audience</h1>
        <p>
          The tragetted audience for this project is entrepreneurs and business
          owners that often travel or invest. We also wanted to target the
          audience that is new to investing, allowing them to view stocks and
          cryptocurrency prices while storing information to keep track of
          possible future investments.
        </p>

        <h1>Reflection</h1>
        <p>
          This project was orginially two projects that I completed in the past.
          I personally believe that combining these two projects together can
          hold great value to investers and travelers.
        </p>
        <p>
          I would like to work more on the styling for this project and make it
          more user friendly. I would also like to potentially integrate more
          finiancial tools in hopes to make it a hub for fininancial information
          and data. Overall, I believe this project is a great concept and it
          has great potential as an entrepreneurs sidekick.
        </p>
        <br/>
        <Center>
        <Title id="sub-title">View More</Title>
        </Center>
        <br/>
        <Center>
          <Button to="/socfit">
            Social Fit
          </Button>
          <Button to="/mcla">
            MCLA
          </Button>
        </Center>
      </Container>
    </>
  );
}

export default WorkBooks;
