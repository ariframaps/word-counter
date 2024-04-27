import { useEffect, useState } from "react"

export const Joke = () => {
    const [joke, setJoke] = useState('')

    useEffect(() => {
        async function generateJoke() {
            const response = await fetch('https://api.chucknorris.io/jokes/random')
            const data = await response.json()
            setJoke(data.value)
        }
        generateJoke()
    }, [])

    return (
        <main className="h-screen p-24 text-center">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold my-10">Chuck norris joke</h1>
                <div className="border border-black p-5">
                    {joke} - <a href="https://api.chucknorris.io/" target="_blank" rel="noreferrer">api.chucknorris.io</a>
                </div>
            </div>
        </main>
    )
}
