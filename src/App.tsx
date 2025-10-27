
import TodoList from "./components/TodoList";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <TodoList />
    </AppProvider>
  );
}

export default App;