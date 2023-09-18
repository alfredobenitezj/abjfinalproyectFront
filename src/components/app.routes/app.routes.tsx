import { Routes, Route } from "react-router-dom";
import Login from "../login/login";
import { Register } from "../register/register";
import Home from "../home/home";
import Errorpage from "../../error/error.page";
import { CommentForm } from "../commentform/commentform";
import { ListComment } from "../list comement/list.comment";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/listComment" element={<ListComment></ListComment>}></Route>
      <Route path="add_comment" element={<CommentForm></CommentForm>}></Route>
      <Route path="*" element={<Errorpage></Errorpage>}></Route>
    </Routes>
  );
}
