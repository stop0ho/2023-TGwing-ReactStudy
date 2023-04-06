import React from "react";
import { Link, useParams } from "react-router-dom";

const Navigation = () => {
  const v = useParams();
  console.log(v.title);
  return (
    <div>
      <div className="navbar">
        <div className="nav-header">Title</div>
        <div className="nav-content">
          <Link to="/out">
            <nav className={v.title == "out" ? "bg-gray" : ""}>소개</nav>
          </Link>
          <Link to="/ceo">
            <nav className={v.title == "ceo" ? "bg-gray" : ""}>경력</nav>
          </Link>
          <nav>주소</nav>
          <nav>연락처</nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
