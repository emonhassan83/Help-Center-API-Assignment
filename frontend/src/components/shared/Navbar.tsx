import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <div className="demo-logo" style={{ marginRight: 16 }}>
            <span style={{ color: "white", fontSize: 14 }}>
              Abstract | Help Center
            </span>
          </div>
        </Link>
      </div>

      <Link to="/submit-request">
        <Button type="default" ghost>
          Submit a request
        </Button>
      </Link>
    </Header>
  );
};

export default NavbarComponent;
