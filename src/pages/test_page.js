import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import Tile from '../components/single_tile';
import A1B1 from '../assets/tile_image/A1B1.png'

function TestPage(props) {

    return (
        <div
            style={{
                padding:props.scale * 18,
                boxSizing: 'border-box',
                display:'flex',
                flexWrap:'wrap',
                gap:props.scale * 18
            }}
        >
            <Tile
                scale={props.scale}
                image={A1B1}
            />
            <Tile
                scale={props.scale}
                image={A1B1}
            />
             <Tile
                scale={props.scale}
                image={A1B1}
            />
             <Tile
                scale={props.scale}
                image={A1B1}
            />
        </div>
    );
}

export default TestPage;