import { ReactElement, useContext } from "react";
import styled from "styled-components";
import IconHamburger from "@/styles/image/icon_hamburger.svg";
import IconSun from "@/styles/image/icon_sun.svg";
import IconMoon from "@/styles/image/icon_moon.svg";
import Button from "./Button";
import { ThemeContext } from "@/pages/_app";

const Header = (): ReactElement => {
  const { isDarkMode, colorTheme, setToggleTheme } = useContext(ThemeContext);

  return (
    <DIV_Header>
      <Button className="header-menu" buttonType={"icon"}>
        <IconHamburger color={colorTheme?.colors.gray1} />
      </Button>

      <div className="header-title">HYPE_BEE</div>

      <Button
        className="theme-btn"
        buttonType={"icon"}
        onClick={() => setToggleTheme()}
      >
        {isDarkMode ? (
          <IconMoon color={colorTheme?.colors.gray1} />
        ) : (
          <IconSun color={colorTheme?.colors.gray1} />
        )}
      </Button>
    </DIV_Header>
  );
};

const DIV_Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors?.gray12};

  .header-menu {
    padding: 10px;

    > svg {
      width: 30px;
      height: 30px;
    }
  }

  .header-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    font-size: 30px;
    color: ${(props) => props.theme.colors?.gray1};
  }

  .theme-btn {
    padding: 10px;
  }
`;

export default Header;
