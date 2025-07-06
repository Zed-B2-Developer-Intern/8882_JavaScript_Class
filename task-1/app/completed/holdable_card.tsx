import { Card } from "antd";

export default function HoldableCard({ task, onHold }: { task: string; onHold: () => void }) {
  let holdTimeout: ReturnType<typeof setTimeout>;

  const handleMouseDown = () => {
    holdTimeout = setTimeout(() => {
      onHold();
    }, 600);
  };

  const clearHold = () => {
    clearTimeout(holdTimeout);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={clearHold}
      onMouseLeave={clearHold}
      onTouchStart={handleMouseDown}
      onTouchEnd={clearHold}
      className="cursor-pointer select-none"
    >
      <Card className="shadow-md">{task}</Card>
    </div>
  );
}
