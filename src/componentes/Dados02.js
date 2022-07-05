import React from 'react'
import './Dados02.css'
import InputMask from 'react-input-mask'
import { useState } from 'react'

const Dados02 = () => {

    const [cpf, setCpf] = useState("")
    const [rg, setRg] = useState("")
    const [tel, setTel] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cpf)
        console.log(rg)
        console.log(tel)
    }

    const handleCpf = (e) => {
        setCpf(e.target.value)
    }

  return (
    <div>
        <form className='form02' onSubmit={handleSubmit}>
            <label>
                <h1>Passo 02</h1>
                <span>CPF:</span>
                <InputMask 
                    mask="999.999.999-99"
                    placeholder="Digite seu CPF..."
                    onChange={handleCpf}
                    value={cpf}
                />
            <label>
                <span>RG:</span>
                <InputMask 
                    mask="99.999.999-9"
                    placeholder="Digite seu RG..."
                    onChange={(e) => setRg(e.target.value)}
                    value={rg}
                />
            <label>
                <span>Telefone:</span>
                <InputMask 
                    mask="(99) 99999-9999"
                    placeholder='Digite seu WhatsApp'
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                />
            </label>    
            </label>    
                <input type="submit" value="Enviar" />
            </label>
        </form>
    </div>
  )
}

export default Dados02