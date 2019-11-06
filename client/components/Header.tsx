import Navbar from "./navbar";
import Meta from "./Meta";
import Router from "next/router";
import NProgress from "nprogress";

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

const Header = props => (
  <div>
    <Meta />
    <Navbar />
  </div>
);

export default Header;
