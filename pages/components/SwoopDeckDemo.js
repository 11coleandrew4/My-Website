function SwoopDeckDemo() {
  return (
    <video
      loop="true"
      muted="true"
      id="swoopdeck-demo"
      controls="true"
      poster="/swoopdeck-thumb.png"
    >
      <source src="/SwoopDeck-V2.mp4" type="video/mp4" />
    </video>
  );
}

export default SwoopDeckDemo;
