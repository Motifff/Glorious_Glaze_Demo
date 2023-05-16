import React, { useState, useEffect } from 'react';
import { useSpring, animated, update } from '@react-spring/web'
import Section from '../components/place_holder'
import A1B1 from '../assets/tile_image/A1B1.png'
import A1B2 from '../assets/tile_image/A1B2.png'
import A1B3 from '../assets/tile_image/A1B3.png'
import SortBar from '../components/sort_bar';
import NormalButton from '../components/normal_button';
import UploadModelIcon from '../assets/icon=upload_model.svg'
import LabIcon from '../assets/icon=lab.svg'
import DisplayTile from '../components/display_tile';

//data -> like data/lib data/history
//mode -> Like/His F/T

function ContentPage(props) {
    const [state, setState] = useState({
        modeHis: false,
        tileDisplay: false,
        tileDisplayData:null,
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

    const [displayTileData, setDisplayTileData] = useState({})

    const genSections = () => {
        const eachSection = state.data.map((each) =>
            <Section
                key={each.sectionName}
                scale={props.scale}
                data={each}
                func={sectionSelect}
                func1={switchMode}
                eachFunc={singleSelect}
                eachFunc1={tileDisplay}>
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

    const tileDisplay = (showState, tileData)=>{
        if(showState){
            setState({
                ...state,
                tileDisplay: true,
                tileDisplayData: tileData,
            })
        }else{
            setState({
                ...state,
                tileDisplay: false,
                tileDisplayData: null,
            })
        }
    }

    const switchMode = () => {
        setState({
            ...state,
            modeHis: !state.modeHis
        })
    }

    return (
        <div
            style={{
                width: props.scale * 354,
                height: props.scale * 844,
                position:'relative',
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
                    modeState={state.modeHis}
                    switchFunc={switchMode}
                >
                </SortBar>
            </div>
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 68,
                    borderTop: '2px solid #B5F4EA',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                    paddingLeft: props.scale * 8,
                    paddingRight: props.scale * 8,
                    paddingTop: props.scale * 16,
                    paddingBottom: props.scale * 16,
                }}
            >
                <NormalButton
                    backArrow={true}
                    activate={false}
                    disable={true}
                    back={true}
                    wordDisplay={true}
                    expand={true}
                    word="返回"
                    scale={props.scale}
                    image={LabIcon}
                >
                </NormalButton>
                <NormalButton
                    width={props.scale * 220}
                    backArrow={true}
                    activate={false}
                    disable={true}
                    back={false}
                    wordDisplay={true}
                    expand={true}
                    word="上传模型"
                    scale={props.scale}
                    image={UploadModelIcon}
                >
                </NormalButton>
            </div>
            <div
                style={{
                    position:'absolute',
                    top:0,
                    width: props.scale * 354,
                    height: props.scale * 844,
                }}
            >
                <DisplayTile
                    scale = {props.scale}
                >
                </DisplayTile>
            </div>
        </div>
    );
}

export default ContentPage;