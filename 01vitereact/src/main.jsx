import  React from 'react'
import { createRoot } from 'react-dom/client'
import { jsx as _jsx } from 'react/jsx-runtime'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Chai App!</h1>
        </div>
    )
}

/*const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
    }*/

const anotherElement =(
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',targer: '_blank'},
    'Click me to visit Google',
    anotherUser
)


createRoot(document.getElementById('root')).render(
  
reactElement
)
