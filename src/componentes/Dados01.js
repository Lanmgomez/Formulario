import React from 'react'
import "./Dados01.css"
import {useState} from 'react'

const Dados01 = () => {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nome)
        console.log(sobrenome)
        console.log(email)
        console.log(data)
    }

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    const handleSobrenome = (e) => {
        setSobrenome(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleData = (e) => {
        setData(e.target.value)
    }

  return (
    <div>
        <div className='cadastro'>
        </div>    
            <form className='form01' onSubmit={handleSubmit}>
                <h1>Passo 01</h1>
                <label>
                    <span>Nome:</span>
                    <input type="text" onChange={handleNome} value={nome}/>
                </label>
                <label>
                    <span>Sobrenome:</span>
                    <input type="text" onChange={handleSobrenome} value={sobrenome}/>
                </label>
                <label>
                    <span>Sexo:</span>
                    <div className='sex'>
                      <span>Masculino</span>
                        <input type="radio" name= "sex" value="mas"/>
                      <span>Feminino</span>
                        <input type="radio" name= "sex" value="fem"/>
                    </div>
                </label>
                <label>
                    <span>Data de nascimento:</span>
                    <input type="date" onChange={handleData} value={data} />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email"  
                           placeholder='nome@outlook.com' 
                           onChange={handleEmail} 
                           value={email}       
                    required/>
                </label>
                <input type="submit" value="Enviar" />
            </form>
    </div>
  )
}

export default Dados01