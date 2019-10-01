import React from 'react';
import './App.css';
import './index.css';

function App() {
  return (
    <div>
        <div className='block'>
            <h1>Uh Huh Choose What You Want Uh Huh</h1>
            <br />
            <br />
            <br />
            <br />

            <a id="a_1" href="../public/ex00bis/balloon.html">Ballooಠ_ಠoon</a>
            <a id="a_2" href="%PUBLIC_URL%/ex01bis/calc.html">Calc-Calc</a>
            <a id="a_3" href="%PUBLIC_URL%/ex02bis/index.html">Tooooo Dooooo</a>
            <a id="a_4" href="%PUBLIC_URL%/42Amazon">42 Amazon</a>


            <div id="back">
            <div className="star-1 stars"></div>
            <div className="star-2 stars"></div>
            <div className="star-3 stars"></div>
            <div className="star-4 stars"></div>
            <div className="star-5 stars"></div>
            </div>
        </div>

        <div className="penguin">
            <div className="penguin-bottom">
              <div className="right-hand"></div>
              <div className="left-hand"></div>
              <div className="right-feet"></div>
              <div className="left-feet"></div>
            </div>
            <div className="penguin-top">
              <div className="right-cheek"></div>
              <div className="left-cheek"></div>
              <div className="belly"></div>
              <div className="right-eye">
                <div className="sparkle"></div>
              </div>
              <div className="left-eye">
                <div className="sparkle"></div>
              </div>
              <div className="blush-right"></div>
              <div className="blush-left"></div>
              <div className="beak-top"></div>
              <div className="beak-bottom"></div>
            </div>
          </div>

        <footer>
                <p style={{fontFamily: 'monospace', fontStyle: 'italic', fontSize: 20}}>&copy; hryu 2019</p>
            </footer>
    </div>
  );
}

export default App;
