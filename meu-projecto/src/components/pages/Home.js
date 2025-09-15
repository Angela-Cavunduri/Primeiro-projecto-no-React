import Styles from './Home.module.css'
import savings from '../../img/saving.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
       <div className={Styles.home_container}>
                <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projectos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projecto" />
            <img src={savings} alt='Costs' />
       </div>
    )
}

export default Home