import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import NormalButton from './normal_button'
import ModelIcon from '../assets/icon=model.svg'
import BrushIcon from '../assets/icon=brush.svg'
import LightIcon from '../assets/icon=light.svg'
import RotateIcon from '../assets/icon=rotate.svg'
import LibraryIcon from '../assets/icon=library.svg'


function RenderPanel(props) {
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
                width: props.scale * 354,
                height: props.scale * 354,
                backgroundColor: '#E8FFFB',
                padding:18*props.scale,
                boxSizing: 'border-box'
            }}
        >
            <div
                style={{
                    height: 36 * props.scale,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10 * props.scale
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        left: 18 * props.scale,
                        height: 36 * props.scale,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10 * props.scale
                    }}
                >
                    <NormalButton
                        backArrow={true}
                        activate={true}
                        back={false}
                        wordDisplay={true}
                        word="模型"
                        scale={props.scale}
                        image={ModelIcon}
                    >
                    </NormalButton>
                    <NormalButton
                        backArrow={true}
                        activate={false}
                        back={false}
                        wordDisplay={false}
                        word="贴图"
                        scale={props.scale}
                        image={BrushIcon}
                    >
                    </NormalButton>
                </div>
            </div>
            <div
                style={{
                    height: props.scale*246
                }}
            >
            </div>
            <div
                style={{
                    height: 36 * props.scale,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10 * props.scale
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        left: 18 * props.scale,
                        height: 36 * props.scale,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10 * props.scale
                    }}
                >
                    <NormalButton
                        backArrow={true}
                        activate={true}
                        back={false}
                        wordDisplay={false}
                        word="贴图"
                        scale={props.scale}
                        image={LightIcon}
                    >
                    </NormalButton>
                    <NormalButton
                        backArrow={true}
                        activate={true}
                        back={false}
                        wordDisplay={false}
                        word="贴图"
                        scale={props.scale}
                        image={RotateIcon}
                    >
                    </NormalButton>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        right: 18 * props.scale,
                        height: 36 * props.scale,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10 * props.scale
                    }}
                >
                    <NormalButton
                        backArrow={true}
                        activate={true}
                        back={false}
                        wordDisplay={false}
                        word="贴图"
                        scale={props.scale}
                        image={LibraryIcon}
                    >
                    </NormalButton>
                </div>
            </div>
        </animated.div>
    );
}

export default RenderPanel;
