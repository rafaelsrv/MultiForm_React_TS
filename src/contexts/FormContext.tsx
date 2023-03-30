//Context -- Armazenamento de dados.
//Reducer -- 
//Provider -- Ambiente
//Hook -- 

type State ={
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}
type Action = {
    type: FormActions;
    payload: any;
}
import { createContext, useContext, useReducer } from "react";

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''

}

//Context
const FormContext = createContext(undefined);


//Reducer
enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const formReducer = (state: State, action) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, email: action.payload};
        default:
            return state;
    }
}

//Provider
const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch }; 
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

//Context Hook
const useForm = () =>{
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}