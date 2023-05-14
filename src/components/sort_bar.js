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
        isHistory: false,
    });

    const [value, setValue] = useState('请输入');

    const searchStyle = useSpring({
        width: state.isSearching ? props.scale * 334 : props.scale * 42,
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
                {state.isSearching ?
                    <div
                        contentEditable={true}
                        onInput={handleChange}
                        style={{
                            width: props.scale * 80,
                            height: props.scale * 18,
                            fontSize: 16 * props.scale,
                            lineHeight: 14 * props.scale,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            textAlign:'center',
                            justifyContent:'center',
                            fontFamily: 'Noto Sans SC',
                            fontWeight: '600',
                        }}
                    >
                        {value}
                    </div>
                    : null
                }
                {state.isSearching ?
                    <div
                        onClick={handleSearchClick}
                        style={{
                            backgroundImage: `url(${backArrow})`,
                            backgroundSize: 'cover',
                            width: 24 * props.scale,
                            height: 24 * props.scale
                        }}
                    >
                    </div>
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
                            word='模型'
                            scale={props.scale}
                            image={filterImage}
                        >
                        </NormalButton>
                        <NormalButton
                            backArrow={false}
                            activate={true}
                            back={false}
                            wordDisplay={false}
                            word='贴图'
                            scale={props.scale}
                            image={preferImage}
                        >
                        </NormalButton>
                    </div> : null
            }
        </div >
    );
}

export default SortBar;