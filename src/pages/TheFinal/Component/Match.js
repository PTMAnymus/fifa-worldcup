import {
    QatarFlag,
    EcuadorFlag,
    SenegalFlag,
    // NetherlandsFlag,
    EnglandFlag,
    IranFlag,
    // USAFlag,
    // WalesFlag,
    // ArgentinaFlag,
    // SaudiArabiaFlag,
    // MexicoFlag,
    PolandFlag,
    // FrenchFlag,
    // AustraliaFlag,
    // DenmarkFlag,
    // TunisiaFlag,
    // SpainFlag,
    // CostaRicaFlag,
    // GermanyFlag,
    // JapanFlag,
    // BrasilFlag,
    // SerbiaFlag,
    // SwitzerlandFlag,
    // CameroonFlag,
    // BelgiumFlag,
    // CanadarFlag,
    // MarocFlag,
    // CroatiaFlag,
    // PortugalFlag,
    // GhanaFlag,
    // UruguayFlag,
    // KoreaFlag,
} from "../../../utils/constants/images.js"
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