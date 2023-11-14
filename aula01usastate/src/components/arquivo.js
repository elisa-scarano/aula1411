import React, { useState } from 'react'

function CalculadoraDeSoma() {
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [soma, setSoma] = useState('');

    const calcularSoma = () => {
        const resultado = Number(numero1) + Number(numero2);
        setSoma(resultado)
    }
    const calcularSomaAd = () => {
        const resultado = Number(numero1) - Number(numero2);
        setSoma(resultado)
    }
    const calcularSomaMt = () => {
        const resultado = Number(numero1) * Number(numero2);
        setSoma(resultado)
    }
    const calcularSomaDv = () => {
        const resultado = Number(numero1) / Number(numero2);
        setSoma(resultado)
    }

    return(
        <div className='Calculadora'>
            <input type='number' value={numero1} onChange={(e) => setNumero1(e.target.value)}placeholder='Digite o primero número'/>
            <input type='number' value={numero2} onChange={(e) => setNumero2(e.target.value)}placeholder='Digite o segundo número'/>
            
            <button onClick={calcularSoma}>Calcular Adição</button>
            <button onClick={calcularSomaAd}>Calcular Subtração</button>
            <button onClick={calcularSomaMt}>Calcular Multiplicação</button>
            <button onClick={calcularSomaDv}>Calcular Divisão</button>
            {soma !== null && <p>Resultado:{soma}</p>}
        </div>
        
    )
}
export default CalculadoraDeSoma;