import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const url = "http://localhost:8080/user"

// localhost:8080/signUp
export const userAuthApiSlice = createApi({
    reducerPath: "userAuth",
    baseQuery: fetchBaseQuery({baseUrl:`${url}`}),
    endpoints: (builder)=>({
        signUp:builder.mutation({
            query:(data)=>  ({
                url: "/register",
                method: "POST",
                header: {"Content-type": "application/json"},  
                body: data
            })
        })
    })
})

export const {useSignUpMutation} = userAuthApiSlice