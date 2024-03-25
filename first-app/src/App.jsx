import './App.css';
import {calcNum} from './utils/utils.js'


function ButtonGroup({children}) {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {children}
        </div>
    )
}

export function Button({background, text}) {

    const elem = []

    return (
        <button style={{"background": background}}> {text} </button>
    )
}


function App() {

    const test = 'ceci est mon test';

    const elem = [
        {
            background: 'red',
            text: 'Home'
        },
        {
            background: 'violet',
            text: 'Cart'
        },
        {
            background: 'orange',
            text: 'Profil'
        }
    ]


  return (
      <>
          <nav>
              <ButtonGroup>
                  {
                      elem.map((el, index) => {
                          return <Button key={index} {...el} />
                      } )
                  }
              </ButtonGroup>
          </nav>
      </>
  )
}

export default App