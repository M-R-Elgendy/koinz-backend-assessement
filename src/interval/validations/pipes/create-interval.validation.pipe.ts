import { PipeTransform, Injectable, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { intervalSchema } from "../schema/create-interval.schema"
import { joiErrorsIntoArray } from "../../../utils/utils"

@Injectable()
export class CreateIntervalValidationPip implements PipeTransform {
  async transform(value: any) {

    try {
      const { error, value: validatedValue } = await intervalSchema.validateAsync(value, { abortEarly: false });
      if (error) {
        const errorMsg = joiErrorsIntoArray(error.message);
        throw new HttpException({ status: HttpStatus.BAD_REQUEST, message: errorMsg }, HttpStatus.BAD_REQUEST);
      }
      return value;
    } catch (error) {
      const errorMsg = joiErrorsIntoArray(error.message);
      throw new HttpException({ status: HttpStatus.BAD_REQUEST, message: errorMsg }, HttpStatus.BAD_REQUEST);
    }

  }
}
