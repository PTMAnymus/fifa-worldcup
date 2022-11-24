import "./style.scss";
import {
    LogoWorldcupMain2022,
    MascotWorldcup2022,
} from "../../utils/constants/images";
import { useState } from "react";
import NotFound from "../NotFound";
import GroupState from "./Component/GroupState";
import GroupRanks from "./Component/GroupRanks";
import KnockoutStage from "./Component/KnockoutStage";
import Match from "./Component/Match";
import { useNavigate } from "react-router-dom";

function TheFinal() {
    const [isActiveMenu, setIsActiveMenu] = useState(1)
    const navigate = useNavigate()
    const handleActiveMenu = (value) => {
        setIsActiveMenu(value)
    }
    const handleGoHome = () => {
        navigate("/")
    }
    return (  
        <div className="the-final">
            <div className="the-final__header">
                <div className="logo-worldcup-2022">
                    <img src={LogoWorldcupMain2022} alt="Logo World Cup" onClick={handleGoHome}/>
                </div>
                <div className="the-final__header-menu">
                    <div className={`${isActiveMenu===1?"active-menu":""}`} onClick={() => handleActiveMenu(1)}>
                        <p>BẢNG ĐẤU</p>
                    </div>
                    <div className={`${isActiveMenu===2?"active-menu":""}`} onClick={() => handleActiveMenu(2)}>
                        <p>VÒNG BẢNG</p>
                    </div>
                    <div className={`${isActiveMenu===3?"active-menu":""}`} onClick={() => handleActiveMenu(3)}>
                        <p>LOẠI TRỰC TIẾP</p>
                    </div>
                    <div className={`${isActiveMenu===4?"active-menu":""}`} onClick={() => handleActiveMenu(4)}>
                        <p>TRẬN ĐẤU</p>
                    </div>
                    <div className={`${isActiveMenu===5?"active-menu":""}`} onClick={() => handleActiveMenu(5)}>
                        <p>ĐỘI HÌNH</p>
                    </div>
                </div>
                <div className="logo-worldcup-2022">
                    <img src={MascotWorldcup2022} alt="Mascot World Cup" />
                </div>
            </div>
            <div className="the-final__body">
                {isActiveMenu === 1 ?
                    <GroupState />
                    :
                    (isActiveMenu === 2 ?
                        <GroupRanks/>
                        :
                        (isActiveMenu === 4?
                        <Match/>
                            :
                            (isActiveMenu === 3 ?
                                <KnockoutStage/>
                                :
                            <NotFound />
                            )
                        )
                    )
                }
            </div>
        </div>
    );
}

export default TheFinal;


