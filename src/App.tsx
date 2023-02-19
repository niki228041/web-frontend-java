import React, { useEffect } from 'react';

import axios from 'axios';
import './index.css';


function App() {
  
  var arr:any;
  var arr_comp:any;


  useEffect(()=>{
    const resp = axios.get("http://localhost:8083/api/categories");
    arr_comp=<div/>;
    resp.then((res)=>{
      arr=res.data;
      console.log(arr);
      

      arr.map((category:any)=>{
        var newEl = document.createElement("div");
        newEl.innerHTML = "name : " + category.name + "<br/>" + "id : " + category.id;
        document.getElementById('array')?.appendChild(newEl);
        arr_comp += 
        <div className='bg-slate-400 w-full h-full'>
          <p>
            name : {category.name}
          </p>
          <p>
            id : {category.id}
          </p>
        </div>;
      });

      return()=>{
        
      }
    })

  },[])

  return (
    <div >
      <div className='flex flex-col '>
        <div className='w-full flex justify-center'>

            {/* grid */}
            <div id='array' className='grid lg:grid-cols-6 gap-x-16 gap-y-28 sm:grid-cols-3 mt-11'>
              {arr_comp}
            </div>

            

        </div>

        
    </div>
    </div>
  );
}

export default App;
