import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Argentina Football Team</h1>
      </header>
      <main>
        <section className="team-info">
          <h2>Nicknames:</h2>
          <ul>
            <li>La Albiceleste</li>
            <li>The White and Sky Blues</li>
          </ul>
          <h2>Home Stadium:</h2>
          <p>Estadio Monumental Antonio Vespucio Liberti</p>
        </section>
        <section className="players">
          <h2>Notable Players:</h2>
          <ul>
            <li>Lionel Messi</li>
            <li>Cristiano Romero</li>
            <li>Angel Di Maria</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Argentina Football Team</p>
      </footer>
    </div>
  );
}

export default App;