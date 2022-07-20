import React from 'react';

export default function QuestionView(){
    return(
        <div className="container mx-auto bg-slate-400 rounded-md m-8 ">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Question
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </input>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                </input>
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
            </div>
            
        </div>
    )
}