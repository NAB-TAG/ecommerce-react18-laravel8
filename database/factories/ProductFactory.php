<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'price' => $this->faker->numberBetween(10, 1000),
            'category_id' => $this->faker->numberbetween(1,5),
            'stock' => $this->faker->numberBetween(1, 100),
            'colors' => json_encode($this->faker->randomElements(['red', 'blue', 'green', 'yellow'], 2)),
            'sizes' => json_encode($this->faker->randomElements(['L', 'XL', 'M'], 2)),
            'description' => $this->faker->text,
            'if_discount' => $this->faker->boolean,
            'discount' => $this->faker->numberBetween(0, 50),
            'coupons' => json_encode($this->faker->randomElements(['SAVE10', 'FREESHIP', 'SALE20'], 2)),
            'status' => 1,
            'file_path' => '/media/images/products/',
            'image' => json_encode($this->faker->randomElements(['1.jpg', '2.jpg', '3.jpg', '4.jpg'], 2)),
            'code_sku' => $this->faker->unique()->ean8,
        ];
    }
}
