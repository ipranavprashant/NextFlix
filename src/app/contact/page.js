"use client";
import React, { useState } from "react";

const Page = () => {
  const [user, setUser] = useState({
    username: "",
    college: "",
    phonenumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log([name], value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          college: user.college,
          phonenumber: user.phonenumber,
          message: user.message,
        }),
      });

      if (response.status === 200) {
        setUser({
          username: "",
          college: "",
          phonenumber: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log("Client-Side Error:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <h1 className="flex justify-center text-4xl mt-16">
        Write your well wishes!
      </h1>
      <form
        className="flex flex-col max-w-screen-sm mr-auto ml-auto mt-auto"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          className="text-slate-800"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="college">College:</label>
        <input
          type="text"
          className="text-slate-800"
          name="college"
          value={user.college}
          onChange={handleChange}
        />
        <label htmlFor="phonenumber">Phone Number:</label>
        <input
          type="number"
          className="text-slate-800"
          name="phonenumber"
          value={user.phonenumber}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          className="text-slate-800"
          name="message"
          value={user.message}
          onChange={handleChange}
        />
        <div className="flex justify-center">
          <button
            className="bg-slate-100 text-slate-900 mt-5 size-2/12 h-9"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {status === "success" && <p>Form submitted successfully!</p>}
      {status === "error" && <p>There was an error submitting the form.</p>}
    </>
  );
};

export default Page;
