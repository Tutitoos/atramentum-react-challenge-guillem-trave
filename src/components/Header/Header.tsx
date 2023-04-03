import Link from "next/link";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <Link href="/">
        <h1 className="header__title">Atramentum</h1>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
