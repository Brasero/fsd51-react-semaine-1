import './App.css';


function Wrapper({children}) {

    return (
        <div>
            {children}
        </div>
    )
}

function Number({number}) {
    const result = number ** 3;

    return (
        <div>
            {result}
        </div>
    )

}

// Le props children permet de définir que le component s'attend à recevoir des "enfant"
// Il pourra être utilisé pour rendre les components qui seront passée en tant qu'enfant
// function ButtonGroup({children}) {
//
//     return (
//         <div style={{display: 'flex', flexDirection: 'column'}}>
//             {children}
//         </div>
//     )
// }

// Un component peut prendre n'importe quel props en entrée, un props est en lécture seule dans le component
//la modification d'un props est donc impossible à l'intérieur d'un component
// export function Button({background, text}) {
//
//     const elem = []
//
//     return (
//         <button style={{"background": background}}> {text} </button>
//     )
// }


function App() {

    // const test = 'ceci est mon test';
    //
    // const elem = [
    //     {
    //         background: 'red',
    //         text: 'Home'
    //     },
    //     {
    //         background: 'violet',
    //         text: 'Cart'
    //     },
    //     {
    //         background: 'orange',
    //         text: 'Profil'
    //     }
    // ]

    const numbers = [ 4, 3, 7 ];


    //Un component React ne doit rendre qu'une seule balise JSX qui pourra avoir une infinité d'enfant
  return (
      <>
          {/*<nav id={'nav'}>*/}
          {/*    <ButtonGroup>*/}
          {/*        {*/}
          {/*            //Lors d'un map en JSX chaque component retourné lors du map devra avoir un props*/}
          {/*            //"key" unique pour chaque component*/}
          {/*            elem.map((el, index) => {*/}
          {/*                return <Button key={index} {...el} />;*/}
          {/*            } )*/}
          {/*        }*/}
          {/*    </ButtonGroup>*/}
          {/*</nav>*/}

          <Wrapper>
              {
                  numbers.map((num, index) => <Number number={num} key={index}/> )
              }
          </Wrapper>

      </>
  )
}

export default App