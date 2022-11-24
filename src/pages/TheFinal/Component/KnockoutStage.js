import { useEffect, useState } from "react";
import MatchKnock from "../../../Components/MatchKnock";
import { QatarCup } from "../../../utils/constants/images";

const KnockoutStage = () => {
    const linkData = [
        "https://app-world-cup-2022.herokuapp.com/match/round-16",
        "https://app-world-cup-2022.herokuapp.com/match/qualifier",
        "https://app-world-cup-2022.herokuapp.com/match/semifinal",
        "https://app-world-cup-2022.herokuapp.com/match/third-place",
        "https://app-world-cup-2022.herokuapp.com/match/final"
    ]

    const [data_16, setData_16] = useState([])
    const [dataQualifier, setDataQualifier] = useState([])
    const [dataSemifinal, setDataSemifinal] = useState([])
    const [dataThird, setDataThird] = useState([])
    const [dataFinal, setDataFinal] = useState([])


    useEffect(() => {
        fetch(linkData[0])
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setData_16(response)
            })
        fetch(linkData[1])
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setDataQualifier(response)
            })
        fetch(linkData[2])
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setDataSemifinal(response)
            })
        fetch(linkData[3])
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setDataThird(response)
            })
        fetch(linkData[4])
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setDataFinal(response.json)
            })
    }, [])
    return (   
        <div className="knock">
            <div className="knock__16-team">
                {data_16.map((_data, _idx) => {
                    _data.listMatch.map((__data, __idx) => {
                        console.log(_data.type)
                        return (
                            <KnockoutStage data={__data} time={_data.time} type={_data.type} key={__idx} />
                        )
                    })
                })

                }
            </div>
            <div className="knock__qualifier">

            </div>
            <div className="knock__semifinal">

            </div>
            <div className="knock__third">

            </div>
            <div className="knock__final">

            </div>
            {/* <img src={QatarCup} alt="Qatar Cup" className="knock-cup"/> */}
        </div>
    )
}

export default KnockoutStage;