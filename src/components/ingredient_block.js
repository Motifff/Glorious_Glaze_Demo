import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import AdjustBlock from './adjust_block'

function IngredientBlock(props) {
    const styles = useSpring({
        from: {
            opacity: 1
        },
        to: {
            opacity: props.activate === true ? 1 : 0.5
        }
    })

    return (
        <animated.div
            style={{
                width: props.scale * 168,
                height: props.scale * 150,
                background: '#E8FFFB',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10 * props.scale,
                ...styles
            }}
            onClick={props.func}
        >
            <AdjustBlock name={props.name} value={props.value} func={props.func} number={props.number} activate={true} scale={props.scale}>

            </AdjustBlock>
            <div style={{
                width: props.scale * 144,
                height: props.scale * 80,
                backgroundImage: `url(${null})`,
            }}>
            </div>
        </animated.div>
    );
}

export default IngredientBlock;
