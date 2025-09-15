import ProjectFrom from '../project/ProjectFrom'
import styles from './Newproject.module.css'


function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar projevtos</h1>
            <p>Crie seu preojecto para depois adicionar os seus serviços</p>
            <ProjectFrom btnText="Criar projecto"/>
        </div>
    )
}

export default NewProject