
import TodoListContainer from "./components/TodoListContainer";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <TodoListContainer />
    </AppProvider>
  );
}

export default App;