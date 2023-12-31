import { Button, Dropdown, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import four from "../../../assets/images/pexels-denitsa-kireva-17868067.jpg";
import two from "../../../assets/images/pexels-furkanfdemir-12181246.jpg";
import one from "../../../assets/images/pexels-nezrin-16457738.jpg";
import five from "../../../assets/images/pexels-osman-karagöz-18054267.jpg";
import six from "../../../assets/images/pexels-pew-nguyen-17901583.jpg";
import three from "../../../assets/images/pexels-vasilis-karkalas-16586547.jpg";
import seven from "../../../assets/images/seven.jpg";
import eight from "../../../assets/images/eight.jpg";
import nine from "../../../assets/images/nine.jpg";
import ten from "../../../assets/images/ten.jpg";
import eleven from "../../../assets/videos/pexels-baryslau-shoot-17821013 (1080p).mp4";
import twelve from "../../../assets/videos/pexels-bruno-cervera-11649326 (2160p).mp4";
import thirteen from "../../../assets/images/thirteen.jpg";
import fourteen from "../../../assets/images/fourteen.jpg";
import fifteen from "../../../assets/images/fifteen.jpg";

import "./Gallery.css";
import GalleryContainer from "./GalleryContainer";

const Gallery = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          href="/"
          style={{ textAlign: "right", display: "block", width: "100%" }}
        >
          Most Recent
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          href="/"
          style={{ textAlign: "right", display: "block", width: "100%" }}
        >
          Most Viewed
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          href="/"
          style={{ textAlign: "right", display: "block", width: "100%" }}
        >
          Most Downloaded
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          href="/"
          style={{ textAlign: "right", display: "block", width: "100%" }}
        >
          Most Appreciated
        </a>
      ),
    },
  ];

  const mediaArray = [
    { type: "image", name: one },
    { type: "image", name: two },
    { type: "image", name: three },
    { type: "image", name: four },
    { type: "image", name: fifteen },

    { type: "image", name: ten },
    { type: "image", name: six },
    { type: "image", name: seven },
    { type: "image", name: eight },
    { type: "video", name: eleven },
    { type: "image", name: nine },

    { type: "video", name: twelve },
    { type: "image", name: thirteen },
    { type: "image", name: fourteen },
    { type: "image", name: five },
  ];

  return (
    <div>
      <div
        className="gallery-menu"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Typography style={{ fontWeight: "bold" }}>All</Typography>
          <Typography style={{ color: "gray", fontWeight: "bold" }}>
            Photos
          </Typography>
          <Typography style={{ color: "gray", fontWeight: "bold" }}>
            Videos
          </Typography>
          <Typography style={{ color: "gray", fontWeight: "bold" }}>
            Freebies
          </Typography>
          <Typography style={{ color: "gray", fontWeight: "bold" }}>
            360
          </Typography>
        </div>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button>
            Recommended <CaretDownOutlined />{" "}
          </Button>
        </Dropdown>
      </div>
      <GalleryContainer mediaArray={mediaArray} />
    </div>
  );
};

export default Gallery;
