import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
            <span onClick={() =>{navigate("final")} }>Home</span>
        </>
    );
}

export default Home;