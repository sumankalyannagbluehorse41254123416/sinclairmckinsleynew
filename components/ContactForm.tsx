"use client";

import { useState, useEffect } from "react";
import { fetchFormFields } from "@/service/fetchFormFields";
import { handleSubmitForm } from "@/service/handleSubmit";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

interface ContactFormValues {
  [key: string]: string;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [formValues, setFormValues] = useState<ContactFormValues>({});
  const [loading, setLoading] = useState(false);

  // ✅ Fetch dynamic fields
  useEffect(() => {
    const loadForm = async () => {
      try {
        const res = await fetchFormFields(
          { host: window.location.host },
          "dfbb12a6-95b1-4d8f-8e5a-9d02f9926510"
        );

        if (res?.fields) {
          setFields(res.fields);
        }
      } catch (err) {
        console.error("Error fetching form:", err);
      }
    };

    loadForm();
  }, []);

  // ✅ Handle input change (trim space)
  const handleChange = (name: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Email validation (STRICT Gmail)
  const validateEmail = (email: string) => {
    const pattern = /^[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  // ✅ Form validation
  const validateForm = () => {
    for (const key in formValues) {
      const value = formValues[key]?.trim();

      // ❌ empty or only spaces
      if (!value) {
        alert(`${key} cannot be empty or spaces only`);
        return false;
      }

      // ❌ email validation
      if (key.toLowerCase().includes("email")) {
        if (!validateEmail(value)) {
          alert(
            "Enter valid Gmail (start with letter, e.g. example@gmail.com)"
          );
          return false;
        }
      }
    }

    return true;
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      await handleSubmitForm(window.location.host, formValues);

      alert("✅ Form submitted successfully!");

      // ✅ Reset
      setFormValues({});
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="contact_form" method="POST" onSubmit={handleSubmit}>
      
      {/* ✅ Dynamic Fields */}
      {fields.map((field, index) => (
        <div className="mb-3" key={index}>
          
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              className="form-control message"
              placeholder={field.placeholder || field.label}
              required={field.required}
              value={formValues[field.name] || ""}
              onChange={(e) =>
                handleChange(field.name, e.target.value)
              }
            ></textarea>
          ) : (
            <input
              type={field.type || "text"}
              name={field.name}
              className={`form-control ${field.name}`}
              placeholder={field.placeholder || field.label}
              required={field.required}
              value={formValues[field.name] || ""}
              onChange={(e) =>
                handleChange(field.name, e.target.value)
              }
            />
          )}

          <span className="text-danger hidden contact_gap"></span>
        </div>
      ))}

      {/* ✅ Button */}
      <div className="submit_btn">
        <button
          className="theme-btn btnfos btnfos-4 btn-4"
          type="submit"
          disabled={loading}
        >
          <span>{loading ? "Submitting..." : "SUBMIT"}</span>
        </button>

        <div
          id="msgSuccess"
          className="text-info text-center hidden contact_gap"
        ></div>

        <div className="clearfix"></div>
      </div>
    </form>
  );
}
