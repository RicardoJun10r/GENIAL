import './card.css'

export const Card = ({ titulo, content, foot, handleFunction }) => {
    return (
        <section onClick={handleFunction} className="card">
            <div className="card-header">
                <h1>{titulo}</h1>
            </div>
            <div className="card-content">
                {content}
            </div>
            <div className="card-foot">
                {foot}
            </div>
        </section>
    )
}