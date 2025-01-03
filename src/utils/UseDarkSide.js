import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
//   const colorTheme = theme === "dark" ? "light" : "dark";
  const colorTheme =
    theme === "light text-foreground bg-background"
      ? "dark text-foreground bg-background"
      : "light  text-foreground bg-background";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
