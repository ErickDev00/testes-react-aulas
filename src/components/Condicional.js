import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    console.log("testando");
    setUserEmail(email);
  }

  return (
    <>
      <h2>Cadastre seu Email</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button type="submit" onClick={enviarEmail}>
          Enviar
        </button>
        {userEmail && <div>o email foi preenchido {userEmail}</div>}
      </form>
    </>
  );
}

export default Condicional;
