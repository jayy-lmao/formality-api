import Link from "next/link";

const navbar = props => (
  <div className="ui-navbar">
    <Link href="/">
      <a>home </a>
    </Link>
    <Link href="/login">
      <a>login </a>
    </Link>
  </div>
);
export default navbar;
