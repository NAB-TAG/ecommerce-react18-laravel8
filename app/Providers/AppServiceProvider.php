<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

// product validators
use App\Contracts\ProductValidatorInterface;
use App\Validators\ProductValidator;
// Category validators
use App\Contracts\CategoryValidatorInterface;
use App\Validators\CategoryValidator;
// Ad Validators
use App\Contracts\AdValidatorInterface;
use App\Validators\AdValidator;
// User Validators
use App\Contracts\UserValidatorInterface;
use App\Validators\UserValidator;
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
            CategoryValidatorInterface::class,
            CategoryValidator::class,
            AdValidatorInterface::class,
            AdValidator::class,
            UserValidatorInterface::class,
            UserValidator::class,

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
