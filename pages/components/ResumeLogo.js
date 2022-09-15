import Image from 'next/image';
import Link from 'next/link';

function ResumeLogo() {
  return (
    <Link href="https://docs.google.com/document/d/15Qw6hldEAteN0z9wz7u_3tJz6NIzdQs4mPMzE-gllWY/export?format=pdf">
      <div id="outer-resume-picture-div">
        <div id="resume-logo-picture">
          <Image
            src="/resume-logo.png"
            alt="me"
            width="130"
            height="130"
            className="picture"
          />
        </div>
      </div>
    </Link>
  );
}

export default ResumeLogo;
