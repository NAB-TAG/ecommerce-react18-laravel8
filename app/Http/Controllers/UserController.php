<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Cookie;
class UserController extends Controller
{
    public function show()
    {
        $codeSlug = Cookie::get('pwe');
        $codeSlugDecrypt = decrypt($codeSlug);
        $user = User::where('code_slug', '=', $codeSlugDecrypt)->get();

        return $user;
    }
}
