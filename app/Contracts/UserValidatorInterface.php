<?php

namespace App\Contracts;

use Illuminate\Contracts\Validation\Validator;

interface UserValidatorInterface
{
    public function validate( array $data ): Validator;
}
