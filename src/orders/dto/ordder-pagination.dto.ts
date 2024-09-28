import { PaginationDto } from "src/common";
import { OrdersStatus, OrdersStatusList } from "../enum/order.enum";
import { IsEnum, IsOptional } from "class-validator";

export class OderPaginationDto extends PaginationDto{

    @IsOptional()
    @IsEnum( OrdersStatusList,{
        message: `Valid status are ${ OrdersStatusList }`
    })
    status: OrdersStatus;
}