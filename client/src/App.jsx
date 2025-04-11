import { Outlet, useLocation } from "react-router-dom";
import { GlobalHeader } from "./modules/layout/global-header/global-header";

function App() {

  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === "/") {
      return <header />;
    }
  };

  return (
    <>
      {renderHeader()}
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
