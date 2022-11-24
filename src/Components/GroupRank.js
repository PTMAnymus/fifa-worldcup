

const GroupRank = ({ data }) => {
    const date = new Date();
    console.log(date.getDate())
    return (
        <div >
            <div className="group-rank__header">
                <span>{`Bảng ${data.name}`}</span>
            </div>
            <div className="group-rank__body">
                <table className="group-rank__table">
                    <thead className="group-rank__table-header">
                        <tr>
                            <th>STT</th>
                            <th className="group-rank__table-team">Đội</th>
                            <th>ST</th>
                            <th>TT</th>
                            <th>TH</th>
                            <th>TB</th>
                            <th>BT</th>
                            <th>TL</th>
                            <th>HS</th>
                            <th>ĐS</th>
                        </tr>
                    </thead>
                    <tbody className="group-rank__table-body">
                    {data.listTeam.map((_data, _idx) => {
                        return (
                            <tr className={`group-rank__table-body-row ${_idx === 1 || _idx === 0 ? "pass-group":""}`}  key={_idx}>
                                <td>{_idx + 1}</td>
                                <td className="group-rank__table-left">
                                    <div>
                                        <img src={_data.info.img} alt={_data.info.img} />
                                        <span>{_data.info.name}</span>
                                    </div>
                                </td>
                                <td>{_data.numMatch}</td>
                                <td>{_data.numWin}</td>
                                <td>{_data.numDraw}</td>
                                <td>{_data.numLose}</td>
                                <td>{_data.numWinGoal}</td>
                                <td>{_data.numLoseGoal}</td>
                                <td>{_data.deltaGoal}</td>
                                <td>{_data.score}</td>
                            </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GroupRank;