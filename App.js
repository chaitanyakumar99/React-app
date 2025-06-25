/* <div id="parrent">
    <div id="child">
        <h1>GOod orning</h1>
    </div>
</div>

ReactElement(object)=> HTML (Browser understands)
*/
 
const parrent = React.createElement("div", { id: "parrent" },React.createElement("div", { id: "child" },React.createElement("h1",{},"HELLO GOOD MORNING ")) )

// const heading = React.createElement("h1", { id: "c1" }, "Hello world inside React..")

// console.log(parrent)  //object


    const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parrent)     