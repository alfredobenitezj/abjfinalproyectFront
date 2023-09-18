// import { render, fireEvent, waitFor } from "@testing-library/react";
// import Login from "../login/login";
// import { useUser } from "../../hooks/use.users";

// // Mockeamos el hook useUser
// jest.mock("../../hooks/use.users");

// describe("Login Component", () => {
//   describe("Authentication Success", () => {
//     beforeEach(() => {
//       // Mockeamos un handleLogin exitoso
//       (useUser as jest.Mock).mockReturnValue({
//         handleLogin: jest.fn(() => Promise.resolve(true)),
//       });
//     });

//     test("should redirect to /home on successful authentication", async () => {
//       const { getByLabelText, getByText } = render(<Login />);

//       fireEvent.input(getByLabelText("Nombre"), {
//         target: { value: "testUser" },
//       });
//       fireEvent.input(getByLabelText("password"), {
//         target: { value: "testPass" },
//       });

//       fireEvent.click(getByText("Enviar"));

//       describe("Authentication Failure", () => {
//         beforeEach(() => {
//           // Mockeamos un handleLogin que falla
//           (useUser as jest.Mock).mockReturnValue({
//             handleLogin: jest.fn(() =>
//               Promise.reject(new Error("Authentication failed"))
//             ),
//           });
//         });

//         test("should display error on authentication failure", async () => {
//           const { getByLabelText, getByText } = render(<Login />);

//           fireEvent.input(getByLabelText("Nombre"), {
//             target: { value: "testUser" },
//           });
//           fireEvent.input(getByLabelText("password"), {
//             target: { value: "testPass" },
//           });

//           fireEvent.click(getByText("Enviar"));

//           await waitFor(() => {
//             expect(getByText("Error ")).toBeInTheDocument();
//           });

//           await waitFor(() => {
//             expect(
//               getByText("Error: Authentication failed")
//             ).toBeInTheDocument();
//           });
//         });
//       });
//     });
//   });
// });
