import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import './App.css';
import NormalButton from './components/normal_button'
import RenderPanel from './components/render_panel';
import IngredientBlock from './components/ingredient_block';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    scale: 1,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        scale: Math.floor(window.innerHeight / 844) > 1 ? Math.floor(window.innerHeight / 844) : 1
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: windowSize.scale * 390, height: windowSize.scale * 844, background: "#0000FF", margin: 'auto' }}>
      <div style={{ backgroundColor: '#FF00FF', width: windowSize.scale * 390, height: windowSize.scale * 708, top: windowSize.scale * 46, position: 'absolute' }}>
        <animated.div
          style={{
            position: 'absolute',
            left: 18 * windowSize.scale,
          }}
        >
          <RenderPanel
            w={354}
            h={354}
            scale={windowSize.scale}
          ></RenderPanel>
          <IngredientBlock scale={windowSize.scale} activate={true}></IngredientBlock>
        </animated.div>
      </div>
    </div>
  );
}

export default App;
