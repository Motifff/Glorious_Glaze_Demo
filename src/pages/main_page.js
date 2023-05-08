import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import NormalButton from '../components/normal_button'
import RenderPanel from '../components/render_panel';
import IngredientBlock from '../components/ingredient_block';
import Upload from '../assets/icon=upload.svg';

function MainPage(props) {
  return (
    <div>
      <animated.div
        name='middle'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          position: 'relative',
          width: props.scale * 390,
          height: props.scale * 708,
          top: props.scale * 46,
          display: 'flex',
          flexDirection: 'column',
          gap: props.scale * 18,
          paddingLeft: props.scale * 18,
          paddingRight: props.scale * 18,
          boxSizing: 'border-box',
        }}>
        <RenderPanel
          w={354}
          h={354}
          scale={props.scale}
          isTexture={props.state.isTexture}
          isLight={props.state.isLight}
          clickFunc={props.panelClick}
        ></RenderPanel>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: props.scale * 18,
          }}
        >
          <IngredientBlock name={0} value={props.state.ing[0]} scale={props.scale} activate={true} func={props.handleIngClick}></IngredientBlock>
          <IngredientBlock name={1} value={props.state.ing[1]} scale={props.scale} activate={true} func={props.handleIngClick}></IngredientBlock>
          <IngredientBlock name={2} value={props.state.ing[2]} scale={props.scale} activate={true} func={props.handleIngClick}></IngredientBlock>
          <IngredientBlock name={3} value={props.state.ing[3]} scale={props.scale} activate={true} func={props.handleIngClick}></IngredientBlock>
        </div>
      </animated.div >
      <animated.div
        style={{
          position: 'absolute',
          top: props.scale * 754,
          width: props.scale * 390,
          display: 'flex',
          flexDirection: 'row',
          boxSizing: 'border-box',
          justifyContent: 'center',
          borderTop: '2px solid rgba(181, 244, 234, 1)',
          padding: props.scale * 16,
          height: props.scale * 68,
        }}
      >
        <NormalButton
          backArrow={true}
          activate={true}
          back={false}
          wordDisplay={true}
          expand={true}
          word="上传渲染"
          scale={props.scale}
          image={Upload}
        >
        </NormalButton>
      </animated.div>
    </div>
  );
}

export default MainPage;
