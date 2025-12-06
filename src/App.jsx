import React, { Suspense } from "react";
import { Loading } from "./pages/Loading";
import { NavbarProvider } from "./context/NavbarProvider";

const Layout = React.lazy(() => import("./pages/Layout"));
function App() {
  return (
    <NavbarProvider>
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    </NavbarProvider>
  );
}

export default App;
