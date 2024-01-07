import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorInsights from "../../News/EditorsInsights/EditorInsights";
import { Row } from "react-bootstrap";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h4>All category</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-secondary text-decoration-none ">{category.name}</Link>
          </p>
        ))}
      </div>
      <Row md={1}  className="g-4 mt-4">
        <EditorInsights></EditorInsights>
      </Row>
    </div>
  );
};

export default LeftNav;
