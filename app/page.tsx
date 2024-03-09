import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pagination
      itemCount={100}
      currentPage={parseInt(searchParams.page)}
      pageSize={10}
    />
  );
}
