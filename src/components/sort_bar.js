import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import NormalButton from './normal_button';
import filterImage from '../assets/icon=filter.svg';
import preferImage from '../assets/icon=prefer.svg';
import historyImage from '../assets/icon=history.svg';
import searchImage from '../assets/icon=search.svg';
import backArrow from '../assets/icon=back.svg'

function SortBar(props) {
    const [state, setState] = useState({
        isSearching: false,
    });

    const [value, setValue] = useState('请输入');

    const [searchDisplay, setSearchDisplay] = useState(false);

    const searchStyle = useSpring({
        from: { width: state.isSearching ? props.scale * 42 : props.scale * 334 },
        to: { width: state.isSearching ? props.scale * 334 : props.scale * 42 },
        onStart: () => {
            if (!state.isSearching) {
                setSearchDisplay(false)
            }
        },
        onRest: () => {
            if (state.isSearching) {
                setSearchDisplay(true)
            }
        }
    });

    const searchStyleContent = useSpring({
        opacity: state.isSearching ? 1 : 0
    })

    const handleSearchClick = () => {
        setState(
            {
                ...state,
                isSearching: !state.isSearching,
            }
        )
    }

    const handleChange = (e) => {
        setValue(e.target.textContent)
    }

    const handleComposition = (e) => {
        if (e.type === "compositionend") {
            handleChange(e);
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                padding: props.scale * 10,
                direction: 'rtl',
            }}
        >

            <animated.div
                style={{
                    ...searchStyle,
                    height: props.scale * 36,
                    background: '#B5F4EA',
                    borderRadius: 18 * props.scale,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    paddingLeft: props.scale * 9,
                    paddingRight: props.scale * 9,
                    justifyContent: 'space-between',
                    direction: 'ltr',
                }}
            >
                {!state.isSearching ?
                    <div
                        onClick={handleSearchClick}
                        style={{
                            backgroundImage: `url(${searchImage})`,
                            backgroundSize: 'cover',
                            width: 24 * props.scale,
                            height: 24 * props.scale
                        }}
                    >
                    </div>
                    :
                    <div
                        style={{
                            backgroundImage: `url(${searchImage})`,
                            backgroundSize: 'cover',
                            width: 24 * props.scale,
                            height: 24 * props.scale
                        }}
                    >
                    </div>
                }
                {searchDisplay ?
                    <animated.div
                        contentEditable={true}
                        onCompositionStart={handleComposition}
                        onCompositionEnd={handleComposition}
                        style={{
                            ...searchStyleContent,
                            width: props.scale * 80,
                            height: props.scale * 18,
                            fontSize: 16 * props.scale,
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
                        {value}
                    </animated.div>
                    : null
                }
                {searchDisplay ?
                    <animated.div
                        onClick={handleSearchClick}
                        style={{
                            ...searchStyleContent,
                            backgroundImage: `url(${backArrow})`,
                            backgroundSize: 'cover',
                            width: 24 * props.scale,
                            height: 24 * props.scale,
                            transform: 'rotate(180deg)',
                        }}
                    >
                    </animated.div>
                    : null
                }
            </animated.div>
            {
                !state.isSearching ?
                    <div
                        style={{
                            position: 'relative',
                            height: 36 * props.scale,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: props.scale * 10,
                            direction: 'ltr',
                        }}
                    >
                        <NormalButton
                            backArrow={false}
                            activate={true}
                            back={false}
                            wordDisplay={false}
                            word='过滤'
                            scale={props.scale}
                            image={filterImage}
                        >
                        </NormalButton>
                        {!props.modeState?
                            <NormalButton
                                backArrow={false}
                                activate={true}
                                back={false}
                                wordDisplay={false}
                                word='喜欢'
                                scale={props.scale}
                                image={preferImage}
                                func={props.switchFunc}
                            >
                            </NormalButton>
                            :
                            <NormalButton
                                backArrow={false}
                                activate={true}
                                back={false}
                                wordDisplay={false}
                                word='历史'
                                scale={props.scale}
                                image={historyImage}
                                func={props.switchFunc}
                            >
                            </NormalButton>
                        }
                    </div> : null
            }
        </div >
    );
}

export default SortBar;