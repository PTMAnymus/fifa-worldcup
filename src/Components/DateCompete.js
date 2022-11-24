import PropTypes from "prop-types";

function DateCompete({ data }) {
    return ( 
        <div className="date-compete" >
            <div className={`date-compete__header `}>
                <p>{`Ngày thi đấu - ${data.date}`}</p>
            </div>
            <div className="date-compete__body">
                    {data.listMatch.map((_data, _idx) => {
                        return(
                            <div className="date-compete__body__match" key={_idx} >
                                    <p className="match__header">{_data.type}</p>
                                    <div className="match__body">
                                        <div className="match__body__team">
                                            <div className={`match__body__team-item ${_data.firstScore<_data.secondScore?"item-disabled":""}`}> 
                                                <div className="icon-text">
                                                    <img src={_data.firstTeam.img} alt={_data.firstTeam.name}/>
                                                    <p>{_data.firstTeam.name}</p>
                                                </div>
                                                {_data.firstScore === null?
                                                    <></>
                                                :
                                                    <p>{_data.firstScore}</p>
                                                }
                                            </div>
                                        
                                            <div className={`match__body__team-item ${_data.secondScore<_data.firstScore?"item-disabled":""}`}>
                                                <div className="icon-text">
                                                    <img src={_data.secondTeam.img} alt={_data.secondTeam.name}/>
                                                    <p>{_data.secondTeam.name}</p>
                                                </div>
                                                {_data.secondScore === null?
                                                    <></>
                                                :
                                                    <p>{_data.secondScore}</p>
                                                }
                                            </div>
                                        </div>
                                        <div className="line-height-100">
                                            {_data.secondScore === null?
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
            {/* <div>
                {console.log(data.date.includes("3/12"))}
                {
                    data.date.includes("24/11") && 
                   <div className={`date-compete__header `}>
                            <p>{`Vòng bảng - ${data.date}`}</p>
                            
            </div>
                }
            </div> */}
          
        </div>
    );
}

DateCompete.propTypes = {
    data: PropTypes.object,
}

export default DateCompete;