import ProjectFrom from '../project/ProjectFrom'
import styles from './Newproject.module.css'
import {useHistory} from 'react-router-dom'


function NewProject(){
    const history=useHistory()

    function Createpost(project){
        //inicialização cost and services
        project.cost=0
        project.services=[]
        fetch('http:localhost:5000/projects',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(project),
        }).then(
        (resp=>resp.json())
        .then((data)=>{
            console.log(data)
            //redirect
        })
        ).catch(err=>console.log(err))
        
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar projevtos</h1>
            <p>Crie seu preojecto para depois adicionar os seus serviços</p>
            <ProjectFrom handleSubmit={Createpost} btnText="Criar projecto"/>
        </div>
    )
}

export default NewProject