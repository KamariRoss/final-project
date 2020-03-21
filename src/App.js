import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  render() {
    return (
      <article>
        <header></header>
        <section>
          <section>
            <button type="button">Activate</button>
          </section>
        </section>
        <footer>
          <nav>
            <ul>
              <li>
                <a href="https://www.mozilla.org/en-US/">Rest </a>
              </li>
              <li>
                <a href="https://www.mozilla.org/en-US/">Stats </a>
              </li>
              <li>
                <a href="https://www.mozilla.org/en-US/">Pref </a>
              </li>
            </ul>
          </nav>
        </footer>
      </article>
    )
  }
}

export default App
