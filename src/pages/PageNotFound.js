import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return (
        <main className="h-screen p-24 text-center">
            <h1 className="text-3xl font-bold my-10">Page not found :(</h1>
            <div className="max-w-5xl p-5 mx-auto flex flex-col items-center gap-5">
                <span className="text-5xl font-bold text-blue-600">404</span>
                <p className="text-lg">Oops! looks like the url doesn't exist</p>
                <Link to='/' className="bg-blue-500 p-5 text-xl text-white w-fit rounded-lg">Back to word counter</Link>
            </div>
        </main>
    )
}
