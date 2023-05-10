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
                check={false}
                selectable={true}
                edit={false}
            />
            <Tile
                scale={props.scale}
                image={A1B1}
                check={false}
                selectable={false}
                edit={false}
            />
             <Tile
                scale={props.scale}
                image={A1B1}
                check={false}
                selectable={false}
                edit={false}
            />
             <Tile
                scale={props.scale}
                image={A1B1}
                check={false}
                selectable={false}
                edit={false}
            />
        </div>
    );
}

export default TestPage;