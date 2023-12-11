<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
class UserManager
{
    public function registerUser(array $data)
    {
        $user = new User();
        $user->username = $data['username'];
        $user->name = 'Umberto';
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);
        $user->code_slug = Str::random(30);
        // $token = Auth::user()->createToken('auth_token')->plainTextToken;
        if ($user->save()) {
            Auth::login($user);
            $token = Auth::user()->createToken('auth_token')->plainTextToken;
            return response()->json(["Operacion exitosa", "success", "El usuario se registro con exito."], 201);
        }else {
            return response()->json(["Error en el servidor","error", "No se pudo registrar el usuario, por favor verifica tu conexion o comunicate con el administrador."], 500);
        }
    }
}
