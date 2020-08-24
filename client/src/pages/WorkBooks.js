import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import BooksBanner from "../images/bluebook.jpg";
import Hero from "../components/Hero";
import {Title} from "../components/Title";

function WorkBooks() {
  return (
    <>
    <Hero backgroundImage={BooksBanner}>
      <Navbar />
      <Title id="page-title">Work Books</Title>
    </Hero>
      <Container>
      <h1>MCLA React</h1>

      {/* About */}
      <h3>About the Project</h3>

      <h5>My Role</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
        veniam, reprehenderit commodi qui ipsa autem voluptates. Perferendis
        ipsam nihil non iusto animi, veniam obcaecati amet facere tenetur et
        atque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
        veniam, reprehenderit commodi qui ipsa autem voluptates. Perferendis
        ipsam nihil non iusto animi, veniam obcaecati amet facere tenetur et
        atque!
      </p>

      <h5>Tools</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
        veniam, reprehenderit commodi qui ipsa autem voluptates. Perferendis
        ipsam nihil non iusto animi, veniam obcaecati amet facere tenetur et
        atque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
        veniam, reprehenderit commodi qui ipsa autem voluptates. Perferendis
        ipsam nihil non iusto animi, veniam obcaecati amet facere tenetur et
        atque!
      </p>

      <h5>Challenge</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
        veniam, reprehenderit commodi qui ipsa autem voluptates. Perferendis
        ipsam nihil non iusto animi, veniam obcaecati amet facere tenetur et
        atque!
      </p>
      {/* About */}

      {/* Mindset */}
      <h3>Mindset</h3>

      <h5>Goal</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
        veniam, reprehenderit commodi qui ipsa autem voluptates. Perferendis
        ipsam nihil non iusto animi, veniam obcaecati amet facere tenetur et
        atque!
      </p>

      <h5>Methodology</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
        veniam, reprehenderit commodi qui ipsa autem voluptates. Perferendis
        ipsam nihil non iusto animi, veniam obcaecati amet facere tenetur et
        atque!
      </p>
      <h5>Target Audience</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
        veniam, reprehenderit commodi qui ipsa autem voluptates. Perferendis
        ipsam nihil non iusto animi, veniam obcaecati amet facere tenetur et
        atque!
      </p>
      {/* Mindset */}

      <h3>Wireframe</h3>
      {/* WIREFRAME */}
      </Container>
    </>
  );
}

export default WorkBooks;
