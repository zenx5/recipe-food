import Link from "next/link"

export default function Home() {
  return (<div className="main">
    <Link className="card" href='/products'>Productos</Link>
    <Link className="card" href='/recipes'>Recetas</Link>
  </div>)
}
