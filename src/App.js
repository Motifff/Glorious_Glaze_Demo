import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import './App.css';
import ContentPage from './pages/content_page';
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
        width: windowSize.scale * 780,
        height: windowSize.scale * 844,
        background: "rgba(100, 100, 100, 0)",
        boxSizing: 'content-box',
        borderRadius: windowSize.scale * 36,
        border: '10px solid rgba(175, 175, 175, 0.5)',
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        gap: windowSize.scale * 18,
      }}>
      <MainPage
        scale={windowSize.scale}
        state={state}
        handleIngClick={handleIngClick}
        panelClick={panelClick}
      ></MainPage>
      <ContentPage
        scale={windowSize.scale}
      >
      </ContentPage>
    </div>
  );
}

export default App;
