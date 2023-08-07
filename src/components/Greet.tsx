type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name}. Welcome, You have ${messageCount} messages.`
          : "Welcome guest"}
      </h2>
    </div>
  );
}
