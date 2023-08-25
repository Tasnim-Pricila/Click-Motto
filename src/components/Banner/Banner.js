import { SearchOutlined } from "@ant-design/icons";
import { Input, Typography } from "antd";

const Banner = () => {
  return (
    <div style={{ background: "black", height: "85vh", margin: "0 50px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 350px",
          height: "100%",
          border: "2px solid red",
        }}
      >
        <Typography.Title style={{ color: "white", marginTop: 0 }}>
          Your local source of high quality images and videos directly from
          their creators
        </Typography.Title>
        <div style={{width: "100%"}}>
          <Input
            size="large"
            style={{
              borderRadius: "20px",
              padding: "10px 20px",
            }}
            placeholder="Search photos and videos"
            suffix={<SearchOutlined style={{fontSize: "20px"}} />}
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
