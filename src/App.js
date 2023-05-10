import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import './App.css';
import TestPage from './pages/test_page';
import MainPage from './pages/main_page';


function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    scale: 1,
  })

  const [state, setState] = useState({
    ing: [50, 50, 50, 50],
    isTexture: false,
    isLight: false,
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

  const panelClick = (c) => {
    if (c === '模型' || c === '贴图') {
      setState({
        ...state,
        isTexture: !state.isTexture
      })
    }
    if (c === '旋转' || c === '光照') {
      setState({
        ...state,
        isLight: !state.isLight
      })
    }
  }

  const handleIngClick = (target, nowNum) => {
    let setIng = state.ing;
    setIng[target] = nowNum;
    console.log(target, nowNum)
    setState({
      ...state,
      ing: setIng,
    })
  }

  return (
    <div
      name='frame'
      style={{
        width: windowSize.scale * 390,
        height: windowSize.scale * 844,
        background: "rgba(100, 100, 100, 0)",
        margin: 'auto',
      }}>
      <TestPage
        scale={windowSize.scale}
      >
      </TestPage>
    </div>
  );
  /*
  return (
    <div
      name='frame'
      style={{
        width: windowSize.scale * 390,
        height: windowSize.scale * 844,
        background: "rgba(255, 255, 255, 1)",
        margin: 'auto',
      }}>
      <MainPage
        scale={windowSize.scale}
        state={state}
        handleIngClick={handleIngClick}
        panelClick={panelClick}
      ></MainPage>
    </div >
  );
  */
}

export default App;
