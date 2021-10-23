import { Collapsible } from "./Collapsible"
import { DataQuestions } from "./Collapsible/Data"

export const Faq = () => { 
    return(
        <div className="container">
        {DataQuestions.map((faq) => (
            <Collapsible key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
        </div>
    )
}