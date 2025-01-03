import { useState } from "react";
import useDarkSide from "../utils/UseDarkSide";
import { Switch } from "@nextui-org/react";
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

export default function ThemeSwitcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark text-foreground bg-background" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <Switch
          isSelected={darkSide}
          onValueChange={toggleDarkMode}
          defaultSelected
          size="sm"
          color="secondary"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <IoSunny className={className} />
            ) : (
              <IoIosMoon className={className} />
            )
          }
        ></Switch>
      </div>
    </>
  );
}
