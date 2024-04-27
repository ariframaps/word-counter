export const Joke = () => {
    return (
        <main className="h-screen p-24 text-center">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold my-10">Word Counter</h1>
                <div className="border border-black p-5">
                    this is the joke - <a href="https://api.chucknorris.io/" target="_blank" rel="noreferrer">api.chucknorris.io</a>
                </div>
                <button className="my-16 p-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold px-5">Generate joke</button>
            </div>
        </main>
    )
}
