import { Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#DADBF0",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h2 style={{fontSize: "32px", color: "#333" }}>
        How Can we help?
      </h2>

      <div style={{ width: "100%", maxWidth: "500px" }}>
      <Input.Search
          placeholder="Search..."
          size="large"
          enterButton={
            <Button icon={<ArrowRightOutlined />} />
          }
          onSearch={(value) => console.log(value)}
        />
      </div>
    </div>
  );
};

export default Banner;