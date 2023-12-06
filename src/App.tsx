import React from 'react';
import Cita from './features/quote/__test__/Cita';
import './App.css';
import './reset.css';
import Bio from './features/bio/__test__/Bio';
import Noticias from './features/news/components/Noticias';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG?1497481539770"
          alt="The-Simpsons"
          className="logo"
        />
        <Cita />
      </header>
      <section className="App-bio">
        <Bio />
      </section>
      <section className="App-news">
        <Noticias />
      </section>
    </div>
  );
}

export default App;