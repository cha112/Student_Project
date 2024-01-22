import { MdOutlineDashboard } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import studentSVG from "./icons/student-icon.svg";
import dashboardSVG from "./icons/dashboard.svg";
import bookSVG from "./icons/book.svg";
import standUsersSVG from "./icons/stand-users.svg";
import examSVG from "./icons/exam.svg";
import resultsSVG from "./icons/results.svg";
import blackBoardSVG from "./icons/black-board.svg";
import liveSVG from "./icons/live-streaming.svg";
import notificationSVG from "./icons/notification.svg";

const sidebarStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
    width: "100%",
    marginTop: '40px'
}

const sideBarHeader = {
    display: "flex",
    margin: "20px 0 20px 20px",
    alignItems: "center"
}

const row = {
    display: "flex",
    marginLeft: "20px",
    alignItems: "center",
    cursor: 'pointer'
}


export const SideBar = () => {
    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <div className="sidebar-header" style={sideBarHeader}>
                <div className="box">
                    <img src={studentSVG} alt="school space" />
                </div>
                <h3>School Space</h3>
                
            </div>

            <div style={sidebarStyle}>
                <div style={row}>
                    <img src={dashboardSVG} alt="dashboard" style={{ width: '24px', height: '24px', marginRight: '20px' }} />
                    <span className="sidebar-label">Dashboard</span>
                </div>
                <div style={row}>
                    <img src={bookSVG} alt="dashboard" style={{ width: '24px', height: '24px', marginRight: '20px' }} />
                    <span className="sidebar-label">Courses</span>
                </div>
                <div style={row}>
                    <img src={standUsersSVG} alt="dashboard" style={{ width: '24px', height: '24px', marginRight: '20px' }} />
                    <span className="sidebar-label"> Students</span>
                </div>
                <div style={row}>
                    <img src={examSVG} alt="dashboard" style={{ width: '24px', height: '24px', marginRight: '20px' }} />
                    <span className="sidebar-label">Exams</span>
                </div>
                <div style={row}>
                    <img src={resultsSVG} alt="dashboard" style={{ width: '24px', height: '24px', marginRight: '20px' }} />
                    <span className="sidebar-label">Results</span>
                </div>
                <div style={row}>
                    <img src={blackBoardSVG} alt="dashboard" style={{ width: '24px', height: '24px', marginRight: '20px' }} />
                    <span className="sidebar-label">Notice Board</span>
                </div>
                <div style={row}>
                    <img src={liveSVG} alt="dashboard" style={{ width: '24px', height: '24px', marginRight: '20px' }} />
                    <span className="sidebar-label">Live Classes</span>
                </div>
                <div style={row}>
                    <img src={notificationSVG} alt="dashboard" style={{ width: '24px', height: '24px', marginRight: '20px' }} />
                    <span className="sidebar-label">Notifications</span>
                </div>
            </div>
        </div>
    )
}