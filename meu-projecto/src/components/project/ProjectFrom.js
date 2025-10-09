import { data } from 'react-router-dom'
import Input from '../from/Input'
import Select from '../from/Select'
import SubmitButton from '../from/SubmitButton'
import styles from './ProjectFrom.module.css'
import { useState, useEffect } from 'react'

function ProjectFrom({handleSubmit,btnText,projectData}){
    const [categories,setcategories]=useState([])
    const [project, setproject]=useState(projectData || {})
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

      const submit=(e)=>{
        e.preventDefault()
        handleSubmit(project)
      }
      function handleChange(e){
        setproject({...project,[e.target.name]:e.target.value})
      }
         function handleCategory(e){
        setproject({...project,category:{
          id:e.target.value,
          name:e.target.options[e.target.SelectIdex].text,
        },
      })
      }
    return(
      <from onSubmit={submit} className={styles.from}>
        <Input
        type="text"
        text="Nome do projecto"
        name="Name"
        placeholder="Insira o nome do projeto" 
        handleOnchange={handleChange}
        value={project.name ? project.name:''}
        />
        <Input
        type="number"
        text="Orçamento do projecto"
        name="budget"
        placeholder="Insira o orçamento total" 
        handleOnchange={handleChange}
        value={project.budget ? project.budget:''}
        />
       <Select 
       name="Category_id" 
       text="Selecione a categoria" 
       options={categories} 
       handleCategory={handleCategory}
       value={project.category? project.category.id:''}
       />
       <SubmitButton text={btnText}/>
      </from>
    )
}

export default ProjectFrom