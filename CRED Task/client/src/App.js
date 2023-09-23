import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Register } from "./register/register";
import { Form } from "./form/form";
import { Dashboard } from "./dashboard/dashboard";
import { Admin } from "./admin/admin";
import { Updateform } from "./updateform/updateform";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Section } from "./section/section";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={[<Navbar />,<Section/>,<Dashboard />,<Footer />]} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/updateform/:id" element={<Updateform />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

