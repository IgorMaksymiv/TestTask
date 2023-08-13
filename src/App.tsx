import React from "react";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GetRequest } from "./components/GetRequest/GetRequest";
import { PostRequest } from "./components/PostRequest/PostRequest";


export const App: React.FC = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <Main />
                <GetRequest />
                <PostRequest />
            </div>
        </div>
    )
}
