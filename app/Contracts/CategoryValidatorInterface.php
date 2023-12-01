<?php

namespace App\Contracts;

use Illuminate\Contracts\Validation\Validator;

interface CategoryValidatorInterface
{
    public function validate( array $data ): Validator;

    public function validateEdit( array $data ): Validator;
}
