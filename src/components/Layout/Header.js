import {
  Button,
  Divider,
  Layout,
  Menu,
  Popover,
  Space,
  Typography,
} from "antd";
import "./Header.css";
import { FaFacebook, FaInstagram, FaMediumM, FaPinterest, FaTwitter, FaVimeoV } from 'react-icons/fa';

const Header = () => {
  const content = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        background: "black",
        color: "white",
        padding: " 10px 14px",
      }}
    >
      <p>About Click Motto</p>
      <p>Pricing</p>
      <p>License</p>
      <p>Partnerships</p>
      <p>Blog</p>
      <p>Help</p>
      <p>Join The Team</p>
      <div  style={{
        display: "flex",
        gap: "14px",
        marginTop: "10px"
      }}>
        <p><FaFacebook style={{color: "orange", fontSize: "16px"}}/></p>
        <p><FaTwitter style={{color: "black", background: "orange", padding: '3px', borderRadius: "50%", fontSize: "10px"}}/></p>
        <p><FaInstagram style={{color: "black", background: "orange", padding: '3px', borderRadius: "50%", fontSize: "10px"}}/></p>
        <p><FaPinterest style={{color: "orange", fontSize: "16px"}}/></p>
        <p><FaVimeoV style={{color: "black", background: "orange", padding: '3px', borderRadius: "50%", fontSize: "10px"}}/></p>
        <p><FaMediumM style={{color: "black", background: "orange", padding: '3px', borderRadius: "50%", fontSize: "10px"}}/></p>
      </div>
    </div>
  );
  return (
    <Layout.Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white",
      }}
    >
      <Typography
        style={{ color: "orange", fontWeight: "bold", fontSize: "20px" }}
      >
        CLick Motto
      </Typography>

      <Space style={{ display: "flex", gap: "24px" }}>
        <Typography>Explore</Typography>
        <Typography>Discover</Typography>
        <Typography>For Professionals</Typography>
        <Popover placement="bottomLeft" content={content} trigger="click">
          <Button type="text">...</Button>
        </Popover>
        <Button>Submit Photos</Button>
        <Divider
          type="vertical"
          style={{ background: "#958c8cd6", height: "1.7rem" }}
        />
        <Button type="text">Login</Button>
        <Button
          style={{ background: "orange", color: "white", border: "none" }}
        >
          Join free
        </Button>
      </Space>
    </Layout.Header>
  );
};

export default Header;
