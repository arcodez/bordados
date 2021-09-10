import { ExampleCard } from "../ExampleCard/index,";

export function Bordados() {
  return (
    <div id="#bordados" className="bordados">
      <h2>bordados</h2>
      <div className="cards_list">
        {[1, 2, 3, 4, 5].map((card) => (
          <ExampleCard />
        ))}
      </div>

      <style jsx>{`
        .bordados {
          width: 90%;
          margin: auto;
        }
        .cards_list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
