import NotFoundPageStyled from "@/styles/pages/NotFoundPageStyled";
import Link from "next/link";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <h2 className="title">Page not found</h2>
      <Link href="/" className="link">
        Back to home
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
