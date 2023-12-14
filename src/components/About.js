import React from 'react';
import getLanguage from '../data/GetLanguage.js';

const About = (props) => {
  return (
    <section className='about'>
      <h2>{getLanguage({ content: 'About me', fi: 'Minusta' })}</h2>
      <p>
        {getLanguage({
          content:
            "In all my work, my goal is to create successful customer experiences. I believe accessible systems, usable interfaces, and user experiences should be considered in all stages of a product's life cycle. I am amaster's graduate of cognitive science from the University of Jyväskylä.In my studies, I focused on user-centered design and user research. Ifurther developed my programming skills from my undergrad in computerscience by focusing on web development. I enjoy combining myunderstanding of both users and the tech stack. I believe bridging thegap between users, product owners, designers, and developers is crucialwhen building successful products and experiences!",
          fi: 'Kaikessa tekemisessäni tavoitteeni on luoda onnistuneita asiakaskokemuksia. Uskon, että saavutettavuus, käytettävyys ja käyttäjäkokemukset tulisi otaa huomioon kaikissa tuotteen elinkaaren vaiheissa. Olen kognitiotieteen maisteri Jyväskylän yliopistosta. Opinnoissani keskityin käyttäjäkeskeiseen suunnitteluun ja käyttäjätutkimukseen. Kehitin tietotekniikan kandistani saamia ohjelmointitaitoja syventymällä web ohjelmointiin. Nautin käyttäjien ymmärtämisen ja teknologisen osaamisen yhdistämisestä. Mielestäni menestyksekkäisen tuotteiden ja kokemuksien taustalla on käyttäjien, tuoteomistajien, suunnittelijoiden ja kehittäjien välinen onnistunut kommunikaatio.',
        })}
      </p>
    </section>
  );
};

export default About;
