import { use } from "react";
import User from "./User";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);

  return (
    <div className="card">
      <h3>Users Info</h3>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
