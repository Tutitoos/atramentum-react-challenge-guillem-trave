import { render, screen } from "@testing-library/react";
import Loader from "@/components/Loader/Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loader", async () => {
      const expectedTestId = "spinner";

      render(<Loader />);

      const result = screen.queryByTestId(expectedTestId) as HTMLElement;

      expect(result).toBeInTheDocument();
    });
  });
});
