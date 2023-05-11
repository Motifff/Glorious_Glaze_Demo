import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'

// scale || selected || isSelectable || image
function Tile(props) {
    const checkStyles = useSpring({
        from: {
            background: props.selected?'#FFFFFF':'#000000',
            boxShadow: props.selected?'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.25)':'inset 0px 0px 0px 2px rgba(255, 255, 255, 1)',
        },
        to: {
            background: props.selected?'#000000':'#FFFFFF',
            boxShadow: props.selected?'inset 0px 0px 0px 2px rgba(255, 255, 255, 1)':'inset 0px 0px 2px rgba(0, 0, 0, 0.25)',
        }
    })

    const editStyles = useSpring({
        from: {
            opacity: props.selected ? 1 : 0.5,
        },
        to: {
            opacity: props.selected ? 0.5 : 1,
        },
    })

    const selectResponce = () =>{
        //props.func(props.order)
    }

    return (
        <div
            style={{
                width: props.scale * 106,
                height: props.scale * 130,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: props.scale * 10,
            }}
        >
            <div
                style={{
                    width: props.scale * 106,
                    height: props.scale * 106,
                    borderRadius: props.scale * 8,
                    filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))',
                    backgroundImage: `url(${props.image})`,
                    backgroundSize: 'cover',
                }}
            >
            </div>
            <animated.div
                style={{
                    width: props.scale * 106,
                    height: props.scale * 14,
                    display: 'flex',
                    flexDirection: 'row',
                    ...editStyles
                }}
            >
                <animated.div
                    onClick={selectResponce}
                    style={{
                        ...checkStyles,
                        width: props.scale * 12,
                        height: props.scale * 12,
                        position: 'relative',
                        border: '1px solid #000000',
                        borderRadius: props.scale * 8,
                        top: props.scale,
                        opacity:props.isSelectable ? 1:0,
                    }}
                >
                </animated.div>
                <text
                    style={{
                        width: props.scale * 72,
                        height: props.scale * 14,
                        position: 'relative',
                        left: props.scale * 20,
                        border: props.selected ? '1px dashed #000000':null,
                        borderRadius: props.scale * 2,
                        boxSizing: 'border-box',
                        padding: props.scale * 1,
                        fontFamily: 'Noto Sans SC',
                        fontWeight: 700,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: props.scale * 10,
                        lineHeight: props.scale * 12,
                    }}
                >
                    釉彩一号测..
                </text>
            </animated.div>
        </div>
    );
}

export default Tile;