import { Routes, Route } from "react-router-dom"
import { WordCounter } from "../pages/WordCounter"
import { Joke } from "../pages/Joke"
import { PageNotFound } from "../pages/PageNotFound"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WordCounter />} />
            <Route path="/joke" element={<Joke />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
