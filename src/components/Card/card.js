import './card.css';

export const Card = ({ titulo, content, foot, handleFunction }) => {
  return (
    <button className="card" onClick={handleFunction} type="button">
      <div className="card-header">
        <h2>{titulo}</h2>
      </div>
      <div className="card-content">{content}</div>
      <div className="card-foot">{foot}</div>
    </button>
  );
};
