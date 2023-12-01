<?php

namespace App\Contracts;

use Illuminate\Contracts\Validation\Validator;

interface AdValidatorInterface
{
    public function validate( array $data ): Validator;

    public function validateEdit( array $data ): Validator;
}
