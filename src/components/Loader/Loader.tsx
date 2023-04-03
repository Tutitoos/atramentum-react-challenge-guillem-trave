import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled role="spinner" data-testid="spinner">
      <div className="spinner-icon" />
    </LoaderStyled>
  );
};

export default Loader;
