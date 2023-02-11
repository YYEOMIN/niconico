import { Link } from "react-router-dom";
import FreeList from "../../components/FreeList";
import NavBar from "../../components/NavBar";

const FreePostPage = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <div>
          <div className="d-flex justify-content-between">
            <h1>자유 게시판</h1>
            <div>
              <Link to="/FreeList/create" className="btn btn-dark">
                Create New
              </Link>
            </div>
          </div>
          <FreeList />
        </div>
      </div>
    </>
  );
};

export default FreePostPage;
