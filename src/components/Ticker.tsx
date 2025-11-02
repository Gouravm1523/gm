const Ticker = () => {
  const tickerItems = [
    { skill: "COMMUNICATION", value: "92.0", change: "+3.4%", trend: "up" },
    { skill: "LEADERSHIP", value: "88.0", change: "+2.7%", trend: "up" },
    { skill: "CREATIVITY", value: "94.0", change: "+4.1%", trend: "up" },
    { skill: "PROBLEM SOLVING", value: "89.0", change: "+3.6%", trend: "up" },
    { skill: "ADAPTABILITY", value: "91.0", change: "+2.9%", trend: "up" },
    { skill: "TEAMWORK", value: "93.0", change: "+3.3%", trend: "up" },
    { skill: "TIME MANAGEMENT", value: "87.0", change: "+2.5%", trend: "up" },
    { skill: "CRITICAL THINKING", value: "90.0", change: "+3.1%", trend: "up" },
    { skill: "PUBLIC SPEAKING", value: "85.0", change: "+2.2%", trend: "up" },
    { skill: "SELF-MOTIVATION", value: "95.0", change: "+4.6%", trend: "up" },
    { skill: "CULTURAL AWARENESS", value: "82.0", change: "+1.9%", trend: "up" },
    { skill: "EMOTIONAL INTELLIGENCE", value: "90.0", change: "+3.2%", trend: "up" },
    { skill: "NETWORKING", value: "88.0", change: "+2.8%", trend: "up" },
    { skill: "NEGOTIATION", value: "84.0", change: "+2.0%", trend: "up" },
    { skill: "HOBBY: READING", value: "Strong", change: "Growing", trend: "up" },
    { skill: "HOBBY: TRAVELLING", value: "Active", change: "Expanding", trend: "up" },
    { skill: "FINANCE", value: "Good", change: "+1.8%", trend: "up" },
    { skill: "Geo-Poltics", value: "Updated", change: "Stable", trend: "up" },
    { skill: "PERSONAL GROWTH", value: "Steady", change: "+2.3%", trend: "up" },
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
