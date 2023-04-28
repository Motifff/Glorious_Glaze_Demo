import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Plus from '../assets/plus.svg'
import Minus from '../assets/minus.svg'

/*this component receives:scale, activte||returns:value*/
function AdjustBlock(props) {
    const [state, setState] = useState({
        slide_pressed: false,
        sX: null,
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
        },
        config: { tension: 210, friction: 20 }
    })


    const handleButtonClick = (addNum) => {
        let nowValue = props.value + (addNum)
        props.func(props.name, nowValue);
    }

    const handleToggleDown = (event) => {
        setState({
            ...state,
            slide_pressed: true,
            sX: event.clientX,
        })
    }

    const handleToggleUp = () => {
        setState({
            ...state,
            slide_pressed: false
        })
    }

    const handleToggleMove = (event) => {
        if (state.slide_pressed) {
            let nowValue = props.value
            nowValue += event.clientX - state.sX
            if (nowValue > 0 && nowValue < 100) {
                props.func(props.name, nowValue);
            }
        }
        setState({
            ...state,
            sX: event.clientX
        })
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
            {state.slide_pressed ? null : <animated.div
                onClick={() => handleButtonClick(-1)}
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
            </animated.div>}
            <animated.div
                onMouseDown={handleToggleDown}
                onMouseMove={handleToggleMove}
                onMouseUp={handleToggleUp}
                style={{
                    height: 36 * props.scale,
                    background: "rgba(255, 255, 255, 0.6)",
                    borderRadius: 18 * props.scale,
                    overflow: 'hidden',
                    ...slide_styles
                }}
            >
                <animated.div
                    style={{
                        borderRadius: props.scale * 2.5,
                        position: 'relative',
                        width: props.scale * 5,
                        height: props.scale * 36,
                        background: '#B5F4EA',
                        left: state.slide_pressed ? props.value / 100 * 144 - 2.5 : props.value / 100 * 66 - 2.5,
                        right: state.slide_pressed ? 144 - (props.value / 100 * 144 - 2.5) : 66 - (props.value / 100 * 66 - 2.5)
                    }}
                >
                </animated.div>
            </animated.div>
            {state.slide_pressed ? null : <animated.div
                onClick={() => handleButtonClick(1)}
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
            </animated.div>}
        </animated.div>
    );
}

export default AdjustBlock;
