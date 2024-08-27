import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const url = "http://127.0.0.1:8080/api/books";
  const {
    data: books,
    isPending,
    error,
  } = useFetch(
    url,
    "GET",
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGVvZG9yYSIsImlhdCI6MTcyNDc2MTA4OSwiZXhwIjoxNzI0NzY0Njg5fQ.tswxRG7CPuXrcqi0pC8JZoaCB2lxcFOpsCO2dbOkkPs"
  );
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>{isPending}</div>}
      {books && (
        <p>
          {books.map((book) => (
            <p>{book.title}</p>
          ))}
        </p>
      )}
    </div>
  );
}
