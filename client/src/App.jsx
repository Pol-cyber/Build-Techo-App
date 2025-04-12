import { Outlet, useLocation } from "react-router-dom";
import { GlobalFooter } from "./modules/layout/global-footer";
import { GlobalHeader } from "./modules/layout/global-header";


function App() {
  const location = useLocation();

  const renderHeader = () => {
    const pathname = location.pathname;

    if (pathname === "/") {
      return <header />;
    } else {
      return <GlobalHeader></GlobalHeader>;
    }
  };

  return (
    <>
      {renderHeader()}
      <main>
        <Outlet></Outlet>
      </main>
      <GlobalFooter />
    </>
  );
}

export default App;
