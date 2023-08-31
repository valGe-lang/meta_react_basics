function Example3 () {
    const randomNum = () => Math.floor(Math.random() * 100)
    return (
        <div>
            <h1>Here is a random number between 0 to 100: {randomNum()}</h1>
        </div>
    );
};

export default Example3;