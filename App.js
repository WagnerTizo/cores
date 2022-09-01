import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corTexto: 'White',
      estilo: 'White',
      imagem: "./src/img/laranja.png"
    };
  }

  //função que recebe dois parametros (corTexto e estiloFundo)
  funcaoPersonalizacao(corDoTexto, estiloFundo) {
    this.setState({
      corTexto: corDoTexto
    })
    this.setState({
      estilo: estiloFundo
    })
  }

  
  

  render() {
    //console.log('Qual o link da imagem:', this.state.imagem)
    console.log('Qual o a cor do texto:', this.state.corTexto)
    console.log('IMG', this.state.imagem)
    return (
      /*View container maior */
      <View style={styles[this.state.estilo]}>

        {/*View tres botoes iniciais */}
        <View style={styles.viewBotoes}>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#912' }]} onPress={() => this.funcaoPersonalizacao('Vermelho', 'Red')}>
            <Text style={styles.texto}>Vermelho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#1a2' }]} onPress={() => this.funcaoPersonalizacao('Verde', 'Green')}>
            <Text style={styles.texto}>Verde</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#12a' }]} onPress={() => this.funcaoPersonalizacao('Azul', 'Blue')}>
            <Text style={styles.texto}>Azul</Text>
          </TouchableOpacity>
        </View>

        {/*View tres botoes meio */}
        <View style={styles.viewBotoes2}>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#FFFF00' }]} onPress={() => this.funcaoPersonalizacao('Amarelo', 'Yellow')}>
            <Text style={styles.texto}>Amarelo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#8B4513' }]} onPress={() => this.funcaoPersonalizacao('Marron', 'Brown')}>
            <Text style={styles.texto}>Marron</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#C71585' }]} onPress={() => this.funcaoPersonalizacao('Rosa', 'Pink')}>
            <Text style={styles.texto}>Rosa</Text>
          </TouchableOpacity>
        </View>

        {/*View tres botoes finais */}
        <View style={styles.viewBotoes3}>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#FF4500' }]} onPress={() => this.funcaoPersonalizacao('Laranja', 'Orange')}>
            <Text style={styles.texto}>Laranja</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#708090' }]} onPress={() => this.funcaoPersonalizacao('Cinza', 'Gray')}>
            <Text style={styles.texto}>Cinza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: '#008B8B' }]} onPress={() => this.funcaoPersonalizacao('Azul Agua', 'DarkCyan')}>
            <Text style={styles.texto}>Azul Agua</Text>
          </TouchableOpacity>
        </View>

        {/*View dos textos*/}
        <View>
          <Text style={{ fontSize: 23, color: 'white', textAlign: 'center' }}>{this.state.corTexto === 'White' ? '' : this.state.corTexto}</Text>
          <Text style={{ fontSize: 23, color: 'white', textAlign: 'center' }}>{this.state.estilo === "White" ? '' : this.state.estilo}</Text>
        </View>

        {/*View container da imagem */}
        <View style={styles.ViewImage}>

          {/*View imagem */}
          <View style={{ backgroundColor: '#f88', width: '80%', height: 280, borderRadius: 18 }}>
            {/* img(url: this.state.imagem) */}
            <Image style={{width:'100%' , height: '100%'}} source={require("./src/img/laranja.png")} />
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  Blue: {
    flex: 1,
    backgroundColor: "#55c"

  },
  Red: {
    flex: 1,
    backgroundColor: "#f11",
  },
  Green: {
    flex: 1,
    backgroundColor: "#1c1",
  },
  Yellow: {
    flex: 1,
    backgroundColor: "#F0E68C",
  },
  Brown: {
    flex: 1,
    backgroundColor: "#A0522D",
  },
  Pink: {
    flex: 1,
    backgroundColor: "#FF1493",
  },
  Orange: {
    flex: 1,
    backgroundColor: "#FF4500",
  },
  Gray: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  DarkCyan: {
    flex: 1,
    backgroundColor: "#40E0D0",
  },
  White: {
    flex: 1,
    backgroundColor: "#aaa",
  },
  viewBotoes: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    height: '15%',
    paddingTop: 10,
    backgroundColor: 'rgba(2,2,2,0.25)',
  },
  viewBotoes2: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    height: '15%',
    paddingTop: 10,
    backgroundColor: 'rgba(2,2,2,0.25)',
  },
  viewBotoes3: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    height: '15%',
    paddingTop: 10,
    backgroundColor: 'rgba(2,2,2,0.25)',
  },
  ViewImage: {
    width: '100%',
    height: '36%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao: {
    width: '30%',
    height: 45,
    backgroundColor: '#912',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginBottom: 10,
  },
  texto: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
  }
})

export default App;