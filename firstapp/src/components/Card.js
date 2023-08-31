function Card (props) {
    return (
        <div className="Card">
            <h2 className="first">{props.h2}</h2>
            <h3 className="second">{props.h3}</h3>
        </div>
    );
};

export default Card;