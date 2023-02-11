import { Link } from "react-router-dom";
import AnnouncementList from "../../components/AnnouncementList";
import NavBar from "../../components/NavBar";

const Announcement = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <div>
          <div className="d-flex justify-content-between">
            <h1>공지사항</h1>
            <div>
              <Link to="/Announcement/create" className="btn btn-dark">
                Create New
              </Link>
            </div>
          </div>
          <AnnouncementList />
        </div>
      </div>
    </>
  );
};

export default Announcement;
