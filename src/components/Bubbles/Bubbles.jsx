export default function Bubbles() {
  return (
    <div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const size = 15 + Math.random() * 25;
          const left = Math.random() * window.innerWidth;
          const top = Math.random() * window.innerHeight;
          const colors = [
            "bg-blue-300",
            "bg-green-300",
            "bg-yellow-300",
            "bg-pink-300",
            "bg-purple-300",
          ];
          return (
            <span
              key={i}
              className={`absolute rounded-full ${
                colors[i % colors.length]
              } opacity-50`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}px`,
                top: `${top}px`,
                animation: `floatBubble ${
                  5 + Math.random() * 5
                }s ease-in-out infinite alternate`,
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
