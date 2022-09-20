import Image from 'next/image';

function SwoopDeckLogo() {
  return (
    <Image
      src="/SwoopLogo.png"
      alt="me"
      height="200"
      width="200"
      id="swoopdeck-logo"
    />
  );
}

export default SwoopDeckLogo;
