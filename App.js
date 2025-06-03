const heading = React.createElement("h1", {id:"c1"}, "Hello world inside React..")

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(heading)  //object
root.render(heading)