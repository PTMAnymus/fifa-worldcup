import Group from "../../../Components/Group";
import { useEffect, useState } from "react";



const GroupState = () => {
    const linkGroup = "https://app-world-cup-2022.herokuapp.com/group";
    const [dataGroup, setDataGroup] = useState([]);
    useEffect(() => {
        fetch(linkGroup)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setDataGroup(response)
            });
    }, [])

    return (
        <div className="the-final__body__groupstate">
            {dataGroup.map((_group, _idx) => {
                return (
                        <Group Group={_group} key={_idx}/>
                )
            })}
        </div>
    )
}

export default GroupState;