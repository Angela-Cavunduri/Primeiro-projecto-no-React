import { data } from 'react-router-dom'
import Input from '../from/Input'
import Select from '../from/Select'
import SubmitButton from '../from/SubmitButton'
import styles from './ProjectFrom.module.css'
import { useState, useEffect } from 'react'

function ProjectFrom({btnText}){
    const [categories,setcategories]=useState([])
  useEffect(()=>{
      fetch("http://localhost:5000/categories",
        {
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        }
    ).then((resp)=>resp.json())
    .then((data)=>{setcategories(data)})
    .catch((err)=>console.log(err))
  },[])
    return(
      <from className={styles.from}>
        <Input
        type="text"
        text="Nome do projecto"
        name="Name"
        placeholder="Insira o nome do projeto" 
        />
        <Input
        type="number"
        text="Orçamento do projecto"
        name="budget"
        placeholder="Insira o orçamento total" 
        />
       <Select name="Category_id" text="Selecione a categoria" options={categories}/>
       <SubmitButton text={btnText}/>
      </from>
    )
}

export default ProjectFrom