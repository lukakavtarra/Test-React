import DataTemplate from "./components/User/DataTemplate";
import Team from "./components/User/Team";
import UserList from "./components/Dav2/UserList";
import { users } from "./components/Dav2/data2";

function App() {
  return (
    <div className="App">
      <Team />
      <UserList users={users} />
    </div>
  );
}

export default App;
