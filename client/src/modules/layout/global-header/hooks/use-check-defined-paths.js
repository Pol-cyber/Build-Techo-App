import { useLocation } from "react-router-dom";
import { headerTitle } from "../constants";
import { routes } from "../../../../router/constants";

export function useCheckDefinedPaths() {
  const location = useLocation();
  const pathname = location.pathname;
  const normalizedPath = pathname.replace(/\/$/, "");
  const segments = normalizedPath.split("/");

  const lastSegment = segments[segments.length - 1];
  const title = headerTitle[lastSegment]
    ? headerTitle[lastSegment]
    : lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  const definedPaths = routes
    .filter((value) => value.path !== "*")
    .map((route) => route.path);

  const isDefinedPath = definedPaths.includes(
    location.pathname.replace(/\/$/, "")
  );

  return {title, isDefinedPath}
}
