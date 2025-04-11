import { Outlet, useLocation } from "react-router-dom"
import { GlobalHeader } from "./modules/layout/global-header/build-global-header"
import { GlobalFooter } from "./modules/layout/global-footer"

function App() {
  const location = useLocation()

  const renderHeader = () => {
    if (location.pathname === "/") {
      return <GlobalHeader />
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
