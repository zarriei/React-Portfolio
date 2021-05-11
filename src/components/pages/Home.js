import React from "react";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
      I was born in Newark New Jersey on March 10, 1987. Some of my interests include my love for cars (BMW),
              soccer, traveling internationally, and spending time with family.
              I am a film fanatic. Some of my favorite films include the Star Wars series, Lord of the Rings, <mark style="color: red;">The
                Godfather,</mark> Casino, and Devils Advocate. Some of my favorite
              television series are Peaky Blinders, Game of Thrones, Breaking Bad, Sons of Anarchy, and Hells Kitchen
              (Guilty-pleasure). Also, I recently became an Uncle and really
              enjoy spending time with my nephew. After being an Uncle for two years now, I am fascinated by how eager
              toddlers are to learn. My nephew never ceases to amaze
              in his willingness to keep on learning (a quick learner)!
      </p>
 
        <div className="col-md-12 text-info">
          <section className="second section text-white">
            <h2>Inspirational Quotes</h2>
            <p className="text-white border border-danger">Quote comes from Denzel Washington and his commencement speech at Howard University
              <q>Fail big, dream big, and dreams without goals are only dreams</q>
            </p>
            <p className="text-dark bg-white border border-danger">Another quote from Denzel Washington <q>Just because your doing a lot more doesn't
                mean
                your getting a lot more done</q></p>
            <p className="bg-dark text-white">This is a quote from Michele Ruiz <q>If people are doubting how far you can
                go,
                go so far that you can't hear them anymore</q></p>
          </section>
    </div>
  </div>
  );
};

export default Home;
