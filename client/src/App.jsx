import { Outlet, useLocation } from "react-router-dom";
import { GlobalHeader } from "./modulеs/layout/global-header/build-global-header";

function App() {

  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === "/") {
      return <GlobalHeader />;
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
