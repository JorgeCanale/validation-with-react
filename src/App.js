import React, { useState } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  Formulario,
  Label,
  TermsContainer,
  CenterButtonContainer,
  Button,
  SuccessMenssage,
  ErrorMenssage 
} from "./elements/FormElements";
import InputComponent from "./componentes/input";
import legends from "./utils/legends";


const App = () =>{
 const [user,setUser] = useState({campo: '',valido: null});
 const [name,setName] = useState({campo: '',valido: null})
 const [password,setPassword] = useState({campo: '',valido: null})
 const [password2,setPassword2] = useState({campo: '',valido: null})
 const [email,setEmail] = useState({campo: '',valido: null})
 const [phonenumber,setPhonenumber] = useState({campo: '',valido: null})
 const [terminos,setTerminos] = useState(false)
 const [validForm, setValidForm] = useState(null)

const expresiones = {
  user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phonenumber: /^\d{7,14}$/ // 7 a 14 numeros.
}  


const validatePassword2 = () =>{
  if(password.campo.length > 4){
    if(password.campo !== password2.campo){
      setPassword2((prevState) =>{
        return {...prevState, valido:'false'}
      })
    }else{
      setPassword2((prevState) =>{
        return {...prevState, valido:'true'}
      })
    }

  }
}

const handleOnClickTerminos = (e) =>{
  setTerminos(e.target.checked)

}

const onSubmit = (e) =>{
  e.preventDefault()
  if(user.valido === 'true' && name.valido === 'true' && 
  password.valido === 'true' && password2.valido === 'true' && 
  email.valido === 'true' && phonenumber.valido === 'true' && terminos){
    setValidForm(true)
    setUser({campo: '', valido: null})
    setName({campo: '', valido: null})
    setPassword({campo: '', valido: null})
    setPassword2({campo: '', valido: null})
    setEmail({campo: '', valido: null})
    setPhonenumber({campo: '', valido: null})

  }else{
    setValidForm(false)
  }
}

  return(
    <main>

      <Formulario action='' onSubmit={onSubmit}>

      <InputComponent 
       state={user}
       setState={setUser}
       type="text"
       label="Usuario"
       placeholder="marcos1234"
       name="usuario" 
       legenderror={legends.user}
       expresionregular={expresiones.user}
       
       />
             <InputComponent 
       state={name}
       setState={setName}
       type="text"
       label="Name"
       placeholder="marcos m"
       name="name" 
       legenderror={legends.name}
       expresionregular={expresiones.name}
       />
             <InputComponent 
       state={password}
       setState={setPassword}
       type="password"
       label="password"
       placeholder="constraseña..."
       name="password" 
       legenderror={legends.password}
       expresionregular={expresiones.password}
       />
             <InputComponent 
       state={password2}
       setState={setPassword2}
       type="password"
       label="password2"
       placeholder="vuelve a ingresar tu contraseña"
       name="password2" 
       legenderror={legends.password2}
       expresionregular={expresiones.password}
       funcion={validatePassword2}
       />
             <InputComponent 
       state={email}
       setState={setEmail}
       type="text"
       label="Email"
       placeholder="email@gmail.com"
       name="email" 
       legenderror={legends.email}
       expresionregular={expresiones.email}
       />
             <InputComponent 
       state={phonenumber}
       setState={setPhonenumber}
       type="text"
       label="Phonenumber"
       placeholder="299 1 111 111"
       name="phonenumber" 
       legenderror={legends.phonenumber}
       expresionregular={expresiones.phonenumber}
       />


        <TermsContainer>
          <Label>
            <input type="checkbox" name="terminons" id="terminons" checked={terminos} onClick={(e)=> handleOnClickTerminos(e)}/>
            Acepto los terminos y condiciones
          </Label>
        </TermsContainer>
        {validForm === false &&  <ErrorMenssage>
          <p> 
            <FontAwesomeIcon icon={faExclamationTriangle}/>
             <b> Error:</b> Por favor rellene el formulario correctamente.</p>
        </ErrorMenssage>}
        <CenterButtonContainer>
          <Button type="submit"> Registrarse</Button>
          { validForm === true && <SuccessMenssage> El fomrulario se ha enviado correcctamente</SuccessMenssage>}
        </CenterButtonContainer>
      </Formulario>
    </main>
  )
}


export default App