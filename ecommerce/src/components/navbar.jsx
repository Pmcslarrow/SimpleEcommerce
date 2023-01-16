export default function Navbar()
{
    return (
        <div className="bg-beige-300">
            <nav>
                <ul className="list-none text-black flex justify-center gap-10 p-5">
                    <li><a className="hover:bg-sky-100" href="#">Home</a></li>
                    <li><a className="hover:bg-sky-100" href="#">Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}