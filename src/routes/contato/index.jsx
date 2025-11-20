import { useState } from "react";  
import useContactForm from "./../../services/validacao";  
import { ContactContainer } from "./content/ContactContainer";  
import { PageTitle } from "./content/PageTitle";  
import "./style.css";  
import { ContactForm } from "./modules/ContactForm";  
  
function Contato() {  
  const [form, setForm] = useState({  
    name: "",  
    email: "",  
    subject: "",  
    message: "",  
  });  
  
  const { errors, handleChange, handleSubmit } = useContactForm(form, setForm);  
  
  return (  
    <div className="container">  
      <PageTitle />  
  
      <main className="main-container">  
        <ContactContainer />  
  
        <ContactForm  
          form={form}  
          errors={errors}  
          handleChange={handleChange}  
          handleSubmit={handleSubmit}  
        />  
      </main>  
    </div>  
  );  
}  
  
export default Contato;  
