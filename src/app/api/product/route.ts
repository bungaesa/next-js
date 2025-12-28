import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
        {
            id: 1,
            title: "Air Force 1 GORE-TEX Vibram",
            price: 2669000,
            image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/a97aaeee-e955-4d22-b1e7-cab21b246b6b/AIR+FORCE+1+GTX+VIBRAM.png"

        },
        {
            id: 2,
            title: "Nike Zoom Vomero 5",
            price: 2489000,
            image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/600ad1ee-26aa-4996-8cec-4149ae78cd5e/NIKE+ZOOM+VOMERO+5.png"

        },
        {
            id: 3,
            title: "Nike Air Force 1 '07",
            price: 2099000,
            image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d2c012ee-59f7-46de-b6a6-f0d9ccc0b4d3/AIR+FORCE+1+%2707.png"

        },
        {
            id: 4,
            title: "Nike Air Force 1 '07",
            price: 2099000,
            image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d2c012ee-59f7-46de-b6a6-f0d9ccc0b4d3/AIR+FORCE+1+%2707.png"

        },
    ];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = await retrieveDataById("products", id);
        if(detailProduct) {
            return NextResponse.json({ 
            status: 200, 
            message: "Success", 
            data: detailProduct, 
        });
        }
        
        return NextResponse.json({ 
            status: 404, 
            message: "Not Found", 
            data: {},
        });
        
    }
    const products = await retrieveData("products");
    
    return NextResponse.json({ status: 200, message: "Success", data: products });
}