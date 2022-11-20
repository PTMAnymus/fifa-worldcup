function DateCompete(data) {
    return ( 
        <div className="date-compete">
            <div className="date-compete__header">
                <p>{`Vòng bảng - ${data.data.date}`}</p>
            </div>
            <div className="date-compete__body">
                    {data.data.match.map((_data, _idx) => {
                        return(
                            <div className="date-compete__body__match" key={_idx}>
                                    <p className="match__header">{`Bảng ${_data.group}`}</p>
                                    <div className="match__body">
                                        <div className="match__body__team">
                                            <div className="match__body__team-item"> 
                                                <div className="icon-text">
                                                    <img src={_data.icon1} alt="Qatar"/>
                                                    <p>{_data.team1}</p>
                                                </div>
                                                {_data.score1 === ""?
                                                    <></>
                                                :
                                                    <p>{_data.score1}</p>
                                                }
                                            </div>
                                            <div className="match__body__team-item">
                                                <div className="icon-text">
                                                    <img src={_data.icon2} alt="Qatar"/>
                                                    <p>{_data.team2}</p>
                                                </div>
                                                {_data.score1 === ""?
                                                    <></>
                                                :
                                                    <p>{_data.score2}</p>
                                                }
                                            </div>
                                        </div>
                                        <div className="line-height-100">
                                            {_data.score1 === ""?
                                                <div >
                                                    <p>{_data.time}</p>
                                                </div>
                                            :
                                                <div>
                                                    <p>KT</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                    }
                </div>
        </div>
    );
}

export default DateCompete;