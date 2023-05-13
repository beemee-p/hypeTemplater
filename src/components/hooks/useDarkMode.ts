import { useEffect, useState } from "react";
import { GlobalTheme, MainTheme } from "@/styles/GlobalTheme";

const useDarkMode = () => {
  const [colorTheme, setColorTheme] = useState<MainTheme | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function setColorMode(mode: MainTheme) {
    if (mode === GlobalTheme.light) {
      document.body.dataset.theme = "light";
      window.localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.body.dataset.theme = "dark";
      window.localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }

    setColorTheme(mode);
  }

  function setToggleTheme() {
    colorTheme === GlobalTheme.light
      ? setColorMode(GlobalTheme.dark)
      : setColorMode(GlobalTheme.light);
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    window.matchMedia("(prefers-color-scheme:dark)").matches && !localTheme
      ? setColorMode(GlobalTheme.dark)
      : localTheme === "dark"
      ? setColorMode(GlobalTheme.dark)
      : setColorMode(GlobalTheme.light);
  }, []);

  return { isDarkMode, colorTheme, setToggleTheme };
};

export default useDarkMode;
