function Promo (props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.text}, {props.color}</h1>
            </div>
            <div>
                <h2>Subscribe to my newletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;