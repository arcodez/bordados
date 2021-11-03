export const ItemCollapsible = ({
  selected,
  question,
  answer,
  index,
  toggle,
}) => {
  return (
    <div className="item">
      <div className="title" onClick={() => toggle(index)}>
        <h2>{question}</h2>
        <span>{selected === index ? "-" : "+"}</span>
      </div>
      <div className={selected === index ? "content show" : "content"}>
        {answer}
      </div>

      <style jsx>{`
        .item {
          background: var(--noche-clarac);
          margin-bottom: 10px;
          padding: 10px 20px;
          border-radius: 10px;
          box-shadow: var(--shadow);
        }

        .title {
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .content {
          border-radius: 10px;
          color: white;
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
  );
};
