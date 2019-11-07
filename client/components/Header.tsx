import Router from "next/router";
import NProgress from "nprogress";
import Meta from "./Meta";
import Navbar from "./navbar";

(Router as any).onRouteChangeStart = () => {
  console.log("started");
  NProgress.start();
};
(Router as any).onRouteChangeComplete = () => {
  NProgress.done();
};

(Router as any).onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <div>
    <Meta />
    <Navbar />
  </div>
);

export default Header;
