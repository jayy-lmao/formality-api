import Link from "next/link";
import UserList from "./UserList";

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Link href="/login">
        <a>Login!</a>
      </Link>
      <UserList />
    </div>
  );
};

export default Home;
