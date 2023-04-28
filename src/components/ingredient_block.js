import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import AdjustBlock from './adjust_block'

function IngredientBlock(props) {
    const [number, setNumber] = useState({

    })

    const styles = useSpring({
        from: {
            opacity: 1
        },
        to: {
            opacity: props.activate === true ? 1 : 0.5
        }
    })

    const handleClick = () => {

    }

    const handleDrag = () => {

    }

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
                paddingLeft: 9 * props.scale,
                paddingRight: 9 * props.scale,
                gap: 10 * props.scale,
                ...styles
            }}
            onClick={props.func}
        >
            <AdjustBlock activate={true} scale={props.scale}>

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
