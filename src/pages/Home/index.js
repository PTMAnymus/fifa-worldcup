import { useNavigate } from "react-router-dom";
import { QatarCup } from "../../utils/constants/images";
import "./style.scss"

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="home-main">
                <img src={QatarCup} alt="Quata Cup" className="qatar-cup"/>
                <span onClick={() =>{navigate("final")} }>Home</span>
            </div>
        </div>
    );
}

export default Home;