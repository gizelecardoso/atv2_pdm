import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//COMPONENTE EM CLASSE
//Definimos o state no construtor para alterar usamos o método setState
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      textoAExibir: "Mega Sena",
      contadores: [0,0,0,0,0,0]
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.textoAExibir}</Text>
        <Text>{this.state.contadores.map((contador)=> `${contador} `)}</Text>
        <Button
          title="Alterar Texto"
          onPress={_=>this.setState({textoAExibir: 'Novo Texto'})}
        />
        <Button
          title="Sortear"
          onPress={_=>{
            const cont = this.state.contadores.map(() => Math.floor(( 1 + Math.random() * (60 - 1))))
            console.log(cont)
            this.setState({contadores: cont})

            }
          }
        />
      </View>
    )
  }
}

//COMPONENTE FUNCIONAL
//Defimos o State como um Hook (useState)
// // hook react
// //flex direction padrão column
// export default function App() {
//   const [textoAExibir, setTextoAExibir] = useState('Texto Inicial');
//   return (
//     <View style={styles.container}>
//       <Text>{textoAExibir}</Text>
//       <Button
//         title="Alterar texto"
//         onPress={()=> {setTextoAExibir('Novo Texto')}}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
);
