import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  //   @IsString({ message: 'The brand must be a cool string' })
  @IsString()
  readonly brand: string;
  @IsString()
  @MinLength(3)
  readonly model: string;
}
