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
        <IconHamburger
          width={25}
          height={25}
          color={colorTheme?.colors.cyan12}
        />
      </Button>

      <div className="header-title">HYPE_BEE</div>

      <Button
        className="theme-btn"
        buttonType={"icon"}
        onClick={() => setToggleTheme()}
      >
        {isDarkMode ? (
          <IconMoon width={25} height={25} color={colorTheme?.colors.cyan12} />
        ) : (
          <IconSun width={25} height={25} color={colorTheme?.colors.cyan12} />
        )}
      </Button>
    </DIV_Header>
  );
};

const DIV_Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors?.cyan3};

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
    color: ${(props) => props.theme.colors?.cyan12};
  }

  .theme-btn {
    padding: 10px;
  }
`;

export default Header;
