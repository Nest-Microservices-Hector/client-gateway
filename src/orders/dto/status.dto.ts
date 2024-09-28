import { IsEnum, IsOptional } from "class-validator";
import { OrdersStatus, OrdersStatusList } from "../enum/order.enum";

export class StatusDto {

    @IsOptional()
    @IsEnum(OrdersStatusList,{
        message: `Valid status are ${OrdersStatusList}`
    })
    status: OrdersStatus
}