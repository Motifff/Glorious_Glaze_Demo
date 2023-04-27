import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import backArrow from '../assets/icon=back.svg'

function NormalButton(props) {
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
                width: 'min-content',
                height: props.scale * 36,
                background: '#B5F4EA',
                borderRadius: 18 * props.scale,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 9 * props.scale,
                paddingRight: 9 * props.scale,
                gap: 10 * props.scale,
                ...styles
            }}
            onClick={props.func}
        >
            {props.back === true ? <div style={{
                width: props.scale * 16,
                height: props.scale * 16,
                backgroundImage: `url(${backArrow})`,
                backgroundSize: 'cover'
            }}>
            </div> : null}
            <div
                style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundSize: 'cover',
                    width: 24*props.scale,
                    height: 24*props.scale
                }}
            ></div>
            {props.wordDisplay === true ? <div style={{
                width: 14 * props.scale * props.word.length,
                height: 14 * props.scale,
                fontSize: 14 * props.scale,
                fontFamily: 'Noto Sans SC',
                fontWeight: '700',
                color: '#000000',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                {props.word}
            </div> : null}
        </animated.div>
    );
}

export default NormalButton;
