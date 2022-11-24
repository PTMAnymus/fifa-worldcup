
import DateCompete from "../../../Components/DateCompete.js";
import { useEffect, useState } from "react";

function Match() {
    const linkJson = "https://app-world-cup-2022.herokuapp.com/match";
    const [dataMatch, setDataMatch] = useState([]);
    const date = new Date();
    const initDay = `${date.getDate()-1}/${date.getMonth() + 1}`
    useEffect(() => {
        fetch(linkJson)
            .then((response) => {
                return response.json();
            })
    
            .then((response) => {
                setDataMatch(response)
            })
            .catch((error)=> {
                console.log(error)
            })
    }, [])
    useEffect(() => {
        document.getElementById(initDay)?.scrollIntoView()
    })
    return ( 
        <div className="match">
            {dataMatch.map((_data, _idx) => {
                const date = _data.date.slice(-5).trim()
                return (
                    <div id={date}>
                        <DateCompete data={_data} key={_idx}/> 
                    </div>
                )
            })

            }
        </div>
     );
}


export default Match;