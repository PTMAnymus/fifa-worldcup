

const Group = ({ Group }) => {
    return (
        <div className="group__team">
            <p className="group__team__header">{`Group ${Group.group}`}</p>
            {Group.team.map((_team, _index) => {
                return (
                    <div className="group__team__item" key={_index}> 
                        <div className="group__team__item-img">
                            <img src={_team.icon} alt={`Team ${_index}`} />
                        </div>
                        <span>{_team.country}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Group;