
import "./Header.css"
import {useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const onPressHome = () => {
        navigate("/BlogPage/");
    }
    const onPressPapers = () => {
        navigate("/BlogPage/papers");
    }
    const onPressProjects = () => {
        navigate("/BlogPage/projects");
    }
    const onPressStudy = () => {
        navigate("/BlogPage/study");
    }

    return (
        <>
            <div className="header-wrapper">
                <h1 onClick={onPressHome}>TITLE</h1>
                <ul className="menu-buttons">
                {/*    menubar contents*/}
                    <li onClick={onPressPapers} className="menu-select">Papers</li>
                    <li onClick={onPressProjects} className="menu-select">Projects</li>
                    <li onClick={onPressStudy} className="menu-select">Study</li>
                </ul>
            </div>
        </>
    )
}
export default Header