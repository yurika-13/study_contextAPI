//1) context first stage
// import './App.css';
// import Container from './component/Container';
// import {LanguageProvider} from "./component/LanguageContext";

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello</h1>
//      <LanguageProvider value={{ aaa:"ja-JP"}}>
//       <Container/>
//      </LanguageProvider>
//     </div>
//   );
// }

// export default App;

//2) context second stage
import Layout from "./component/try2/layout";

function App(){
  return(
    <Layout/>
  )
}

export default App;