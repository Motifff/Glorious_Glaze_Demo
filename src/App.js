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
  })

  const [state, setState] = useState({
    ing:[50,50,50,50]
  })

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

  const handleIngClick = (target,nowNum) =>{
    let setIng = state.ing;
    setIng[target]=nowNum;
    console.log(target,nowNum)
    setState({
      ...state,
      ing:setIng,
    })
  }

  return (
    <div
      name='frame'
      style={{
        width: windowSize.scale * 390,
        height: windowSize.scale * 844,
        background: "#0000FF",
        margin: 'auto'
      }}>
      <animated.div
        name='middle'
        style={{
          backgroundColor: '#FF00FF',
          position:'relative',
          width: windowSize.scale * 390,
          height: windowSize.scale * 708,
          top: windowSize.scale * 46,
          display:'flex',
          flexDirection:'column',
          gap: windowSize.scale * 18,
          paddingLeft: windowSize.scale * 18,
          paddingRight: windowSize.scale * 18,
          boxSizing: 'border-box',
      }}>
        <RenderPanel
          w={354}
          h={354}
          scale={windowSize.scale}
        ></RenderPanel>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: windowSize.scale * 18,
          }}
        >
          <IngredientBlock name={0} value={state.ing[0]} scale={windowSize.scale} activate={true} func={handleIngClick}></IngredientBlock>
          <IngredientBlock name={1} value={state.ing[1]} scale={windowSize.scale} activate={true} func={handleIngClick}></IngredientBlock>
          <IngredientBlock name={2} value={state.ing[2]} scale={windowSize.scale} activate={true} func={handleIngClick}></IngredientBlock>
          <IngredientBlock name={3} value={state.ing[3]} scale={windowSize.scale} activate={true} func={handleIngClick}></IngredientBlock>
        </div>
      </animated.div >
    </div >
  );
}

export default App;
