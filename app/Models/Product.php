<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'price',
        'colors',
        'sizes',
        'description',
        'if_discount',
        'discount',
        'coupons',
        'status',
        'file_path',
        'image',
        'code_sku',
    ];

    protected $casts = [
        'price' => 'decimal:2'
    ];

    protected $hidden = [

    ];
}
