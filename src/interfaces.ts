export interface IVehicleDetail{
    id:number;
    vehicle_id:number;
    img_url:string;
    title:string;
    description:string;
}

export interface IVehicle {
    id?:number,
    brand_name?:string;
    year?:number;
    price?:number;
    main_img_url?:string;
    slogan?:string;
    main_description?:string;
    img_url_2?:string;
    description_2?:string;
    img_url_3?:string;
    description_3?:string;
    vehicle_detail?:Array<IVehicleDetail>;
}

export interface IResponse {
    success:boolean;
    message:string;
    response:any;
}