const Ticker = () => {
  const tickerItems = [
    { skill: "REACT.JS", value: "85.0", change: "+2.5%", trend: "up" },
    { skill: "PYTHON", value: "90.0", change: "+5.2%", trend: "up" },
    { skill: "AWS", value: "78.0", change: "+1.8%", trend: "up" },
    { skill: "NODE.JS", value: "82.0", change: "+3.1%", trend: "up" },
    { skill: "ML", value: "88.0", change: "+4.7%", trend: "up" },
    { skill: "MONGODB", value: "75.0", change: "+2.2%", trend: "up" },
    { skill: "DOCKER", value: "70.0", change: "+1.5%", trend: "up" },
    { skill: "JAVASCRIPT", value: "87.0", change: "+3.8%", trend: "up" },
    { skill: "GITHUB", value: "92.0", change: "+2.9%", trend: "up" },
    { skill: "AGILE", value: "80.0", change: "+1.7%", trend: "up" },
    { skill: "FINTECH", value: "95.0", change: "+6.3%", trend: "up" },
    { skill: "BLOCKCHAIN", value: "73.0", change: "+2.1%", trend: "up" },
    { skill: "SQL", value: "81.0", change: "+2.4%", trend: "up" },
    { skill: "CGPA", value: "8.1/10", change: "Steady", trend: "up" },
  ];

  return (
    <div className="fixed top-16 left-0 right-0 w-full overflow-hidden bg-terminal-bg text-terminal-text border-b border-accent/30 shadow-lg h-[50px] z-40">
      <div className="ticker-wrap h-full">
        <div className="ticker-content">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-6 text-sm font-mono font-medium whitespace-nowrap"
            >
              <span className="text-terminal-text font-semibold tracking-wide">
                {item.skill}
              </span>
              <span className="text-success text-base">↑</span>
              <span className="text-terminal-text font-semibold">
                {item.value}
              </span>
              <span className="text-success text-xs">
                {item.change}
              </span>
              <span className="text-muted-foreground/30 mx-2">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
