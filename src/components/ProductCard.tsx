import Image from "./UI/Image";
import Button from "./UI/Button";
import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";

interface IProps {
    Product: IProduct;
}

const ProductCard = ({Product}: IProps) => {
    return (
        <div className="max-w-sm md:max-w-lg border p-2 mx-auto rounded-md m-3 flex flex-col">
            
            <Image imageURL="https://th.bing.com/th/id/OIP.Yj37YzzXd_dZWH6xS63dPwHaE8?w=241&h=180&c=7&r=0&o=5&pid=1.7" alt="product name" />

            <h3>{Product.title}</h3>
            <p>{textSlicer(Product.description)}</p>
            
            <div className="flex items-center my-4 space-x-2" >
                <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"/>
            </div>

            <div className="flex items-center justify-between">
                <span>$500,000</span>
                <img
                src="https://th.bing.com/th/id/OIP.Yj37YzzXd_dZWH6xS63dPwHaE8?w=241&h=180&c=7&r=0&o=5&pid=1.7"
                alt="product name"
                className="w-10 h-10 rounded-full"/>
            </div>

            <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-700" >EDIT</Button>
                <Button className="bg-red-700">DELETE</Button>
            </div>

        </div>
    )
}

export default ProductCard;