import { ItemData } from "../services/items.service";

export const Item = ({ title, description, imagePath }: ItemData) => {
    return (
    <div className="flex flex-row justify-between p-3 border-2">
        <div className="flex flex-col items-start basis-2/3">
            <h3 className="text-2xl font-black">{title}</h3>
            <p className="font-extralight">{description}</p>
        </div>
        <div className="basis-1/3">
            <img
                alt={title}
                src={imagePath}
                loading="lazy"
            />
        </div>
    </div>
    );
}