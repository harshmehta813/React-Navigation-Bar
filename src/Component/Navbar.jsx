import styled from "styled-components";

const ToolBar = styled.div`
  border-radius: 0.25rem;
  background: #3f51b5;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
`;
const SiteName = styled.div`
  position: absolute;
  left: 20px;
`;
const DrawerItem = ({ label }) => {
  return <h4 className="children">{label}</h4>;
};
const Navbar = () => {
  return (
    <ToolBar>
      <SiteName>
        <DrawerItem label={"Sitename"} />
      </SiteName>
      <DrawerItem label={"About as"} />
      <DrawerItem label={"Price"} />
      <DrawerItem label={"Start page"} />
      <DrawerItem label={"Offer"} />
      <DrawerItem label={"Contact"} />
    </ToolBar>
  );
};

export default Navbar;
