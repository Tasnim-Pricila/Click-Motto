import { Avatar } from "antd";
import React from "react";
import { FaDownload } from "react-icons/fa";
import user from "../../../assets/images/user.jpg";
import { HeartFilled, PlusOutlined } from "@ant-design/icons";

const GalleryContainer = ({mediaArray}) => {
  return (
    <div className="gallery-container">
      {mediaArray.map((media) => (
        <>
          <div className="image-container">
            {media.type === "image" ? (
              <img width="100%" src={media.name} alt={media.name} />
            ) : (
              media.type === "video" && (
                <video src={media.name} width="100%" controls></video>
              )
            )}
            <div className="top-item">
              <HeartFilled
                style={{
                  color: "gray",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(199 195 195)",
                  border: "none",
                }}
              />
              <PlusOutlined
                style={{
                  color: "gray",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(199 195 195)",
                  border: "none",
                  fontWeight: "bold",
                }}
              />
            </div>
            <Avatar
              src={user}
              className="bottom-left-item"
              size="small"
              style={{
                backgroundColor: "#87d068",
                border: "none",
              }}
            />
            <FaDownload
              className="bottom-right-item"
              style={{
                backgroundColor: "green",
                border: "none",
                color: "white",
                padding: "5px",
                fontSize: "14px",
                borderRadius: "50%",
              }}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default GalleryContainer;
