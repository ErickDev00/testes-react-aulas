import Button from "./Button";

function Evento() {
  function meuEvento() {
    console.log(`ativando primeiro evento`);
  }

  return (
    <>
      <p>clique aqui para executar</p>
      <Button event={meuEvento} text="primeiro evento" />
    </>
  );
}

export default Evento;
