import './App.css';
import Logo from './components/Files/img/Logo.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <figure className="Header--LogoContainer">
        <img  className="Header--Logo" src={Logo} alt="" />
      </figure>
      <form className='PesquisaProdutos--container'>
        <input className='PesquisaProdutos--input' type='text' placeholder='Digitar Pesquisa'></input>
        <button className='PesquisaProdutos--submit'>Pesquisar</button>
      </form>
      </header>
    </div>
  );
}

export default App;
