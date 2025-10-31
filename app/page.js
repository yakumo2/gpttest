export default function Home() {
  const currentTime = new Date().toLocaleString("zh-CN", {
    hour12: false,
    timeZone: "Asia/Shanghai",
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      <span>hello world</span>
      <span>当前时间（UTC+8）：{currentTime}</span>
      hello world
    </main>
  );
}
