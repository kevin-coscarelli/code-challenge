import { useEffect, useState } from 'react';
import { getItems, getTotalItemsLength, ItemData } from '../services/items.service';
import { Item } from './Item';
import { PageButtons } from './PageButtons';

export const ItemGrid = ({ searchTerm }: { searchTerm?: string }) => {

    const [itemData, setItemData] = useState<ItemData[]>();
    const [totalItemsLength, setTotalItemsLength] = useState<number>();

    useEffect(() => {
        getItems({searchTerm}).then((items) => setItemData(items));
        getTotalItemsLength().then((itemsLength) => setTotalItemsLength(itemsLength));
    }, [searchTerm]);

    const paginationHandler = (num: number) => {
        getItems({searchTerm, page: num - 1}).then((items) => setItemData(items));
    }

    const mapItemData = (itemData: ItemData[]) => {
        return itemData.map((item) => {
            return (
                <Item {...item} key={item.imagePath} />
            );
        });
    }

    return (
        <>
            <div className='mx-6 my-10 gap-2 flex flex-col overflow-y-auto grow'>
                {itemData && itemData.length ? mapItemData(itemData) : (
                    <h3>No items were found.</h3>
                )}
            </div>
            {totalItemsLength ? <PageButtons itemsLength={totalItemsLength} paginationHandler={paginationHandler}/> : null}
        </>
    );

}