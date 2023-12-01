<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

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

    protected $attributes = [
        // Establece los valores predeterminados para los campos de matriz
        'colors' => [],
        'sizes' => [],
        'coupons' => [],
        'image' => [],
    ];

    protected $casts = [
        'price' => 'decimal:2'
    ];

    protected $hidden = [

    ];
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
