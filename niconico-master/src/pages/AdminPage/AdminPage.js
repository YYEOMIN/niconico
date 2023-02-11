import { Link } from "react-router-dom";
import BlogList from "../../components/FreeList";
import NavBar from "../../components/NavBar";

const AdminPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-3">
        <div className="d-flex justify-content-between">
          <h1>Admin</h1>
          <div>
            <Link to="/blogs/create" className="btn btn-dark">
              Create New
            </Link>
          </div>
        </div>
        <BlogList isAdmin={true} />
      </div>
    </div>
  );
};

export default AdminPage;
