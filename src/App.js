import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{

constructor(props){
  super(props);
  this.action = this.action.bind(this);
  this.data = [
    {
      id: 1,
      value: "A",
      estado: false
    },
    {
      id: 2,
      value: "B",
      estado: false
    },
    {
      id: 3,
      value: "C",
      estado: false
    },
    {
      id: 4,
      value: "D",
      estado: false
    },
    {
      id: 5,
      value: "E",
      estado: false
    },
    {
      id: 6,
      value: "F",
      estado: false
    },
    {
      id: 7,
      value: "A",
      estado: false
    },
    {
      id: 8,
      value: "B",
      estado: false
    },
    {
      id: 9,
      value: "C",
      estado: false
    },
    {
      id: 10,
      value: "D",
      estado: false
    },
    {
      id: 11,
      value: "E",
      estado: false
    },
    {
      id: 12,
      value: "F",
      estado: false
    }
  ];
  this.copia = this.data.slice();
  this.copiacontador = this.copia;
  this.state = {
    fila1:[], fila2:[], fila3:[]
  }
  this.contador = 0;
  for (let index = 0; index < this.data.length; index++) {
    if (index < 4) {
      const indice = Math.floor(Math.random()*this.copia.length);
      this.state.fila1[this.contador] = this.copia[indice];
      this.copia.splice(indice, 1);
      this.contador++;
    }
    if (index > 3 && index < 8) {
      this.contador = this.contador < 4 ? this.contador : 0;
      const indice = Math.floor(Math.random()*this.copia.length);
      this.state.fila2[this.contador] = this.copia[indice];
      this.copia.splice(indice, 1);
      this.contador++
      }
    if (index > 7) {
      this.contador = this.contador < 4 ? this.contador : 0;
      const indice = Math.floor(Math.random()*this.copia.length);
      this.state.fila3[this.contador] = this.copia[indice];
      this.copia.splice(indice, 1)
      this.contador++
    }
    
  }
}

action = function(params) {
  
}


  render(){
    return(
      <div className="container">
          <div className="App-header">
              <h1 className="center">FaRyMaNaN</h1><br/>
              <div className="center">
                  <table>
                    <tr>
                            {this.state.fila1.map(function(data) {
                            if (data.estado !== true) {
                              return <td onClick={this.action(data.id, 'fila1')} className="solotexto" key={data.id}>{data.value}</td>; 
                            }else{
                            return <td className="textcentro" key={data.id}>{data.value}</td>; 
                            }
                          })}
                    </tr>
                    <tr>
                    {this.state.fila2.map(function(data) {
                            if (data.estado !== true) {
                              return <td className="solotexto" key={data.id}>{data.value}</td>; 
                            }else{
                            return <td className="textcentro" key={data.id}>{data.value}</td>; 
                            }
                          })}
                    </tr>
                    <tr>
                    {this.state.fila3.map(function(data) {
                            if (data.estado !== true) {
                              return <td className="solotexto" key={data.id}>{data.value}</td>; 
                            }else{
                            return <td className="textcentro" key={data.id}>{data.value}</td>; 
                            }
                          })}
                    </tr>
                  </table>
              </div>
          </div>
      </div>
    )
  }
}

export default App;
