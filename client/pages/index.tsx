import Link from "next/link";

const Home = props => {
  return (
    <div>
      <h1>home</h1>
      <Link href="/login">
        <a>Login!</a>
      </Link>
    </div>
  );
};

export default Home;
