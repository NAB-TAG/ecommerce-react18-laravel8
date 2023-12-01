<?php

namespace App\Validators;

use App\Contracts\CategoryValidatorInterface;
use Illuminate\Contracts\Validation\Validator;

class CategoryValidator implements CategoryValidatorInterface
{
    public function validate( array $data ): Validator
    {
        $rules = [
            'name' => ['required', 'max:30', 'forbidden_words', 'string'],
            'icon' => ['required', 'max:30', 'forbidden_words', 'string'],
        ];

        $messages = [
            'name.required' => 'El nombre de la categoria es requerido.',
            'name.max' => 'El nombre de la categoria tiene que tener un maximo de 30 caracteres.',
            'name.forbidden_words' => 'El nombre de la categoria tiene malas palabras.',
            'name.string' => 'El nombre de la categoria tiene que ser un texto',
            'icon.required' => 'El icono de la categoria es requerido.',
            'icon.max' => 'El icono de la categoria tiene que tener un maximo de 30 caracteres.',
            'icon.forbidden_words' => 'El icono de la categoria tiene malas palabras.',
            'icon.string' => 'El icono de la categoria tiene que ser un texto',
        ];

        return \Validator::make($data, $rules, $messages);
    }


    public function validateEdit( array $data ): Validator
    {
        $rules = [
            'name' => ['required', 'max:30', 'forbidden_words', 'string'],
            'icon' => ['required', 'max:30', 'forbidden_words', 'string'],
        ];

        $messages = [
            'name.required' => 'El nombre de la categoria es requerido.',
            'name.max' => 'El nombre de la categoria tiene que tener un maximo de 30 caracteres.',
            'name.forbidden_words' => 'El nombre de la categoria tiene malas palabras.',
            'name.string' => 'El nombre de la categoria tiene que ser un texto',
            'icon.required' => 'El icono de la categoria es requerido.',
            'icon.max' => 'El icono de la categoria tiene que tener un maximo de 30 caracteres.',
            'icon.forbidden_words' => 'El icono de la categoria tiene malas palabras.',
            'icon.string' => 'El icono de la categoria tiene que ser un texto',
        ];

        return \Validator::make($data, $rules, $messages);
    }
}
