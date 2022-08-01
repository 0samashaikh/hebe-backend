import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  productDescription: string;

  // @IsNumber()
  @IsNotEmpty()
  productPrice: string;

  @IsString()
  @IsNotEmpty()
  productImg: string;

  @IsString()
  category?: string;

  @IsString()
  brand?: string;

}
