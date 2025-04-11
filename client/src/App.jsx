<<<<<<< HEAD
import { Outlet, useLocation } from "react-router-dom";
import { GlobalHeader } from "./modules/layout/global-header/global-header";
=======
import { Outlet, useLocation } from "react-router-dom"
import { GlobalHeader } from "./modules/layout/global-header/build-global-header"
import { GlobalFooter } from "./modules/layout/global-footer"
>>>>>>> ca24d23e9ac56d8980933800e31de2c0a2e1f3fa

function App() {
  const location = useLocation()

  const renderHeader = () => {
    if (location.pathname === "/") {
<<<<<<< HEAD
      return <header />;
=======
      return <GlobalHeader />
>>>>>>> ca24d23e9ac56d8980933800e31de2c0a2e1f3fa
    }
  }

  return (
    <>
      {renderHeader()}
      <main>
        <Outlet></Outlet>
      </main>
      <GlobalFooter />
    </>
  )
}

export default App
