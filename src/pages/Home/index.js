import { useNavigate } from "react-router-dom";
import {
    AlbaHome,
    BaleHome,
    BryanHome,
    EhsanHome,
    GuardadoHome,
    HassanHome,
    KaneHome,
    KoulibalyHome,
    LewandowskiHome,
    MbapeHome,
    MessiHome,
    MinaminoHome,
    MsakniHome,
    NeuerHome,
    NeymarHome,
    QatarCup,
    RonaldoHome,
    RyanHome,
    SalmanHome,
    SimonHome,
    TurnerHome,
    ValenciaHome,
    VandilkHome
} from "../../utils/constants/images";
import "./style.scss"

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="home__main">
                <img src={QatarCup} alt="Quata Cup" className="home__main-cup" onClick={() => { navigate("final") }} />
                <img src={MessiHome} alt="Messi" className="home__main-messi" />
                <img src={RonaldoHome} alt="Ronaldo" className="home__main-ronaldo" />
                <img src={NeymarHome} alt="Neymar" className="home__main-neymar" />
                <img src={BaleHome} alt="Bale" className="home__main-bale" />  
                <img src={EhsanHome} alt="Ehsan" className="home__main-ehsan" />
                <img src={ValenciaHome} alt="Valencia" className="home__main-valencia" />
                <img src={HassanHome} alt="Hassan" className="home__main-hassan" />
                <img src={SimonHome} alt="Simon" className="home__main-simon" />
                <img src={VandilkHome} alt="Vandilk" className="home__main-vandilk" />
                <img src={KoulibalyHome} alt="Koulibaly" className="home__main-koulibaly" />
                <img src={KaneHome} alt="Kane" className="home__main-kane" />
                <img src={RyanHome} alt="Ryan" className="home__main-ryan" />
                <img src={TurnerHome} alt="Turner" className="home__main-turner" />
                <img src={GuardadoHome} alt="Guardado" className="home__main-guardado" />
                <img src={MinaminoHome} alt="Minamino" className="home__main-minamino" />
                <img src={NeuerHome} alt="Neuer" className="home__main-neuer" />
                <img src={MbapeHome} alt="Mbape" className="home__main-mbape" />
                <img src={LewandowskiHome} alt="Lewandowski" className="home__main-lewans" />
                <img src={SalmanHome} alt="Salman" className="home__main-salman" />
                <img src={MsakniHome} alt="Msakni" className="home__main-msakni" />
                <img src={BryanHome} alt="Bryan" className="home__main-bryan" />
                <img src={AlbaHome} alt="Alba" className="home__main-alba" />
                
            </div>
        </div>
    );
}

export default Home;