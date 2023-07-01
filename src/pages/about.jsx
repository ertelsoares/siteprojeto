import React from 'react';
import Menu from '../components/Menu';


// Meio de usar em uma tag
// const About =  () => <h1>About</h1>
// export default About;
//Função abaixo utilizando o react Fragment
// 
// Função sem return
// const About = () =>(
// //     <>
// //     <h1>About </h1>
// //     <h2>About 2</h2>
// //     </>
// // )
const About = () =>{
    const text = 'meu Texto'
    return(
    <>
    <Menu />
    <h1>About </h1>
    <h2>{text}</h2>
    </>
   )
}

export default About;