<?php

namespace App\Validators;

use App\Contracts\AdValidatorInterface;
use Illuminate\Contracts\Validation\Validator;

class AdValidator implements AdValidatorInterface
{
    public function validate( array $data ): Validator
    {
        $rules = [
            'title' => ['required', 'max:100', 'forbidden_words', 'string'],
            'link' => ['required', 'string'],
            'image' => ['required'],
        ];

        $messages = [
            'title.required' => 'El Titulo es requerido.',
            'title.max' => 'El Titulo tiene que tener un maximo de 100 caracteres.',
            'title.forbidden_words' => 'El Titulo tiene malas palabras.',
            'title.string' => 'El Titulo tiene que ser un texto',
            'link.required' => 'El link es requerido',
            'link.string' => 'El link tiene que ser un string',
            'image.required' => 'La imagen es requerida',
        ];

        return \Validator::make($data, $rules, $messages);
    }


    public function validateEdit( array $data ): Validator
    {
        $rules = [
            'title' => ['required', 'max:100', 'forbidden_words', 'string'],
            'link' => ['required', 'string'],
        ];

        $messages = [
            'title.required' => 'El Titulo es requerido.',
            'title.max' => 'El Titulo tiene que tener un maximo de 100 caracteres.',
            'title.forbidden_words' => 'El Titulo tiene malas palabras.',
            'title.string' => 'El Titulo tiene que ser un texto',
            'link.required' => 'El link es requerido',
            'link.string' => 'El link tiene que ser un string',
        ];

        return \Validator::make($data, $rules, $messages);
    }
}
