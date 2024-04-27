import { useEffect, useState } from "react"

export const WordCounter = () => {
    const [text, setText] = useState('')
    const [wordCount, setWordCount] = useState(0)

    useEffect(() => {
        if (text.length > 0) {
            if (text[0] === ' ') return;
            const whiteSpace = countWhiteSpace(text)
            setWordCount(whiteSpace + 1)
        }
    }, [text])

    function countWhiteSpace(string) {
        let whiteSpace = 0
        for (let i = 0; i < string.length; i++) {
            if (string[i] === ' ') {
                if (string[i + 1]) {
                    whiteSpace++;
                }
            }
        }
        return whiteSpace;
    }

    function handleCLear() {
        setText('')
        setWordCount(0)
    }

    return (
        <main className="h-screen p-24">
            <h1 className="text-3xl font-bold my-10 text-center">Word Counter</h1>
            <div className="max-w-5xl p-5 mx-auto flex flex-col items-stretch gap-5 border rounded-lg">
                <textarea onChange={(e) => setText(e.target.value)} value={text || ''} name="text" placeholder="halo" className="rounded p-5 text-xl border border-gray-900"></textarea>
                <div className="flex justify-between items-center">
                    <span className="bg-blue-500 text-white p-3 rounded-md text-lg">Character: {text.length}</span>
                    <button onClick={handleCLear} className="text-lg bg-gray-300 rounded-md px-4 py-1 hover:bg-gray-400">Clear</button>
                    <span className="bg-blue-500 text-white p-3 rounded-md text-lg">Word: {wordCount}</span>
                </div>
            </div>
        </main>
    )
}
