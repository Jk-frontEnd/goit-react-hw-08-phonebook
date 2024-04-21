import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Naviagtion";
import { Suspense } from "react";

const Layout = (children) => {
    <div>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
}

export default Layout;