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
            <AdjustBlock
                name={props.name}
                value={props.value}
                func={props.func}
                number={props.number}
                activate={true}
                scale={props.scale}>
            </AdjustBlock>
            <div style={{
                width: props.scale * 144,
                height: props.scale * 80,
                backgroundImage: `url(${null})`,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
            }}>
                <animated.div style={{
                    width: 'min-content',
                    height: props.scale * 60,
                    position: 'relative',
                    left:props.scale * 10,
                    display: 'flex',
                    alignItems:'center',
                    flexDirection: 'column',
                    fontFamily: 'Open Sans',
                    fontWeight: '700',
                    fontSize: props.scale * 64,
                }}>
                    {props.value}
                </animated.div>
            </div>
        </animated.div>
    );
}

export default IngredientBlock;
