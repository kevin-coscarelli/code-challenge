import data from './data.json';

export type ItemData = {
    title: string,
    description: string,
    imagePath: string
};

type GetItemsProps = {
    searchTerm?: string,
    page?: number
} | undefined;

export const pageSize = 3;
let filteredDataLength = data.length;

export function getItems(props?: GetItemsProps) {
    let response = data;

    if (typeof props?.searchTerm === 'string' && props.searchTerm.length) {
        response = response.filter((item) => item.title.toLocaleLowerCase().includes(props.searchTerm!.toLowerCase()));
    }
    filteredDataLength = response.length;
    const currentPage = props?.page || 0
    const start = currentPage * pageSize;
    const end = start + pageSize
    response = response.slice(start, end > data.length ? undefined : end);
    return Promise.resolve(response);
}

export function setItem(item: ItemData) {
    if (data.find((dataItem) => dataItem.imagePath === item.imagePath)) {
        return Promise.resolve(false);
    }
    data.unshift(item);
    return Promise.resolve(true);
}

export function getTotalItemsLength() { return Promise.resolve(filteredDataLength) };