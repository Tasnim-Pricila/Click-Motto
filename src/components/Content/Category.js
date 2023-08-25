import { Card, Col, Row, Typography } from "antd";
import workspace from "../../assets/images/workspace.jpg";
import summer from "../../assets/images/summer.jpg";
import gravity from "../../assets/images/gravity.jpg";
import city from "../../assets/images/city.jpg";
import food from "../../assets/images/food.jpg";
import "./Category.css";

const Category = () => {
  const categoryData = [
    {
      image: workspace,
      title: "Workspace",
    },
    {
      image: summer,
      title: "Summer",
    },
    {
      image: city,
      title: "City",
    },
    {
      image: food,
      title: "Food",
    },
    {
      image: gravity,
      title: "Gravity",
    },
  ];
  return (
    <div>
      <Typography.Title level={5} style={{ marginTop: 0, fontWeight: "bold" }}>
        Top Categories
      </Typography.Title>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
        }}
        className="category-container"
      >
        {categoryData.map((category) => (
          <Col>
            <Card
              bordered={false}
              hoverable
              style={{
                marginBottom: "10px",
              }}
            >
              <Typography
                style={{
                  height: "17vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `url(${category.image}) , rgb(93 77 77 / 77%)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  color: "white",
                  fontWeight: "bold",
                  backgroundBlendMode: "overlay",
                  fontSize: "16px",
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
