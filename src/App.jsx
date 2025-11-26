import React, { Suspense } from "react";
import { Loading } from "./pages/Loading";

const Layout = React.lazy(() => import("./pages/Layout"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout />
    </Suspense>
  );
}

export default App;
