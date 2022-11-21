
import DateCompete from "../../../Components/DateCompete.js";
import { useEffect, useState } from "react";

function Match() {
    const linkJson = "https://app-world-cup-2022.herokuapp.com/match";
    const [dataMatch, setDataMatch] = useState([
        
    ]);
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

    return ( 
        <div className="match">
            {dataMatch.map((_data, _idx)=> {

                return (
                    <DateCompete data={_data} key={_idx}/> 
                )
            })

            }
        </div>
     );
}



export default Match;