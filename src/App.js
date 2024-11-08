import { useState } from "react";
import './App.css';

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(<div className="numeroResultado">{primeiroValor + segundoValor}</div>);
  };

  const subtracao = () => {
    setResultado(<div className="numeroResultado">{primeiroValor - segundoValor}</div>);
  };

  const multiplicacao = () => {
    setResultado(<div className="numeroResultado">{primeiroValor * segundoValor}</div>);
  };

  const divisao = () => {
    setResultado(<div className="numeroResultado">{primeiroValor / segundoValor}</div>);
  };

 


  return (
    <main className="principal">
      <section>
      <h1>Calculadora</h1>
      {/* onChange evento de mudança */}

      <div className="box inputs">
      <input onChange={capturandoPrimeiroValor}/>
      <input onChange={capturandoSegundoValor} />
      </div>
     
      <div className="box botoes">      
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      </div>

    <div className="box botoes">      
      <button onClick={multiplicacao}>x</button>
      <button onClick={divisao}>/</button>
      </div>
             
      <p>{resultado}</p>
      </section>     
    </main>
  );
}

