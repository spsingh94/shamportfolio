import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import {Title} from "../components/Title";
import Hero from "../components/Hero";
import MCLAHero from "../images/bluelearning.jpg";

function MCLA() {
  return (
      <div>
      <Hero backgroundImage={MCLAHero}>
      <Navbar />
      <Title id="page-title">Morse Code Learning Academy</Title>
      </Hero>
      <Container>
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
      </div>
  );
}

export default MCLA;
