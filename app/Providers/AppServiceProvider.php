<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

// product validators
use App\Contracts\ProductValidatorInterface;
use App\Validators\ProductValidator;
// rules
use App\Rules\Words\ForbiddenWords;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            ProductValidatorInterface::class,
            ProductValidator::class,
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \Validator::extend('forbidden_words', function ($attribute, $value, $parameters, $validator) {
            $rule = new ForbiddenWords();
            return $rule->passes($attribute, $value);
        });
    }
}
