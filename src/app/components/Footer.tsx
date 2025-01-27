import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center text-gray-700 z-50 mb-6">
      <a
        className="flex items-center hover:underline hover:underline-offset-4"
        href="https://abbassi-mouhamed.web.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={24}
          height={24}
          className="mr-2"
        />
        Created By Abbassi Mouhamed
      </a>
    </footer>
  );
};

export default Footer;
