import { Card, Col, Row, Typography } from "antd";
import "./Category.css";

const Category = () => {
  const categoryData = [
    {
      image: "skyblue",
      title: "Workspace",
    },
    {
      image: "skyblue",
      title: "Summer",
    },
    {
      image: "skyblue",
      title: "City",
    },
    {
      image: "skyblue",
      title: "Food",
    },
    {
      image: "skyblue",
      title: "Gravity",
    },
  ];
  return (
    <div>
      <Typography.Title level={5} style={{ marginTop: 0, fontWeight: "bold"}}>
        Top Categories
      </Typography.Title>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
        }}
      >
        {categoryData.map((category) => (
          <Col>
            <Card
              bordered={false}
              style={{ background: "skyblue", height: "15vh" }}
            >
              <Typography
                style={{
                  height: "15vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {category.title}
              </Typography>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;
