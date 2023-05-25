import React, { useState, useEffect } from 'react';
import { useSpring, animated, update } from '@react-spring/web'
import Section from '../components/place_holder'
import SortBar from '../components/sort_bar';
import NormalButton from '../components/normal_button';
import UploadModelIcon from '../assets/icon=upload_model.svg'
import LabIcon from '../assets/icon=lab.svg'
import DisplayTile from '../components/display_tile';
import tileData from '../assets/dataSheet.json'

//data -> like data/lib data/history
//mode -> Like/His F/T

function ContentPage(props) {
    const [state, setState] = useState({
        modeHis: false,
        data: tileData
    })

    const [tileDisplayData, setTileDisplayData] = useState({
        ifTileDisplay: false,
        tileDisplayData: null,
    })

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

    const tileDisplay = (showState, tileData) => {
        if (showState) {
            setTileDisplayData({
                ...tileDisplayData,
                ifTileDisplay: true,
                tileDisplayData: tileData,
            })
        } else {
            setTileDisplayData({
                ...tileDisplayData,
                ifTileDisplay: false,
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

    const genSections = () => {
        const eachSection = state.data[state.modeHis?0:1].map((each) =>
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

    return (
        <div
            style={{
                position: 'relative',
                width: props.scale * 390,
                height: props.scale * 844,
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div
                style={{
                    width: props.scale * 354,
                    height: props.scale * 844,
                    display: 'flex',
                    position: 'relative',
                    left:props.scale * 18,
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
            </div>
            {tileDisplayData.ifTileDisplay?<div
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: props.scale * 354,
                        height: props.scale * 844,
                    }}
                >
                    <DisplayTile
                        scale={props.scale}
                        data={tileDisplayData.tileDisplayData}
                        exitFunc={tileDisplay}
                    >
                    </DisplayTile>
            </div> : null
            }
        </div>
    );
}

export default ContentPage;