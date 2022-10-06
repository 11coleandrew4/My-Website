function GottaGoDemo() {
  return (
    <video
      controls
      poster="/gottago-thumb.png"
      loop="true"
      muted="true"
      id="gottago-demo"
    >
      <source src="/gotta-go-demo.mp4" type="video/mp4" />
    </video>
  );
}

export default GottaGoDemo;
