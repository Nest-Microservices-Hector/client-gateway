import { IsBoolean, IsEnum, IsNumber, IsOptional, IsPositive } from "class-validator";
import { OrdersStatus, OrdersStatusList } from "../enum/order.enum";


export class CreateOrderDto {

    @IsNumber()
    @IsPositive()
    totalAmount: number;

    @IsNumber()
    @IsPositive()
    totalItems: number;

    @IsEnum(OrdersStatusList, {
        message: `Posible status values are ${OrdersStatusList}`
    })
    @IsOptional()
    status: OrdersStatus = OrdersStatus.PENDING;

    @IsBoolean()
    @IsOptional()
    paid: boolean = false;
}
