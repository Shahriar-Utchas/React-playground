export default function User({ user }) {
  console.log(user);

  return (
    <div className="card">
      <p>Name : {user.name}</p>
      <p>E-mail : {user.email}</p>
      <p>Web : {user.website}</p>
    </div>
  );
}
