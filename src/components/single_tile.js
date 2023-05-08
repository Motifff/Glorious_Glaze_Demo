import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'


function Tile(props) {

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
            <div
                style={{
                    width: props.scale * 106,
                    height: props.scale * 14,                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div
                    style={{
                        width: props.scale * 12,
                        height: props.scale * 12,
                        position: 'relative',
                        borderRadius: props.scale * 6,
                        top: props.scale,
                        background: '#FFFFFF',
                        boxShadow: 'inset 0px 0px 2px rgba(0, 0, 0, 0.25)',
                    }}
                >
                </div>
                <div
                    style={{
                        width: props.scale * 68,
                        height: props.scale * 12,
                        position: 'relative',
                        left: props.scale * 24,
                        top: 0,
                        border: '1px dashed #000000',
                        borderRadius: props.scale * 2,
                        textAlign: 'left',
                        fontFamily: 'Noto Sans SC',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        fontSize: props.scale * 10,
                        lineHeight: props.scale * 14,
                    }}
                >
                    釉彩一号测试..
                </div>
            </div>
        </div>
    );
}

export default Tile;