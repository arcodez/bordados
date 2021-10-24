import { Collapsible } from "./Collapsible"
import { useState } from "react"
import { DataQuestions } from "./Collapsible/Data"

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
        <div className="wrapper">
            <div className="accordion">
                {DataQuestions.map((item, index) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(index)}>
                            <h2>{item.question}</h2>
                            <span>{selected === index ? "-" : "+"}</span>
                        </div>
                        <div className={selected === index ? "content show" : "content"}>{item.answer}</div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .wrapper {
                display: flex;
                height: 100vh;
                width: 100vw;
                justify-content: center;
                align-items: center;
                }

                .accordion {
                    width: 500px;
                }
                .item {
                    background: #f0bebe1;
                    margin-bottom: 5px;
                    padding: 10px 20px;
                }

                .title {
                    color : #85662b;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .content {
                    color: #8b7f7f;
                    max-height: 0;
                    overflow: hidden;
                    transition: all 1s cubic-bezier(0, 1, 0, 1);
                }
                .content.show {
                    height: auto ;
                    max-height: 999px;
                    transition: all 1s cubiz-bezier(1, 0, 1, 0);

                }
            `}</style>
        </div>
    )
}