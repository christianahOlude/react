// import {store} from "../store/store"
// import { Provider } from "react-redux"
// import {screen, render} from "@testing-library/react"
// import MovieCard from "../reuseable/MovieCard"

// const renderWithProvider=(ui)=>(
//     render(<Provider store={store}></Provider>)
// )

// const renderWithProvider=(ui)=>{
//     return render(<Provider store={store}>{ui}</Provider>)
// }

// describe("MovieCard", ()=>{
//     test("showing loading initially", ()=>{
//         renderWithProvider(<MovieCard/>)
//         let result = screen.findByText(/loading.../i)
//         expect(result).toBeInTheDocument()
//     })

// })