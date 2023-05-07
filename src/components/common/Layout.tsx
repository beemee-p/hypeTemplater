import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}
const Layout = (props: LayoutProps): ReactElement => {
  return (
    <DIV_Layout>
      <Header />
      {props.children}
    </DIV_Layout>
  );
};

const DIV_Layout = styled.div``;

export default Layout;
