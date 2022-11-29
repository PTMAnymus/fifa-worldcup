
import MatchKnock from "../../../Components/MatchKnock";
import "../style.scss"

const KnockoutStage = () => {
    const dataKnock = [
        {
            name: "Vòng 1/8",
            listMatch: [
                {
                    name: "Trận 1",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Argentina",
                        img: "https://kirellia719.github.io/flag-data/ArgentinaFlag.jpg"
                    },
                    secondTeam: {
                        name: "Uruguay",
                        img: "https://kirellia719.github.io/flag-data/AustraliaFlag.jpg"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 2",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Nhất C",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Nhì D",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 3",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Nhất D",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Nhì C",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 4",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Nhất B",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Nhì A",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 5",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Nhất E",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Nhì F",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 6",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Nhất G",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Nhì H",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 7",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Nhất F",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Nhì E",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 8",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Nhất H",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Nhì G",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                }
            ],
        },
        {
            name: "Tứ kết",
            listMatch: [
                {
                    name: "Trận 1",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Thắng 5",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Thắng 6",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 2",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Thắng 1",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Thắng 2",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 3",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Thắng 7",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Thắng 8",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 4",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Thắng 4",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Thắng 3",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
            ],
        },
        {
            name: "Bán kết",
            listMatch: [
                {
                    name: "Trận 1",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Thắng TK2",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Thắng TK1",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
                {
                    name: "Trận 2",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Thắng TK4",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Thắng TK3",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
            ],
        },
        {
            name: "Trung kết",
            listMatch: [
                {
                    name: "",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Thắng BK1",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Thắng BK2",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "",
                },
            ],
        },
        {
            name: "Hạng ba",
            listMatch: [
                {
                    name: "",
                    date: "24-11",
                    time: "22:00",
                    firstTeam: {
                        name: "Thua BK1",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    secondTeam: {
                        name: "Thua BK2",
                        img: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                    },
                    firstScore: 6,
                    secondScore: 1,
                    status: "Complete",
                },
            ],
        }
    ]
    return (   
        <div className="knock">
                {dataKnock.map((_data, _idx) => {
                    return (
                        <div className={`knock__match knock__match${_idx}`} key={_idx}>
                            <span className={`knock__match__header knock__match__header-${_idx}`}>{_data.name}</span>
                            <MatchKnock data={_data} inde={_idx} />
                        </div>
                    )
                })
                    }
        </div>
    )
}

export default KnockoutStage;