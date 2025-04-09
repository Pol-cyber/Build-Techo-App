import { Outlet, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === "/") {
      return <header />;
    } else {
      return <div />;
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
