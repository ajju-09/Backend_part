import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit google"
}

function MyApp(){
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://static.vecteezy.com/system/resources/previews/050/211/921/non_2x/rainy-sky-with-dramatic-clouds-photo.jpg" target='_blank'>Visit Image</a>
)

// react language

const SecReactElement = React.createElement(
    'a',
    {href: "https://static.vecteezy.com/system/resources/previews/050/211/921/non_2x/rainy-sky-with-dramatic-clouds-photo.jpg", target: "_blank"},
    "Visit an Image"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
//    <MyApp />
    // AnotherElement
    // SecReactElement
    <App />
)
