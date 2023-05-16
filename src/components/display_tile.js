import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import Tile from './single_tile';
import backArrow from '../assets/icon=down.svg'
import likeIcon from '../assets/icon=like.svg'
import deleteIcon from '../assets/icon=delete.svg'
import closeIcon from '../assets/icon=close.svg'


function DisplayTile(props) {
    const [state, setState] = useState({
        isFold: false
    })

    const frameStyle = useSpring({
        height: state.isFold ? props.scale * 453 : props.scale * 672
    })

    const itemList = () => {
        const items = props.data.tiles.map((tile) =>
            <Tile
                order={tile.order}
                name={tile.name}
                scale={props.scale}
                image={tile.image}
                selected={tile.selected}
                isSelectable={state.ifSelectable}
                func={props.eachFunc}
                func1={props.eachFunc1}
                sectionName={state.sectionName}
            />);
        return (
            <div
                style={{
                    width: props.scale * 354,
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: props.scale * 18,
                }}
            >
                {items}
            </div>
        );
    }

    return (
        <div
            style={{
                zIndex: 2,
                position: 'relative',
                top: props.scale * 46,
                width: props.scale * 354,
                height: props.scale * 708,
                display: 'flex',
                flexDirection: 'column',
                background: '#FF00FF',
                gap: props.scale * 18,
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 354,
                    borderRadius: props.scale * 8,
                    filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))',
                    backgroundImage: `url(${props.image})`,
                    backgroundSize: 'cover',
                }}
            >
            </div>
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 31,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    direction: 'rtl',
                    boxSizing: 'border-box',
                    paddingLeft: props.scale * 18,
                    paddingRight: props.scale * 18,
                    gap: props.scale * 8,
                }}
            >
                <animated.div
                    style={{
                        width: props.scale * 16,
                        height: props.scale * 16,
                        transform: 'rotate(0deg)',
                        backgroundImage: `url(${backArrow})`,
                    }}
                >
                </animated.div>
                <div
                    style={{
                        fontSize: 14 * props.scale,
                        lineHeight: 14 * props.scale,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Noto Sans SC',
                        fontWeight: '600',
                        direction: 'ltr',
                        unicodeBidi: 'plaintext',
                    }}
                >
                    {"中文测试"}
                </div>
            </div>
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 2,
                    background: '#C9CDD4',
                    borderRadius: props.scale * 2,
                }}
            >
            </div>
            <div
                style={{
                    position: 'relative',
                    left: props.scale * 212,
                    width: props.scale * 142,
                    height: props.scale * 94,
                    background: '#00F0F0',
                    boxSizing: 'border-box',
                    display: 'flex',
                    gap: props.scale * 6,
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        width: props.scale * 142,
                        height: props.scale * 19,
                        background: '#000000',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        gap: props.scale * 6,
                    }}
                >
                    <div
                        style={{
                            width: props.scale * 50,
                            height: props.scale * 19,
                            fontSize: props.scale * 14,
                            textAlign: 'right',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    黄塘石
                    </div>
                    <div
                        style={{
                            width: props.scale * 16,
                            height: props.scale * 19,
                            fontSize: props.scale * 12,
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    :
                    </div>
                    <div
                        style={{
                            width: props.scale * 28,
                            height: props.scale * 19,
                            fontSize: props.scale * 14,
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    91
                    </div>
                </div>
                <div
                    style={{
                        width: props.scale * 142,
                        height: props.scale * 19,
                        background: '#000000',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        gap: props.scale * 6,
                    }}
                >
                    <div
                        style={{
                            width: props.scale * 50,
                            height: props.scale * 19,
                            fontSize: props.scale * 14,
                            textAlign: 'right',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    黄塘石
                    </div>
                    <div
                        style={{
                            width: props.scale * 16,
                            height: props.scale * 19,
                            fontSize: props.scale * 12,
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    :
                    </div>
                    <div
                        style={{
                            width: props.scale * 28,
                            height: props.scale * 19,
                            fontSize: props.scale * 14,
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    91
                    </div>
                </div>
                <div
                    style={{
                        width: props.scale * 142,
                        height: props.scale * 19,
                        background: '#000000',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        gap: props.scale * 6,
                    }}
                >
                    <div
                        style={{
                            width: props.scale * 50,
                            height: props.scale * 19,
                            fontSize: props.scale * 14,
                            textAlign: 'right',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    黄塘石
                    </div>
                    <div
                        style={{
                            width: props.scale * 16,
                            height: props.scale * 19,
                            fontSize: props.scale * 12,
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    :
                    </div>
                    <div
                        style={{
                            width: props.scale * 28,
                            height: props.scale * 19,
                            fontSize: props.scale * 14,
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    91
                    </div>
                </div>
                <div
                    style={{
                        width: props.scale * 142,
                        height: props.scale * 19,
                        background: '#000000',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        gap: props.scale * 6,
                    }}
                >
                    <div
                        style={{
                            width: props.scale * 50,
                            height: props.scale * 19,
                            fontSize: props.scale * 14,
                            textAlign: 'right',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    黄塘石
                    </div>
                    <div
                        style={{
                            width: props.scale * 16,
                            height: props.scale * 19,
                            fontSize: props.scale * 12,
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    :
                    </div>
                    <div
                        style={{
                            width: props.scale * 28,
                            height: props.scale * 19,
                            fontSize: props.scale * 14,
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                            background: '#FFFFFF'
                        }}
                    >
                    91
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 2,
                    background: '#C9CDD4',
                    borderRadius: props.scale * 2,
                }}
            >
            </div>
            <div
                name={'用户图标'}
                style={{
                    width: props.scale * 354,
                    heigth: props.scale * 44,
                    display: 'flex',
                    flexDirection: 'row',
                    direction: 'rtl',
                    paddingRight: props.scale * 18,
                    paddingLeft: props.scale * 18,
                    paddingTop: props.scale * 6,
                    paddingBottom: props.scale * 6,
                    gap: props.scale * 6,
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        width: props.scale * 32,
                        height: props.scale * 32,
                        background: '#E5E6EB',
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: props.scale * 16,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            width: props.scale * 16,
                            height: props.scale * 16,
                            backgroundImage: `url(${closeIcon})`,
                            backgroundSize: 'cover',
                        }}
                    >
                    </div>
                </div>
                <div
                    style={{
                        width: props.scale * 32,
                        height: props.scale * 32,
                        background: '#E5E6EB',
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: props.scale * 16,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            width: props.scale * 16,
                            height: props.scale * 16,
                            backgroundImage: `url(${deleteIcon})`,
                            backgroundSize: 'cover',
                        }}
                    >
                    </div>
                </div>
                <div
                    style={{
                        width: props.scale * 32,
                        height: props.scale * 32,
                        background: '#E5E6EB',
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: props.scale * 16,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            width: props.scale * 16,
                            height: props.scale * 16,
                            backgroundImage: `url(${likeIcon})`,
                            backgroundSize: 'cover',
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DisplayTile;
