export function Hello (props) {
    const styles= {
        background:"grey",
        fontWeight: "bold",
        color: "red",
        textAlign: "center"
    }
    return (
        <div>
            <h1 style={styles}>Hello, {props.firstName}</h1>
        </div>
    );
};
export default Hello;