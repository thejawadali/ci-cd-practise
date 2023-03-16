import Counter from "@/components/Counter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Counter.tsx", () => {
  it("increments the counter when the increment button is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const counterElement = getByTestId("counter");
    const incrementButton = getByTestId("increment-button");

    expect(counterElement.textContent).toBe("0");

    fireEvent.click(incrementButton);

    expect(counterElement.textContent).toBe("1");
  });

  it("decrements the counter when the decrement button is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const counterElement = getByTestId("counter");
    const decrementButton = getByTestId("decrement-button");

    expect(counterElement.textContent).toBe("0");

    fireEvent.click(decrementButton);

    expect(counterElement.textContent).toBe("-1");
  });
});
