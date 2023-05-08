import { ReactElement, useContext } from "react";
import Image from "next/image";
import styled from "styled-components";
import IconHamburger from "@/styles/image/icon_hamburger.png";
import IconSun from "@/styles/image/icon_sun.svg";
import IconMoon from "@/styles/image/icon_moon.svg";
import Button from "./Button";
import { ThemeContext } from "@/pages/_app";
import { GlobalTheme } from "@/styles/GlobalTheme";

const Header = (): ReactElement => {
  const { colorTheme, setToggleTheme } = useContext(ThemeContext);

  return (
    <DIV_Header>
      <Button className="header-menu" buttonType={"icon"}>
        <Image
          src={IconHamburger}
          alt={"icon_hamburger"}
          width={24}
          height={20}
        />
      </Button>

      <div className="header-title">HYPE_BEE</div>

      <Button
        className="theme-btn"
        buttonType={"icon"}
        onClick={() => setToggleTheme()}
      >
        <Image
          src={colorTheme === GlobalTheme.light ? IconMoon : IconSun}
          alt={"icon_sun"}
          width={28}
          height={28}
        />
      </Button>
    </DIV_Header>
  );
};

const DIV_Header = styled.div`
  display: flex;
  justify-content: space-between;

  .header-menu {
    padding: 10px;
  }

  .header-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    font-size: 30px;
    color: ${(props) => props.theme.colors?.gray1};
    background: ${(props) => props.theme.colors?.gray12};
  }

  .theme-btn {
    padding: 10px;
  }
`;

export default Header;
