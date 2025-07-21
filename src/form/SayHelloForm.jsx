export default function SayHelloForm() {
  return (
    <div>
      <form>
        <input id="input_name" />
        <button onClick={(e) => {
            e.preventDefault();
            const name=document.getElementById("input_name").value;
            document.getElementById("text_hello").innerText=`Hello ${name}`
        }}>Say Hello</button>
      </form>
      <h1 id="text_hello">Hello World</h1>
    </div>
  );
}
