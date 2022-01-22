import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Prueba = ()=> {  
    const [saludo, setSaludo]=useState()
  return (   
      <div style={{textAlign:'center', marginTop:30}}>
          <h3>Hola desde Electron</h3>
          <Button variant='primary' onClick={()=>setSaludo('Hola Mundo')}>Prueba</Button>
          <h5>{saludo}</h5>
      </div>
  );
}

export default Prueba;
