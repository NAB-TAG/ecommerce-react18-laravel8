<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Validators\UserValidator;
use App\Services\UserManager;
use Cookie;
class AuthController extends Controller
{
    private $userValidator;
    private $userManager;

    public function __construct( UserValidator $userValidator, UserManager $userManager )
    {
        $this->userValidator = $userValidator;
        $this->userManager = $userManager;
    }
    //
    public function register( Request $request )
    {
        $validationResults = $this->userValidator->validate( $request->all() );

        if( $validationResults->fails() ):
            return response()->json(["El usuario no se pudo registrar", "warning", $validationResults->errors()->first()], 422);
        endif;

        $result = $this->userManager->registerUser( $request->all() );
        return $result;
    }

    public function login( Request $request )
    {
        // return [$request->all()];
        // return redirect("/");

        $email = $request->email;
        $password = $request->password;
// return [$email];

        if( Auth::attempt(['email' => $email, 'password' => $password])){
            $user = User::where('email', $email)->firstOrFail();
            $token = $user->createToken('auth_token')->plainTextToken;
            $tokenEncrypt = encrypt($token);
            $userToken = encrypt($user->id);

            $userCode = encrypt($user->code_slug);
            $idUser = $user->id;
            Auth::login($user);
            return response()->json([$token])
                ->withCookie(cookie('access_token', $tokenEncrypt, 60, null, null, true, true))
                ->withCookie(cookie('qwf', $userToken, 60, null, null, true, true))
                ->withCookie(cookie('pwe', $userCode, 60, null, null, true, true));
        } else {
            return response()->json(["Operacion Fallida", "warning", "Usuario y/o contraseña incorrectas"], 400);
        }
        return response()->json(["Operacion Fallida", "error", "Hubo un error en el servidor"], 500);
    }

        public function logout()
        {
            Auth::logout();
            return redirect('login')->cookie('access_token', null, -1)->cookie('qwf', null, -1)->cookie('pwe', null, -1);
        }
    public function taco()
    {
        return ["acceso autorizado"];
    }

    public function decrypt()
    {
        try {
            $access_token = Cookie::get('access_token');
            $decryptedToken = decrypt($access_token);

            // return [$decryptedToken];
            return response()->json([$decryptedToken], 201);
        } catch (\Throwable $th) {
            return response()->json(["Operacion Fallida", "error", "Tienes que iniciar sesion"], 401);
        }
    }
}
