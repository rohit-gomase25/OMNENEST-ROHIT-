// src/Greeting.tsx

interface GreetingProps {
  name: string;
  role:string;
  bio?: string;
  isOnline?: boolean;
}

function Greeting({ name, role, bio, isOnline }: GreetingProps) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Role: {role}</p>
      {bio && <p>Bio: {bio}</p>}
      {isOnline ? <p>Status: Online</p> : <p>Status: Offline</p>}
    </div>
  );
}


export default Greeting;


