import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center container mx-auto p-5 d-flex flex-column gap-4">
      <h1 className="text-warning  "> Sayfa Bulunamadı</h1>

      <img
        src="/notFound.gif"
        className=" w-100 rounded not-found-image"
        alt=""
      />
      <p className="fs-1">
        <Link to="/">
          <b>Ana Sayfa</b>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
