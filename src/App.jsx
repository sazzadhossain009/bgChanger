import { useState } from "react";

function App() {
    const [color, setColor] = useState("olive");
    return (
        <>
            <div className="w-full h-screen" style={{ backgroundColor: color }}>
                <div className=" flex flex-wrap fixed bottom-6 	w-full  justify-center ">
                    <div
                        className="flex flex-wrap justify-center px-4 py-3 gap-4 rounded-xl"
                        style={{ backgroundColor: "white" }}
                    >
                        <button
                            className="bg-red-500 px-4 py-2 rounded-full shadow-xl text-siz"
                            onClick={() => setColor("red")}
                        >
                            Red
                        </button>
                        <button
                            className="bg-blue-500 px-4 py-2 rounded-full shadow-xl text-siz"
                            onClick={() => setColor("blue")}
                        >
                            Blue
                        </button>
                        <button
                            className="bg-green-500 px-4 py-2 rounded-full shadow-xl text-siz"
                            onClick={() => setColor("green")}
                        >
                            Green
                        </button>
                        <button
                            className="bg-purple-500 px-4 py-2 rounded-full shadow-xl text-siz"
                            onClick={() => setColor("purple")}
                        >
                            Purple
                        </button>
                        <button
                            className="bg-pink-500 px-4 py-2 rounded-full shadow-xl text-siz"
                            onClick={() => setColor("pink")}
                        >
                            Pink
                        </button>

                        <button
                            className="bg-yellow-500 px-4 py-2 rounded-full shadow-xl text-siz"
                            onClick={() => setColor("Yellow")}
                        >
                            Yellow
                        </button>
                        <button
                            className="bg-black text-white px-4 py-2 rounded-full shadow-xl text-siz"
                            onClick={() => setColor("black")}
                        >
                            Black
                        </button>
                        <button
                            className="bg-white px-4 py-2 rounded-full shadow-xl text-siz"
                            onClick={() => setColor("white")}
                        >
                            White
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
