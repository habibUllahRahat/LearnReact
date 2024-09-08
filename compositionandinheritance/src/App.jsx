import './App.css'

// import Text from './inheritance/Text'
import Emoji from './composition/Emoji'
import Text from './composition/Text'
function App() {


  return (
    <>
      <Emoji>
        {({ addemoji }) => <Text addemoji={addemoji} />}</Emoji>
    </>
  )
}

export default App
