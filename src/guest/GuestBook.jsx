import { useState, useRef } from "react";
import GuestBookInput from "./GuestBookInput";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setMessage("");

    nameInput.current.focus();

    alert(`Name: ${name}, Message: ${message}`)

  }

  return (
    <>
      <h1>Guest Book</h1>
      <form onSubmit={handleSubmit}>
            <GuestBookInput ref={nameInput} name={name} setName={setName}/>
            <br />
            <label htmlFor="message">Message</label><br/>
            <textarea name="message" value={message} 
            onChange={(e)=>setMessage(e.target.value)} />
            <br />
            <button type="submit" onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
}
