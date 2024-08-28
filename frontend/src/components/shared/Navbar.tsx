import { Layout, Button } from "antd";
const { Header } = Layout;

const NavbarComponent = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" style={{ marginRight: 16 }}>
          <span style={{ color: "white", fontSize: 14 }}>
            Abstract | Help Center
          </span>
        </div>
      </div>

      <Button type="default" ghost>
        Submit a request
      </Button>
    </Header>
  );
};

export default NavbarComponent;
