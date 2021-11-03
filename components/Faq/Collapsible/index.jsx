import { useState } from "react";
import { DataQuestions } from "./Data";
import { ItemCollapsible } from "./ItemCollapsible"

export const Collapsible = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            setSelected(null)
        } else {
            setSelected(index)
        }
    }

    return (<div className="collapsible">
        <h1 className="colapse_title">Preguntas Frecuentes</h1>
        <div className="wrapper">
            <div className="accordion">
                {DataQuestions.map((item, index) => (
                    <ItemCollapsible {...item} key={index} index={index} selected={selected} toggle={toggle} />
                ))}
            </div>
        </div>

        <style jsx>{`
        .colapse_title {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align:center;
            border-bottom:3px solid var(--azul);
            margin: 10px auto 20px;
            width: 25%;
        }

        .wrapper {
        display: flex;
        width: 100%;
        margin-bottom: 280px;
        justify-content: center;
        align-items: center;
        }

        .accordion {
            width: 90%;
            margin: 0 auto; 
        }
   
    `}</style>
    </div>)
}