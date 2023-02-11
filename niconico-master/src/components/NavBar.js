import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          니코니코틴
        </Link>
        <ul className="navbar-nav" style={{ flexDirection: "row" }}>
          <li className="nav-item me-3">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              aria-current="page"
              to="/home"
            >
              메인페이지
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              aria-current="page"
              to="/FreeList"
            >
              자유게시판
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              aria-current="page"
              to="/CigarRequest"
            >
              담배요청
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              aria-current="page"
              to="/AnnounCement"
            >
              공지사항
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
