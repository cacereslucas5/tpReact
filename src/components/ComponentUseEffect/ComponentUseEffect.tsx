import { useEffect, useState } from "react"


export const ComponentUseEffect = () => {
  const [state, setState] = useState(false);

  useEffect(()=>{
    console.log("Compoenete Montado");
    return() =>{
      console.log("Componente desmontado");
    };
  },[]);

  useEffect(() =>{
    console.log(state);
  }, [state]);
  return (
    <div>
      <p>{state ? "es true":"es falso"}</p>
      <button onClick={()=>{
        setState(!state);
      }}>
        cambiar state
      </button>
    </div>
  );
};


