import { useState, useEffect } from "react";
import GroupRank from "../../../Components/GroupRank"
import {
    ArrowLeft,
    ArrowRight
} from "../../../utils/constants/images"


const GroupRanks = () => {
    const linkGroupRank = "https://app-world-cup-2022.herokuapp.com/group/rank";
    const [dataGroupRank, setDataGroupRank] = useState([]);
    const [groupIndex, setGroupIndex] = useState(1);
    const dataGroupIndex = [
        {
            name: "A",
            idx: 1,
        },
        {
            name: "B",
            idx: 2,
        },
        {
            name: "C",
            idx: 3,
        },
        {
            name: "D",
            idx: 4,
        },
        {
            name: "E",
            idx: 5,
        },
        {
            name: "F",
            idx: 6,
        },
        {
            name: "G",
            idx: 7,
        },
        {
            name: "H",
            idx: 8,
        },
    ]
    useEffect(() => {
        fetch(linkGroupRank)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setDataGroupRank(response)
            })
    }, [])
    const handleSelectGroup = (_idx) => {
        setGroupIndex(_idx + 1)
    }
    const handleFindGroup = (name) => {
        if (name === "incre") {
            if (groupIndex + 1 === 9) {
                setGroupIndex(1)
            } else {
                setGroupIndex(groupIndex + 1);
            }
        } else {
            if (groupIndex - 1 === 0) {
                setGroupIndex(8)
            } else {
                setGroupIndex(groupIndex - 1);
            }
        }
    }
    return (
        <div className="group-ranks">
            <div className="group-ranks__select">
                {dataGroupIndex.map((_data, _idx) => {
                    return (
                        <div key={_idx} onClick={() =>handleSelectGroup(_idx)}>
                            <span>{_data.name}</span>
                        </div>
                    )
                })

                }
            </div>
            <div>
                
                {dataGroupRank.map((_data, _index) => {
                    return (
                        <div className={`group-rank ${_data.id === groupIndex ? "" : "display-none"}`}>
                            
                            <div className="arrow-left" onClick={() => handleFindGroup("decre")}>
                                    <img src={ArrowLeft} alt="arrow"/>
                            </div>
                            <div className="arrow-right" onClick={() => handleFindGroup("incre")}>
                                    <img src={ArrowRight} alt="arrow"/>
                            </div>
                            <GroupRank data={_data} key={_index}/>
                        </div>
                    )
                })
                }
                
            </div>
        </div>
    )
}

export default GroupRanks;