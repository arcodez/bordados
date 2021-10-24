import { Collapsible } from "./Collapsible"
import { useState } from "react"
import { DataQuestions } from "./Collapsible/Data"

export const ItemCollapsible = ({ selected, question, answer, index, toggle }) => {
    return (
        <div className="item">
            <div className="title" onClick={() => toggle(index)}>
                <h2>{question}</h2>
                <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div className={selected === index ? "content show" : "content"}>{answer}</div>

            <style jsx>{`
                .item {
                    background: var(--noche-clarac);
                    margin-bottom: 10px;
                    padding: 10px 20px;
                    border-radius: 10px;
                    box-shadow: var(--shadow);
                }

                .title {
                    color : white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .content {
                    /* background-color:var(--azul); */
                    /* padding: 0 20px; */
                   border-radius: 10px;
                    color:white;
                    max-height: 0;
                    overflow: hidden;
                    transition: all 1s cubic-bezier(0, 1, 0, 1);
                }
                .content.show {
                    height: auto;
                    max-height: 999px;
                    margin: 0;
                    width: 100%;
                    padding: 20px 0;
                    transition: all 1s cubiz-bezier(1, 0, 1, 0);

                }
        `}</style>
        </div>
    )
}

export const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            setSelected(null)
        } else {
            setSelected(index)
        }
    }

    return (
        <div className="collapsible">
            <h1 className="colapse_title">Preguntas Frecuentes</h1>
            <div className="wrapper">
                <div className="accordion">
                    {DataQuestions.map((item, index) => (
                        <ItemCollapsible {...item} index={index} selected={selected} toggle={toggle} />
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
        </div>

    )
}