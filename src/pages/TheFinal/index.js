import "./style.scss";
import {
    LogoWorldcupMain2022,
    MascotWorldcup2022,
} from "../../utils/constants/images";

function TheFinal() {
    return (  
        <div className="the-final">
            <div className="the-final__header">
                <div className="logo-worldcup-2022">
                    <img src={LogoWorldcupMain2022} alt="Logo World Cup" />
                </div>
                <div className="the-final__header-menu">
                    <div>
                        <p>Bảng đấu</p>
                    </div>
                    <div>
                        <p>Vòng bảng</p>
                    </div>
                    <div>
                        <p>Vòng đối đầu</p>
                    </div>
                    <div>
                        <p>Các trận đấu</p>
                    </div>
                </div>
                <div className="logo-worldcup-2022">
                    <img src={MascotWorldcup2022} alt="Mascot World Cup" />
                </div>
            </div>
        </div>
    );
}

export default TheFinal;