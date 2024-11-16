import { BadRequestException, ValidationError } from '@nestjs/common';

export function CustomValidationExceptionFactory(errors: ValidationError[]) {
  return new BadRequestException({
    message: 'Validation failed',
    key: "object.invalid",
    errors: errors.map((error) => ({
      field: error.property,
      constraints: error.constraints,
    })),
  });
}
