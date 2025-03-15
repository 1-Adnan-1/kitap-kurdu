import { NavLink, Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="d-flex align-items-start gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-4 rounded-4 mt-5">
        <NavLink to="/kategori/hikaye">Hikaye</NavLink>
        <NavLink to="/kategori/roman">Roman</NavLink>
      </aside>
      {/* İlgili Alt Bileşene */}

      <Outlet />
    </div>
  );
};

export default Category;
