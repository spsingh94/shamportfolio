import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import BooksBanner from "../images/bluebook.jpg";
import Hero from "../components/Hero";
import { Title } from "../components/Title";

function WorkBooks() {
  return (
    <>
      <Hero backgroundImage={BooksBanner}>
        <Navbar />
        <Title id="page-title">Work Books</Title>
      </Hero>
      <Container>
        <h3>About the Project</h3>
        <h5>Introduction</h5>
        <p>
          Web Books is an organizational tool for entrepreneurs/business owners
          to better assess their finances and investments.
        </p>
        <h5>My Role</h5>
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
        <p>
          Connecting created table to external API.
        </p>
        <p>
          Refatoring code from simple HTML, CSS, and Javascript files to React
          Components and Pages.
        </p>

        <h5>Capabilities</h5>
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

        <h5>Tools</h5>
        <h6>Layout</h6>
        <ul>
          <li>MERN (MongoDB, ExpressJS, ReactJS, NodeJS)</li>
          <li>Reactstrap</li>
        </ul>
        <h6>Styling/Designing</h6>
        <ul>
          <li>Bootstrap</li>
          <li>Materialize CSS</li>
          <li>Photoshop</li>
        </ul>
        <h6>Database</h6>
        <ul>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
        <h6>API's</h6>
        <ul>
          <li>Stock Market</li>
          <li>Currency Converter</li>
          <li>Cryptocurrency</li>
        </ul>
        <h5>Challenges</h5>
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
        <h3>Mindset</h3>
        <h5>Goals</h5>
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

        <h5>Methodology</h5>
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

        <h5>Target Audience</h5>
        <p>
          The tragetted audience for this project is entrepreneurs and business
          owners that often travel or invest. We also wanted to target the
          audience that is new to investing, allowing them to view stocks and
          cryptocurrency prices while storing information to keep track of
          possible future investments.
        </p>

        <h5>Reflection</h5>
        <p>
          This project was orginially two projects that I completed in the
          past. I personally believe that combining these two projects
          together can hold great value to investers and travelers.
        </p>
        <p>
          I would like to work more on the styling for this project and make it
          more user friendly. I would also like to potentially integrate more
          finiancial tools in hopes to make it a hub for fininancial information
          and data. Overall, I believe this project is a great concept and it
          has great potential as an entrepreneurs sidekick.
        </p>
      </Container>
    </>
  );
}

export default WorkBooks;
