const Answer = (props: any) => {
    return (
        <div className="flex column bg-white shadow rounded p-4 mb-4">
            <div className="w-auto pr-[20px]">
                {props.content}
                    <div style={{borderRadius: 20, borderWidth: 1, borderColor: "black", height: 50, width: 50}}> oi </div>
            </div>
            <div className="w-full">
                <h1 className="text-gray-600 mb-2 text-2xl">
                    Pergunta: Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </h1>
                <p className="mb-2">
                    Resposta: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                    metus non ligula posuere ornare. Fusce condimentum, ligula quis
                    tristique egestas, ex felis efficitur mauris, vel tristique libero dui a
                    urna.
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <button className="text-blue-500 hover:underline">Responder</button>
                        <button className="text-gray-400 hover:text-blue-500 flex items-center space-x-1">
                            <span>0</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1a1 1 0 011 1v12h5a1 1 0 110 2h-6a1 1 0 01-1-1V2a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button className="text-gray-400 hover:text-red-500 flex items-center space-x-1">
                            <span>0</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a1 1 0 01-1-1v-12a1 1 0 011-1h6a1 1 0 110 2h-5v10a1 1 0 01-1 1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="text-gray-500">
                        4 horas atrás
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Answer;
