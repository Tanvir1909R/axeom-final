import React from "react";
import {
  Business,
  FingerTip,
  Generate,
  Expertise,
  Hero,
  Project,
  GetInTouch,
} from "./pageComponent";
import { Footer, Navbar } from "./components";

const App = () => {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero/>
        </section>
        <section id="fingerTips">
          <FingerTip />
        </section>
        <section id="generate">
          <Generate />
        </section>
        {/* <section id="reviews">
          <Review />
        </section> */}
        {/* <section id="client_success">
          <Success />
        </section> */}
        <section id="business">
          <Business />
        </section>
        <section id="Book">
          <GetInTouch/>
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section>
          <Project/>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
