<?php

namespace App\Rules\Words;

use Illuminate\Contracts\Validation\Rule;

class ForbiddenWords implements Rule
{

    public function __construct()
    {
        //
    }


    public function passes($attribute, $value)
    {
        $forbiddenWords = ['puto','put@','put#',' puta','boludo','culiau','concha','gil','choto','boludo','mierda','pendejo','cabrón','cojón','maricón','zorra','cabrona','idiota','tonto','imbécil','culero','chinga','chingar','joder','carajo','coger','pendeja','perra'];

        foreach ($forbiddenWords as $word) {
            if (stripos($value, $word) !== false) {
                return false;
            }
        }
        return true;
    }


    public function message()
    {
        return 'El :attribute tiene palabras prohibidas';
    }
}
