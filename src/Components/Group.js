

const Group = (Group ) => {
   
    return (
        <div className="group__team">
            <p className="group__team__header">{`Group ${Group.Group.name}`}</p>
            {Group.Group.listTeam.map((_team, _index) => {
                return (
                    <div className="group__team__item" key={_index}> 
                        <div className="group__team__item-img">
                            <img src={_team.img} alt={`Team ${_index}`} />
                        </div>
                        <span>{_team.name}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Group;