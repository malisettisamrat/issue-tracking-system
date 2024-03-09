import Pagination from "./components/Pagination";

export default function Home() {
  return <Pagination itemCount={100} currentPage={1} pageSize={10} />;
}
