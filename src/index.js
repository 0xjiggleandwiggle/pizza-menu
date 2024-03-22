import React from "react"
import ReactDOM from "react-dom/client"

// app component
function App() {
    return (
        <h1>Hello react</h1>
    )
}

// root element
const root = ReactDOM.createRoot(document.getElementById("root"));


// render app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);