import { SearchOutlined } from "@ant-design/icons";
import { Input, Typography } from "antd";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <Typography className="title" style={{ color: "white", marginTop: 0 }}>
          Your local source of high quality images and videos directly from
          their creators
        </Typography>
        <div style={{ width: "100%" }}>
          <Input
            size="large"
            style={{
              borderRadius: "20px",
              padding: "10px 20px",
            }}
            placeholder="Search photos and videos"
            suffix={<SearchOutlined style={{ fontSize: "20px" }} />}
          />
        </div>

        <Typography
          style={{ color: "white", marginTop: "10px", justifySelf: "left" }}
        >
          Recommended: summer, food, covid-19, real-estate, love
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
