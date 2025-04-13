import { routes } from "../../../../../../router/constants";
import { headerTitle } from "../../../constants";

const definedPaths = routes
  .filter((value) => value.path !== "*" && value.path !== "/")
  .map((route) => {
    let title = route.path.replace(/\//g, "");
    title = headerTitle[title]
      ? headerTitle[title]
      : title.charAt(0).toUpperCase() + title.slice(1);
    return { title: title, link: route.path };
  });

export const navElement = [
  { title: "Home", link: "/" },
  { title: "Pages", subMenu: definedPaths },
  { title: "Services", link: "/" },
  { title: "Blog", link: "/" },
  { title: "Shop", link: "/" },
  { title: "Contact", link: "/" },
];
