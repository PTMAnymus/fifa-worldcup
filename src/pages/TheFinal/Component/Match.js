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
    const linkJson = "https://jsonplaceholder.typicode.com/posts";
    const [dataMatch, setDataMatch] = useState([]);
    useEffect(() => {
        fetch(linkJson)
            .then((response) => {
                return response.json();
            })
    
            .then((response) => {
                setDataMatch(response)
            })
    }, [])


    const data = [
        {
            date: "CN, 20/11",
            match: [
                {
                    time: "23:00",
                    group: "A",
                    team1: "Qatar",
                    team2: "Ecuador",
                    icon1: QatarFlag,
                    icon2: EcuadorFlag,
                    score1: "2",
                    score2: "1", 
                },
            ]
        },
        {
            date: "Th2, 21/11",
            match: [
                {
                    time: "20:00",
                    group: "A",
                    team1: "Anh",
                    team2: "Iran",
                    icon1: EnglandFlag,
                    icon2: IranFlag,
                    score1:"3",
                    score2: "2",
                },
                {
                    time: "23:00",
                    group: "A",
                    team1: "Senegal",
                    team2: "Hà Lan",
                    icon1: SenegalFlag,
                    icon2: PolandFlag,
                    score1:"1",
                    score2: "4",
                },
            ]
        },
        {
            date: "Th3, 22/11",
            match: [
                {
                    time: "20:00",
                    group: "C",
                    team1: "Anh",
                    team2: "Iran",
                    icon1: EnglandFlag,
                    icon2: IranFlag,
                    score1:"",
                    score2: "",
                },
                {
                    time: "21:00",
                    group: "D",
                    team1: "Senegal",
                    team2: "Hà Lan",
                    icon1: SenegalFlag,
                    icon2: PolandFlag,
                    score1: "",
                    score2: "",
                },
                {
                    time: "21:00",
                    group: "F",
                    team1: "Anh",
                    team2: "Iran",
                    icon1: EnglandFlag,
                    icon2: IranFlag,
                    score1:"",
                    score2: "",
                },
                {
                    time: "23:00",
                    group: "G",
                    team1: "Senegal",
                    team2: "Hà Lan",
                    icon1: SenegalFlag,
                    icon2: PolandFlag,
                    score1:"",
                    score2: "",
                },
            ]
        },
        {
            date: "Th3, 22/11",
            match: [
                {
                    time: "20:00",
                    group: "C",
                    team1: "Anh",
                    team2: "Iran",
                    icon1: EnglandFlag,
                    icon2: IranFlag,
                    score1:"",
                    score2: "",
                },
                {
                    time: "21:00",
                    group: "D",
                    team1: "Senegal",
                    team2: "Hà Lan",
                    icon1: SenegalFlag,
                    icon2: PolandFlag,
                    score1: "",
                    score2: "",
                },
                {
                    time: "21:00",
                    group: "F",
                    team1: "Anh",
                    team2: "Iran",
                    icon1: EnglandFlag,
                    icon2: IranFlag,
                    score1:"",
                    score2: "",
                },
            ]
        },
    ]

    return ( 
        <div className="match">
            {data.map((_data, _idx)=> {
                return (
                    <DateCompete data={_data} key={_idx}/> 
                )
            })

            }
        </div>
     );
}

export default Match;