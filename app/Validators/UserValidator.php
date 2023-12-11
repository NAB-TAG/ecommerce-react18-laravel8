<?php

namespace App\Validators;

use App\Contracts\UserValidatorInterface;
use Illuminate\Contracts\Validation\Validator;

class UserValidator implements UserValidatorInterface
{
    public function validate(array $data): Validator
    {
        $rules = [
            'username' => ['required', 'max:30', 'forbidden_words', 'string'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8'],
            'cpassword' => ['required', 'same:password'],
        ];

        $messages = [
            'username.required' => 'El nombre es requerido.',
            'username.max' => 'El nombre solo debe tener un máximo de 30 caracteres.',
            'username.forbidden_words' => 'El nombre tiene malas palabras.',
            'username.string' => 'El nombre debe ser un texto.',
            'email.required' => 'El Email es requerido',
            'email.email' => 'El Email tiene que tener formato de un email, valga la redundancia',
            'password.required' => 'La contraseña es requerida, como piensas crearte una cuenta sin contra?',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres',
            'cpassword.required' => 'La confirmacion de la contraseña es requerida',
            'cpassword.same' => 'La confirmacion de la contraseña debe ser igual a la contraseña'
        ];

        // Accedemos a la clase Validator en el espacio de nombres global, no es Illuminate\Contracts\Validation\Validator
        return \Validator::make($data, $rules, $messages);
    }


}
