import { useState } from "react";

export function useContactForm(form, setForm) {
  const [errors, setErrors] = useState({});

  function isEmpty(value) {
    return value.trim() === "";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (isEmpty(form.name)) newErrors.name = "O campo é obrigatório!";
    if (isEmpty(form.email)) newErrors.email = "O campo é obrigatório!";
    if (isEmpty(form.subject)) newErrors.subject = "O campo é obrigatório!";
    if (isEmpty(form.message)) newErrors.message = "O campo é obrigatório!";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log("Form enviado:", form);
  }

  return { errors, handleChange, handleSubmit };
}
