import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Plus from '../assets/plus.svg'
import Minus from '../assets/minus.svg'

/*this component receives:scale, activte||returns:value*/
function AdjustBlock(props) {
    const [state, setState] = useState({
        slide_pressed: false,
    })

    const styles = useSpring({
        from: {
            opacity: 1
        },
        to: {
            opacity: props.activate === true ? 1 : 0.5
        }
    })

    const slide_styles = useSpring({
        from: {
            width: 66 * props.scale
        },
        to: {
            width: state.slide_pressed ? 144 * props.scale : 66 * props.scale,
        }
    })

    const handleClick = () => {
        let nowValue = state.value + (props.add)
        props.sync(nowValue);
    }

    const handleDrag = () => {
        let nowValue = state.value + (props.add)
        props.sync(nowValue);
    }

    return (
        <animated.div
            style={{
                width: props.scale * 144,
                height: props.scale * 36,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3 * props.scale,
                ...styles
            }}
            onClick={props.func}
        >
            <animated.div
                onClick={() => handleClick()}
                style={{
                    width: props.scale * 36,
                    height: props.scale * 36,
                    borderRadius: props.scale * 18,
                    backgroundColor: '#B5F4EA',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: props.scale * 14,
                        height: props.scale * 14,
                        backgroundImage: `url(${Plus})`,
                        backgroundSize: 'cover'
                    }}>
                </div>
            </animated.div>
            <animated.div
                style={{
                    height: 36 * props.scale,
                    background: "rgba(255, 255, 255, 0.6)",
                    borderRadius: 18 * props.scale,
                    ...slide_styles
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        left: state.slide_pressed ? props.value / 100 * 144 - 2.5 : state.value / 100 * 66 - 2.5,
                        width: props.scale * 5,
                        height: props.scale * 36,
                        background: '#B5F4EA',
                    }}
                >
                </div>
            </animated.div>
            <animated.div
                onClick={() => handleClick()}
                style={{
                    width: props.scale * 36,
                    height: props.scale * 36,
                    borderRadius: props.scale * 18,
                    backgroundColor: '#B5F4EA',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: props.scale * 14,
                        height: props.scale * 14,
                        backgroundImage: `url(${Minus})`,
                        backgroundSize: 'cover'
                    }}>
                </div>
            </animated.div>
        </animated.div>
    );
}

export default AdjustBlock;
