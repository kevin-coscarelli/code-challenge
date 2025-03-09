import { setItem } from "../services/items.service";

export const AddItem = () => {
    const addItem = (formData: FormData) => {
        setItem({
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            imagePath: formData.get('imagePath') as string,
        });
    }
    return (
        <div className="flex flex-col justify-center items-center mt-12">
            <form action={addItem} className="grid gap-6 mb-6 text-left w-1/3">
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 text">Title</label>
                    <input required name="title" type="text" id="small-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <input required name="description" type="text" id="small-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Image Path</label>
                    <input required name="imagePath" type="text" id="small-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >Add</button>
            </form>
        </div>
    )
}