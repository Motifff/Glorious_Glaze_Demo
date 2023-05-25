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

    const loadEffect = useSpring({
        opacity: 1,
        from:{
            opacity :0,
        }
    })

    const frameStyle = useSpring({
        height: state.isFold ? props.scale * 453 : props.scale * 672
    })

    const foldArrowStyle = useSpring({
        transform: state.isFold ? 'rotate(0deg)' : 'rotate(180deg)',
    })

    const handleFold = () => {
        setState({
            ...state,
            isFold: !state.isFold
        })
    }

    const handleExit = () =>{
        props.exitFunc(false,null)
        console.log('exit')
    }

    return (
        <animated.div
            style={{
                ...loadEffect,
                zIndex: 2,
                position: 'relative',
                top: props.scale * 46,
                width: props.scale * 390,
                height: props.scale * 708,
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: props.scale * 18,
                backdropFilter: 'blur(5px)',
                background:'rgba(255,255,255,0.5)',
                gap: props.scale * 18,
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 354,
                    borderRadius: props.scale * 32,
                    filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))',
                    backgroundImage: `url(${process.env.PUBLIC_URL + props.data.image})`,
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
                    onClick={handleFold}
                    style={{
                        ...foldArrowStyle,
                        width: props.scale * 16,
                        height: props.scale * 16,
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
                    {props.data.name}
                </div>
            </div>
            {!state.isFold ?
                <animated.div
                    style={{
                        width: props.scale * 354,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: props.scale * 18,
                        boxSizing: 'border-box',
                    }}
                >
                    <div
                        name={'divider'}
                        style={{
                            width: props.scale * 354,
                            height: props.scale * 2,
                            background: 'rgba(201, 205, 212, 1)',
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
                                }}
                            >
                            {props.data.MaterialData0}
                            </div>
                        </div>
                        <div
                            style={{
                                width: props.scale * 142,
                                height: props.scale * 19,
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
                                }}
                            >
                                石灰石
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
                                }}
                            >
                            {props.data.MaterialData1}
                            </div>
                        </div>
                        <div
                            style={{
                                width: props.scale * 142,
                                height: props.scale * 19,
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
                                }}
                            >
                                滑石
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
                                }}
                            >
                            {props.data.MaterialData2}
                            </div>
                        </div>
                        <div
                            style={{
                                width: props.scale * 142,
                                height: props.scale * 19,
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
                                }}
                            >
                                氧化铁
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
                                }}
                            >
                            {props.data.MaterialData3}
                            </div>
                        </div>
                    </div>
                    <div
                        name={'divider'}
                        style={{
                            width: props.scale * 354,
                            height: props.scale * 2,
                            background: 'rgba(201, 205, 212, 1)',
                            borderRadius: props.scale * 2,
                        }}
                    >
                    </div>
                </animated.div>
                :
                null
            }
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
                    onClick={handleExit}
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
        </animated.div>
    )
}
export default DisplayTile;
