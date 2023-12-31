import Link from "next/link";

const Pagination: React.FC<{ totalCount: number }> = ({ totalCount }) => {
  const PER_PAGE = 5;

  const range = (start: any, end: any) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
