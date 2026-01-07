import React, { Suspense } from "react";
import { Loading } from "./pages/Loading";
import { NavbarProvider } from "./context/NavbarProvider";
/**
 * Define el componente Layout como carga diferida(o lazy), e introducimos un delay intencional de 2 segundos
 * para poder apreciar el logo de la web.
 */
const Layout = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./pages/Layout"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  return moduleExports;
});
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
