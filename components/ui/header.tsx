import Link from "next/link";
import TenacityLogo from "@/public/images/Tenacity-Black.png"
import RVULogo from "@/public/images/header_logo.svg";
import DevSphereLogo from "@/public/images/devsphere.svg"
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 space-x-3 justify-center md:justify-start items-center">
            <Image
              src={TenacityLogo}
              width={90}
              height={90}
              alt="Picture of the author"
            />
            <Image
              src={RVULogo}
              width={70}
              height={70}
              alt="Picture of the author"
            />
            <Image
              src={DevSphereLogo}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center hidden md:block justify-end gap-3">
            <li className="flex justify-end">
              <Link
                href="https://lu.ma/event/evt-zRwQJc8H77j28sX"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
                target="_blank"
              >
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
