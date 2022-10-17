import React from "react";
import { Input,Label,GroupInput,ValidateIcon,LegendError } from "../elements/FormElements";
import { faCheckCircle ,faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const InputComponent = ({funcion,state, setState, type,label,placeholder,name,expresionregular,legenderror}) =>{
    

  
  const handleOnChange = (e) =>{

    setState({ ...state, campo: e.target.value})

  }
  
  const validation = () =>{
    if(expresionregular){
      if(expresionregular.test(state.campo)){
        setState({...state, valido:'true'})
      }else{
        setState({...state, valido:'false'})
      }
    }

    if(funcion){
      funcion()
    }
  }
  
  return(
        <div>
         <Label htmlFor={name} valido={state.valido}>{label}</Label>
            <GroupInput className="input">
              <Input 
              type={type} 
              placeholder={placeholder} 
              id={name}
              value={state.campo}
              onChange={(e)=>{handleOnChange(e)}}
              onKeyUp={validation}
              onBlur={validation}
              valido={state.valido}/>


             <ValidateIcon icon={ state.valido === 'true' ? faCheckCircle : faTimesCircle} valido={state.valido}/>
            </GroupInput>
          <LegendError valido={state.valido}>{legenderror}</LegendError>
        </div>
    )
}

export default InputComponent