import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";



export default function Quiz(){

    const {quiz, aumentarPorcentaje} = useQuizStore();

    const onHandlerButtonNext = useCallback(()=>{
        aumentarPorcentaje()
    })
  
    return (
        <div>
            <h1>Hola</h1>
            <p>Progreso del quiz:{quiz.percentageQuizCompleted}%</p>
            <button onClick={onHandlerButtonNext}>Aumentar</button>
        </div>
    )
}