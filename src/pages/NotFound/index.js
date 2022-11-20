import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <p onClick={navigate("")}>NotFound</p>
        </>
    )
}

export default NotFound;