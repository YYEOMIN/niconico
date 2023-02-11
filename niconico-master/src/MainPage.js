import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/UserPage/IndexPage";
import HomePage from "./pages/UserPage/HomePage";
import FreeCreatePage from "./pages/UserPage/FreeCreatePage";
import AnnounCreatePage from "./pages/UserPage/AnnounCreatePage";
import RequestCreatePage from "./pages/UserPage/RequestCreatePage";
import FreeEditPage from "./pages/UserPage/FreeEditPage";
import AnnounEditPage from "./pages/UserPage/AnnounEditPage";
import RequestEditPage from "./pages/UserPage/RequestEditPage";
import FreePostPage from "./pages/UserPage/FreePostPage";
import Announcement from "./pages/UserPage/Announcement";
import CigarRequest from "./pages/UserPage/CigarRequest";
import AdminPage from "./pages/AdminPage/AdminPage";
import FreeShowPage from "./pages/UserPage/FreeShowPage";
import AnnounShowPage from "./pages/UserPage/AnnounShowPage";
import RequestShowPage from "./pages/UserPage/RequestShowPage";

function MainPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/FreeList" element={<FreePostPage />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/CigarRequest" element={<CigarRequest />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/FreeList/create" element={<FreeCreatePage />} />
        <Route path="/CigarRequest/create" element={<RequestCreatePage />} />
        <Route path="/Announcement/create" element={<AnnounCreatePage />} />
        <Route path="/FreeList/:id/edit" element={<FreeEditPage />} />
        <Route path="/CigarRequest/:id/edit" element={<RequestEditPage />} />
        <Route path="/Announcement/:id/edit" element={<AnnounEditPage />} />
        <Route path="/FreeList/:id" element={<FreeShowPage />} />
        <Route path="/cigarRequest/:id" element={<RequestShowPage />} />
        <Route path="/Announcement/:id" element={<AnnounShowPage />} />
      </Routes>
    </Router>
  );
}

export default MainPage;
