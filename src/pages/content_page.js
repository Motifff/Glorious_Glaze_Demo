import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import Section from '../components/place_holder'
import A1B1 from '../assets/tile_image/A1B1.png'
import A1B2 from '../assets/tile_image/A1B2.png'
import A1B3 from '../assets/tile_image/A1B3.png'
import SortBar from '../components/sort_bar';

//data -> like data/lib data/history
//mode -> Like/His F/T

function TestPage(props) {
    const [state, setState] = useState({
        modeHis: false,
        data: [
            {
                sectionName: "我的收藏",
                type: 'like',
                tiles: [
                    {
                        order: 1,
                        name: '釉彩一号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 2,
                        name: '釉彩二号',
                        image: A1B2,
                        selected: false,
                    },
                    {
                        order: 3,
                        name: '釉彩三号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 4,
                        name: '釉彩一号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 5,
                        name: '釉彩二号',
                        image: A1B2,
                        selected: false,
                    },
                    {
                        order: 6,
                        name: '釉彩三号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 7,
                        name: '釉彩一号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 8,
                        name: '釉彩二号',
                        image: A1B2,
                        selected: false,
                    },
                ]
            },
            {
                sectionName: "配釉材质库",
                type: 'regular',
                tiles: [
                    {
                        order: 1,
                        name: '釉彩一号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 2,
                        name: '釉彩二号',
                        image: A1B2,
                        selected: false,
                    },
                    {
                        order: 3,
                        name: '釉彩三号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 4,
                        name: '釉彩一号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 5,
                        name: '釉彩二号',
                        image: A1B2,
                        selected: false,
                    },
                    {
                        order: 6,
                        name: '釉彩三号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 7,
                        name: '釉彩一号',
                        image: A1B1,
                        selected: false,
                    },
                    {
                        order: 8,
                        name: '釉彩二号',
                        image: A1B2,
                        selected: false,
                    },
                ]
            }
        ]
    })

    const genSections = () => {
        const eachSection = state.data.map((each) =>
            <Section
                key={each.sectionName}
                scale={props.scale}
                data={each}
                func={sectionSelect}
                eachFunc={singleSelect}>
            </Section>)
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: props.scale * 18
                }}
            >
                {eachSection}
            </div>
        )
    }

    const singleSelect = (sectionName, selfName) => {
        setState(prevState => ({
            ...prevState,
            data: prevState.data.map(each => {
                if (each.sectionName === sectionName) {
                    return {
                        ...each,
                        tiles: each.tiles.map(t => {
                            if (t.order === selfName) {
                                return {
                                    ...t,
                                    selected: !t.selected
                                }
                            }
                            return t;
                        })
                    };
                }
                return each;
            })
        }));
        console.log(sectionName, selfName)
    }

    const sectionSelect = (sectionName, onClose) => {
        {
            onClose ?
                setState(prevState => ({
                    ...prevState,
                    data: prevState.data.map(each => {
                        if (each.sectionName === sectionName) {
                            return {
                                ...each,
                                tiles: each.tiles.map(t => ({ ...t, selected: false }))
                            };
                        }
                        return each;
                    })
                }))
                :
                setState(prevState => ({
                    ...prevState,
                    data: prevState.data.map(each => {
                        if (each.sectionName === sectionName) {
                            return {
                                ...each,
                                tiles: each.tiles.map(t => ({ ...t, selected: !t.selected }))
                            };
                        }
                        return each;
                    })
                }));
        }
        console.log(state)
    }

    return (
        <div
            style={{
                width: props.scale * 354,
                height: props.scale * 844,
                display: 'flex',
                flexDirection: 'column',
                gap: props.scale * 18,
            }}
        >
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 28,
                }}
            >

            </div>
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 616,
                    boxSizing: 'border-box',
                    gap: props.scale * 18,
                    overflow: 'scroll',
                }}
            >
                {genSections()}
            </div>
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 56,
                    background: '#E8FFFB',
                    boxSizing: 'border-box',
                }}
            >
                <SortBar
                    scale={props.scale}
                >
                </SortBar>
            </div>
        </div>
    );
}

export default TestPage;