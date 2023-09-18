// import { render } from "@testing-library/react";
// import {  useSelector } from "react-redux/es/hooks/useSelector";
// import { useParams } from "react-router-dom";
// import Stage from "./commentstage";

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
// }));
// jest.mock("react-router-dom", () => ({
//   useParams: jest.fn(),
// }));
// describe("Given the Stage Component", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//   describe("whena comment with the given ID exist", () => {
//     beforeEach(() => {
//       (useSelector as jest.Mock).mockReturnValue({
//         comments: [
//           {
//             id: "123",
//             owner: { userName: "UserPrueba" },
//             image: { url: "prueba.jpg" },
//           },
//         ],
//       });
//       (useParams as jest.Mock).mockReturnValue({ id: "123" });
//     });
//     test("renders the comment data correctly", () => {
//       const { getByText, getByAltText } = render(<Stage />);
//       expect(getByText("textoPrueba")).toBeInTheDocument();
//       expect(getByAltText("Comment Image")).toHaveAttribute("src", "test.jpg");
//     });
//   });
//   describe("when no comment with the given ID exist", () => {
//     beforeEach(() => {
//       (useSelector as jest.Mock).mockReturnValue({
//         comments: [],
//       });
//       (useParams as jest.Mock).mockReturnValue({
//         id: "123",
//       });
//     });
//     test("renders nothing", () => {
//       const { container } = render(<Stage />);
//       expect(container.firstChild).toBeNull();
//     });
//   });
// });
