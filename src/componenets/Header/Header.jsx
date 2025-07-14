
import "./Header.css"
import {useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const onPressHome = () => {
        navigate("/BlogPage/");
    }
    const onPressPapers = () => {
        navigate("/papers");
    }
    const onPressProjects = () => {
        navigate("/projects");
    }
    const onPressStudy = () => {
        navigate("/study");
    }

    return (
        <>
            <div className="header-wrapper">
                <h1 onClick={onPressHome}>TITLE</h1>
                <ul>
                {/*    menubar contents*/}
                    <li onClick={onPressPapers}>Papers</li>
                    <li onClick={onPressProjects}>Projects</li>
                    <li onClick={onPressStudy}>Study</li>
                </ul>
            </div>
        </>
    )
}
export default Header