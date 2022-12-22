import flying from "./assets/flying.png";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={flying} className={"animate-spin-slow"} />
    </div>
  );
}
