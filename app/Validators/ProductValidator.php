<?php

namespace App\Validators;

use App\Contracts\ProductValidatorInterface;
use Illuminate\Contracts\Validation\Validator;

class ProductValidator implements ProductValidatorInterface
{
    public function validate(array $data): Validator
    {
        $rules = [
            'name' => ['required', 'max:30', 'forbidden_words', 'string'],
            'price' => ['required', 'integer', 'digits_between:1,6'],
            'category_id' => [ 'required', 'integer', 'digits_between:1,2' ],
            'stock' => [ 'required', 'integer', 'digits_between:1,3' ],
            'colors' => [ 'json' ],
            'sizes' => [ 'json' ],
            'description' => [ 'max:600'],
            'if_discount' => [ 'required', 'integer', 'between:0,1'],
            'discount' => [ 'integer', 'between:1,100' ],
            'coupons' => ['json'],
        ];

        $messages = [
            'name.required' => 'El nombre es requerido.',
            'name.max' => 'El nombre solo debe tener un máximo de 30 caracteres.',
            'name.forbidden_words' => 'El nombre tiene malas palabras.',
            'name.string' => 'El nombre no es un texto.',
            'price.required' => 'El precio es requerido.',
            'price.integer' => 'El precio debe ser un numero entero.',
            'price.digits_between' => 'El precio debe estar entre $1 y $999,999.',
            'stock.required' => 'El stock es requerido.',
            'stock.integer' => 'El stock debe ser un entero.',
            'stock.digits_between' => 'El stock debe estar entre 1 y 999.',
            'colors' => 'La lista de colores debe ser en formato JSON.',
            'sizes' => 'La lista de tallas debe ser en formato JSON.',
            'description.max' => 'La descripcion solo debe tener un máximo de 30 caracteres.',
            'if_discount.required' => 'El campo de "si es un descuento" es requerido.',
            'if_discount.integer' => 'El campo de "si es un descuento" debe ser un numero entero.',
            'if_discount.digits_between' => 'El campo de "si es un descuento" debe ser entre 0 y 1.',
            'discount.integer' => 'El descuento debe ser un numero entero.',
            'discount.between' => 'El discuento debe estar entre el 1% y el 100.',
            'coupons.json' => 'La lista de cupones debe ser un json.',

        ];

        // Accedemos a la clase Validator en el espacio de nombres global, no es Illuminate\Contracts\Validation\Validator
        return \Validator::make($data, $rules, $messages);
    }
}
