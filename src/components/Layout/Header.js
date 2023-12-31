import { Button, Divider, Layout, Popover, Space } from "antd";
import "./Header.css";
import {
  FaFacebook,
  FaInstagram,
  FaMediumM,
  FaPinterest,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import logo from "../../assets/images/logo.webp";

const Header = () => {
  const [show, setShow] = useState(false);

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
      <div
        style={{
          display: "flex",
          gap: "14px",
          marginTop: "10px",
        }}
      >
        <p>
          <FaFacebook style={{ color: "orange", fontSize: "16px" }} />
        </p>
        <p>
          <FaTwitter
            style={{
              color: "black",
              background: "orange",
              padding: "3px",
              borderRadius: "50%",
              fontSize: "10px",
            }}
          />
        </p>
        <p>
          <FaInstagram
            style={{
              color: "black",
              background: "orange",
              padding: "3px",
              borderRadius: "50%",
              fontSize: "10px",
            }}
          />
        </p>
        <p>
          <FaPinterest style={{ color: "orange", fontSize: "16px" }} />
        </p>
        <p>
          <FaVimeoV
            style={{
              color: "black",
              background: "orange",
              padding: "3px",
              borderRadius: "50%",
              fontSize: "10px",
            }}
          />
        </p>
        <p>
          <FaMediumM
            style={{
              color: "black",
              background: "orange",
              padding: "3px",
              borderRadius: "50%",
              fontSize: "10px",
            }}
          />
        </p>
      </div>
    </div>
  );
  return (
    <>
      <Layout.Header className="layout-header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="" width="100px" height="auto" />
        </div>

        <Space className="menu-item">
          <p>Explore</p>
          <p style={{ color: "gray" }}>Discover</p>
          <p style={{ color: "gray" }}>For Professionals</p>
          <Popover placement="bottomLeft" content={content} trigger="hover">
            <Button type="text">...</Button>
          </Popover>
          <Button className="submit-button">Submit Photos</Button>
          <Divider
            type="vertical"
            style={{ background: "#958c8cd6", height: "1.7rem" }}
          />
          <Button type="text" style={{ fontWeight: "bold", color: "gray" }}>
            Login
          </Button>
          <Button
            style={{
              background: "orange",
              color: "white",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Join free
          </Button>
        </Space>
          
        {/* mobile menu  */}
        <div className="menu-icon">
          <MenuOutlined
            style={{ color: "black", fontSize: 20 }}
            onClick={() => setShow(!show)}
          />
        </div>
        {show && (
          <div className="mobile-menu">
            <p>Explore</p>
            <p>Discover</p>
            <p>For Professionals</p>
            <Popover placement="bottomLeft" content={content} trigger="hover">
              <Button type="text">...</Button>
            </Popover>
            <Button className="submit-button">Submit Photos</Button>

            <Button type="text">Login</Button>
            <Button
              style={{ background: "orange", color: "white", border: "none" }}
            >
              Join free
            </Button>
          </div>
        )}
      </Layout.Header>
    </>
  );
};

export default Header;
