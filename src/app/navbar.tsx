export default function Navbar() {
    return (
        <nav className="flex bg-gray-800 py-2 px-5">
            <h1 className="text-white">Navbar</h1>
            <ul className="flex">
                <li className="mr-6">Home</li>
                <li className="mr-6">About</li>
                <li className="mr-6">Profile</li>
            </ul>
        </nav>
    );
}