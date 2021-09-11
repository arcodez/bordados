import { ExampleCard } from "../ExampleCard/index,";

export function Bordados() {
  return (
    <div id="#bordados" className="bordados">
      <h2>bordados</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sint
        asperiores provident itaque repellat facere aperiam? Rem dolores
        molestias ea natus quas dolorem esse cupiditate, velit qui deleniti
        delectus sapiente facilis aspernatur architecto itaque id atque nobis,
        in, et repudiandae consectetur. Consectetur ad vitae alias ipsum nemo
        ratione quis, delectus consequatur odio aliquid mollitia veritatis neque
      </p>

      <div className="cards_list">
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <ExampleCard key={card} />
        ))}
      </div>

      <style jsx>{`
        h2 {
          text-align: center;
          text-transform: capitalize;
        }
        p {
          text-align: justify;
        }
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
