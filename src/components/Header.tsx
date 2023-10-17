import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center gap-4 justify-end p-6 w-full mx-auto bg-white">
      <Link
        href="/"
        className="text-[#00c8b3]  hover:text-[#349289]  transition-all duration-300"
      >
        Ver todos os usuários
      </Link>
      <Link
        href="/signup"
        className="bg-[#00c8b3] px-4 py-2 font-semibold text-white rounded-full hover:opacity-70 transition-all duration-300"
      >
        Cadastrar
      </Link>
    </header>
  )
}
