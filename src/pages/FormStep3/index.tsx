import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect, useState } from 'react'

let controle : number = 0
export const FormStep3 = ()=>{
    const navigate = useNavigate();
    const { state, dispatch} = useForm();
    const [confirm, setConfirm] = useState(false)
    

    
//fNão sei o que aconteceu !
    useEffect(()=>{
        if(confirm == true){
            controle = 4
        }else controle = 3
        if(state.name === ''){
            navigate('/')
        } else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: controle
            
        });
        }
    }, [confirm]);

    const handleNextStep = () =>{
        if(state.email !== '' && state.github !== ''){
            setConfirm(true)
           
        }
        
    }
    
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value // S!et Payload Context! SuperCommit!l
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para falarmos com você.</p>
                <hr/>

                <label>
                    Qual seu e-mail?? 
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    
                    <input 
                        type="url"
                        value={state.github}
                        onChange={handleGitHubChange} >
                    </input>
                    
                </label>

                <Link to="/step2" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}> Finalizar Cadastro </button>
            </C.Container>
        </Theme>       
    )
}