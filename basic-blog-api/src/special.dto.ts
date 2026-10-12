import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';

//?isactive=true$with_email=true           => boolean
//?ids=3,4,5,6,7,89,99                     => string[]
//?page=1&limit=60                         => page and limit
//api/v1/users                             => nested validation
//?filter[user_id]=uuid&filter[org_id]=uuid&filter[name]=uuid

export class SearchQueryDto {
  @Min(1)
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'page number for request',
    required: false,
    type: 'number',
  })
  page?: number;

  @ApiProperty({
    description: 'number of records in a request',
    required: false,
    type: 'number',
  })
  @Min(1)
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  limit?: number;

  tags?: string[];
}

export class UploadDto {
  @Expose({ name: 'tags[]' }) // Map incoming "tags[]" key to "tags"
  @Transform(({ value }) => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return [value]; // Handle single item case
    return [];
  })
  @IsArray()
  @IsString({ each: true })
  tags!: string[];
}
