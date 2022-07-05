import React from 'react'
import './Dados03.css'
import { useForm } from "react-hook-form";
/**npm install react-hook-form */

const Dados03 = () => {

  const {register, handleSubmit, setValue} = useForm()

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "")
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setValue('address', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade)
        setValue('uf', data.uf)
      })
  }

  const onSubmit = (e) => {
    console.log(e)
  }

  return (
    <div>
      <form className='form03' onSubmit={handleSubmit(onSubmit)}>
        <h1>Passo 03</h1>
          <label>
              <span>CEP:</span>
              <input type="text" 
                     placeholder='Digite seu cep...'
                     {...register("cep")}
                     onBlur={checkCEP}
              />
          </label>
          <label>
              <span>Rua:</span>
              <input type="text" {...register("address")}/>
          </label>
          <label>
              <span>Número:</span>
              <input type="text" />
          </label>
          <label>
              <span>Bairro:</span>
              <input type="text" {...register("neighborhood")}/>
          </label>
          <label>
              <span>Cidade:</span>
              <input type="text" {...register("city")}/>
          </label>
          <label>
              <span>Estado:</span>
              <input type="text" {...register("uf")}/>
          </label>
          <input type="submit" />
      </form>
    </div>
  )
}

export default Dados03