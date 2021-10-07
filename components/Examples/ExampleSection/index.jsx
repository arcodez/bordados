import { ExampleCard } from "../ExampleCard/index,";

export function ExampleSection({
  name = "bordados",
  desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolore reiciendis corrupti cupiditate ullam nemo. Ducimus dignissimos omnis eaque ullam.",
  card_data = [1, 2, 3, 4, 5, 6, 7, 8],
}) {
  return (
    <div className={name + " container"}>
      <h2 id={`#${name}`}>{name}</h2>
      <p>{desc}</p>

      <div className="cards_list ">
        {card_data.map((card, index) => (
          <ExampleCard key={index} {...card} />
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

        .{name} {

        }

        .cards_list {
          gap: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        }
      `}</style>
    </div>
  );
}
