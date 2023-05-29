import List from "./components/listpost";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <main>
        <List />
      </main>
    </>
  )
}
export default App;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resdata = await response.json();
  return resdata.posts;
}