import React, {Component} from "react";
import './style.css';
class App extends Component{
  
  constructor(props){
    super(props);
    this.state= {
      numero: 0,
      botao: 'Vai'

    };
    this.timer = null;
    this.vai =this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao='Vai'
    }else{
      this.timer = setInterval(() =>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100)
      state.botao='Pausa'
    }

    this.setState(state);
      }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null; 
    }

    let state = this.state;
    state.numero= 0;
    state.botao = 'Vai';
    this.setState(state);
  }
  
  render(){

    return(
      <div className="container">
        <img src={require("./assets/cronometro.png")}/>
        <a className="timer">{this.state.numero.toFixed(2)}</a>
        <div className="areaBnb">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a>
          <a className="botao" on onClick={this.limpar}>Limpar</a>
        </div>
      </div>
    )
  }
}




export default App; 