import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import Section from '../components/place_holder'
import A1B1 from '../assets/tile_image/A1B1.png'
import A1B2 from '../assets/tile_image/A1B2.png'
import A1B3 from '../assets/tile_image/A1B3.png'

//data -> like data/lib data/history
//mode -> Like/His F/T

function TestPage(props) {
    const [state, setState] = useState({
        modeHis:false,
        data:[
            {
                sectionName:"我的收藏",
                type:'like',
                tiles:[
                    {
                        order:1,
                        name:'釉彩一号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:2,
                        name:'釉彩二号',
                        image:A1B2,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:3,
                        name:'釉彩三号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:4,
                        name:'釉彩三号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:5,
                        name:'釉彩一号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:6,
                        name:'釉彩二号',
                        image:A1B2,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:7,
                        name:'釉彩三号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:8,
                        name:'釉彩三号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    }
                ]
            },
            {
                sectionName:"配釉材质库",
                type:'regular',
                tiles:[
                    {
                        order:1,
                        name:'釉彩一号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:2,
                        name:'釉彩二号',
                        image:A1B2,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:3,
                        name:'釉彩三号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:4,
                        name:'釉彩一号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:5,
                        name:'釉彩二号',
                        image:A1B2,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:6,
                        name:'釉彩三号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:7,
                        name:'釉彩一号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:8,
                        name:'釉彩二号',
                        image:A1B2,
                        selected: false,
                        isSelectable: false,
                    },
                    {
                        order:9,
                        name:'釉彩三号',
                        image:A1B1,
                        selected: false,
                        isSelectable: false,
                    },
                ]
            }
        ]
      })
    
    const [startY, setStartY] = useState(0)
    const [pos, setPos] = useState(0);

    const handleDrag = (event) => {
        const distance = event.clientY - startY;
        setPos(distance);
    }

    const handleDragStart = (event) => {
        setStartY(event.clientY)
    }
      
    const genSections = () => {
        const eachSection = state.data.map((each)=><Section scale={props.scale} data={each}></Section>)
        return(
            <div
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                style={{
                    position:'relative',
                    top:-pos * props.scale,
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
                width:props.scale * 354,
                height:props.scale *616,
                boxSizing: 'border-box',
                display: 'flex',
                gap: props.scale * 18,
                overflow:'scroll',
                gap: props.scale * 18
            }}
        >
        {genSections()}
        </div>
    );
}

export default TestPage;