import "./App.css";
import Brackets from "./composition/Brackets";

// import Text from './inheritance/Text'
import Emoji from "./composition/Emoji";
import Text from "./composition/Text";
function App() {
  return (
    <>
      <Emoji>
        {({ addemoji }) => (
          <Brackets>
            {({ addBrackets }) => (
              <Text addemoji={addemoji} addbrackets={addBrackets} />
            )}
          </Brackets>
        )}
      </Emoji>
      helloh
    </>
  );
}

export default App;
