import { pageSize } from "../services/items.service"

export const PageButtons = (
    { itemsLength, paginationHandler }:
    { itemsLength: number, paginationHandler: (num: number) => void }
) => {
    const mapToButtons = (itemsLength: number) => {
        const pages = Array.from({length: Math.round(itemsLength/pageSize)}, (_, i) => i + 1);
        return pages.map((num) => (
            <button
                onClick={() => paginationHandler(num)}
                type="button"
                key={num}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >{num}</button>));
    }
    return (itemsLength > pageSize) ? (
        <div>
            {mapToButtons(itemsLength)}
        </div>
    ) : null;
}