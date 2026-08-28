const root = ReactDOM.createRoot(document.getElementById("root"));

function StringLiterals() {
    const name = "Saritha";
    const age = 21;

    return React.createElement(
        "div",
        null,
        React.createElement("h2", null, "Using String Literals"),
        React.createElement(
            "p",
            null,
            `Hello, my name is ${name} and I am ${age} years old.`
        )
    );
}

root.render(React.createElement(StringLiterals));