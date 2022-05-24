import "./App.css";
import UserList from "./features/users/UserList";
import AddUser from "./features/users/AddUser";
import UpdateUser from "./features/users/UpdateUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-4xl text-gray-700">
        Redux CRUD App
      </h1>
      <h4 className="text-center text-1xl text-gray-700">
        Using Redux-toolkit
      </h4>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
