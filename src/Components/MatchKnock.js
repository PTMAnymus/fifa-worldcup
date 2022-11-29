const MatchKnock = ({ data, inde}) => {
    return (
        <div className="match-knock">
            {data.listMatch.map((_data, _idx) => {
                console.log(_data)
                return (
                    <div className={`match-knocks match-knocks-${inde}`}>
                        <div className="match-knock__content">
                            <span>{`${_data.time} | ${_data.date}`}</span>
                        </div>
                        <div className="match-knock__item">
                            <div className="match-knock__item-team">
                                <div className="match-knock__item-team__item">
                                    <img src={_data.firstTeam.img} alt={_data.firstTeam.name} />
                                    <span>{_data.firstTeam.name}</span>
                                </div>
                                {_data.status === "Complete" ?
                                    <span className="match-knock__item-score">{_data.firstScore}</span>
                                    :
                                    <></>
                                }
                            </div>
                            <div className="match-knock__item-team">
                                <div className="match-knock__item-team__item">
                                    <img src={_data.secondTeam.img} alt={_data.secondTeam.name} />
                                    <span>{_data.secondTeam.name}</span>
                                </div>
                                {_data.status === "Complete" ?
                                    <span className="match-knock__item-score">{_data.secondScore}</span>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                   </div> 
                )
            })

            }
        </div>
    )
}

export default MatchKnock