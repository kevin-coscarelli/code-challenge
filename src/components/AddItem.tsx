import { useState } from "react";
import { setItem } from "../services/items.service";

export const AddItem = () => {
    const [error, setError] = useState(false);
    const addItem = (formData: FormData) => {
        setItem({
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            imagePath: formData.get('imagePath') as string,
        }).then((isCorrect) => {
            setError(!isCorrect);
        });
    }
    return (
        <div className="flex flex-col justify-center items-center mt-12" role="form">
            <form action={addItem} className="grid gap-6 mb-6 text-left w-1/3">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 text">Title</label>
                    <input required id='title' name="title" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <input required name="description" type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div>
                    <label htmlFor="imagePath" className="block mb-2 text-sm font-medium text-gray-900">Image Path</label>
                    <input required name="imagePath" type="text" id="imagePath" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                {error ? <p role="alert" className="mt-2 text-sm text-red-600"><span className="font-medium">Error</span> repeated image path.</p> : null}
                <button
                    aria-label="Submit item"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >Add</button>
            </form>
        </div>
    );
}