import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import './App.css';
import NormalButton from './components/normal_button'
import RenderPanel from './components/render_panel';
import IngredientBlock from './components/ingredient_block';
import Upload from './assets/icon=upload.svg'

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
        background: "rgba(255, 255, 255, 1)",
        margin: 'auto',
      }}>
      <animated.div
        name='middle'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          position: 'relative',
          width: windowSize.scale * 390,
          height: windowSize.scale * 708,
          top: windowSize.scale * 46,
          display: 'flex',
          flexDirection: 'column',
          gap: windowSize.scale * 18,
          paddingLeft: windowSize.scale * 18,
          paddingRight: windowSize.scale * 18,
          boxSizing: 'border-box',
        }}>
        <RenderPanel
          w={354}
          h={354}
          scale={windowSize.scale}
          isTexture={state.isTexture}
          isLight={state.isLight}
          clickFunc={panelClick}
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
      <animated.div
        style={{
          position: 'absolute',
          top: windowSize.scale * 754,
          width: windowSize.scale * 390,
          display: 'flex',
          flexDirection: 'row',
          boxSizing: 'border-box',
          justifyContent: 'center',
          borderTop: '2px solid rgba(181, 244, 234, 1)',
          padding: windowSize.scale * 16,
          height: windowSize.scale * 68,
        }}
      >
        <NormalButton
          backArrow={true}
          activate={true}
          back={false}
          wordDisplay={true}
          expand={true}
          word="上传渲染"
          scale={windowSize.scale}
          image={Upload}
        >
        </NormalButton>
      </animated.div>
    </div >
  );
}

export default App;
