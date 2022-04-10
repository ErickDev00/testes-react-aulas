import { useState } from "react";

function Form() {
  function cadastrar(e) {
    e.preventDefault();
    console.log("cadastro concluído");
    console.log(password);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrar}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(p) => setPassword(p.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="cadastrar"></input>
        </div>
      </form>
    </>
  );
}

export default Form;
