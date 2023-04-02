import Link from "next/link"

function Header (props){
    return <>
        <header className="flex items-center justify-end w-full h-24 border-b bg-gray-100">
            <div className="mr-8">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div className="mr-8">
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
        </header>
    </>
}

export default Header