<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Cookie;
use App\Models\User;
class CustomApiAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // return ["sadsasdf"];

        // $access_token = Cookie::get('qwf');
        // $token_decrypt = decrypt($access_token);
        // $user = User::find($token_decrypt);


        if (Cookie::get('qwf')) {
            $access_token = Cookie::get('qwf');
            $token_decrypt = decrypt($access_token);
            $user = User::find($token_decrypt);

            if ($user->role == 1) {
                return $next($request);
            }else {
                return response()->json(["Operacion Fallida", "warning", "No eres un administrador."], 401);
            }

        }else{
            return response()->json(["Operacion Fallida", "warning", "No Iniciaste sesion."], 401);
        }
        // return response()->json(["Operacion Fallida", "success", "$token_decrypt"], 401);
        return $next($request);
    }
}
