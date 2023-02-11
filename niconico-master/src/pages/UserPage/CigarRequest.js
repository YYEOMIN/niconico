import { Link } from "react-router-dom";
import CigarRequestList from "../../components/CigarRequestList";
import NavBar from "../../components/NavBar";

const CigarRequest = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <div>
          <div className="d-flex justify-content-between">
            <h1>담배요청</h1>
            <div>
              <Link to="/cigarRequest/create" className="btn btn-dark">
                Create New
              </Link>
            </div>
          </div>
          <CigarRequestList />
        </div>
      </div>
    </>
  );
};

export default CigarRequest;
