<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Cookie;
use App\Models\User;
class IsAdmin
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
        // if ( Cookie::get('qwf') && Cookie::get('pwe')) {
            // return response()->json(["Operacion Fallida", "success", "blue"], 401);
            try {
                $access_token = Cookie::get('qwf');
                $codeSlug = Cookie::get('pwe');
                $codeSlug_decrypt = decrypt($codeSlug);
                // return response()->json(["Operacion Fallida", "success", $codeSlug], 401);
                $token_decrypt = decrypt($access_token);

                // Busca el usuario de la cookie con el id encriptado
                if (User::find($token_decrypt)) {
                    $user = User::find($token_decrypt);
                    // Comprueba si el code_slug(db) y la cookie 'pwe' desencriptada son iguales
                    if ($user->code_slug == $codeSlug_decrypt) {
                        // Comprueba si el usuario es un administrador
                        if ($user->role == 1) {
                            // Comprueba si el usuario esta auntenticado
                            if (Auth::check()) {
                                return $next($request);
                            }
                            return response()->json(["No Iniciaste sesion", "warning", "Debes iniciar sesion para realizar esta accion."], 401);

                        }else {
                            return response()->json(["No eres un administrador", "warning", "Necesitas ser un administrador para realizar esta accion."], 401);
                        }
                    }else{
                        return response()->json(["Intento inutil de hackeo", "error", "Deberias dejar de hacerte el chistoso, a menos que quieras conocer a tu creador, es obvio que que haria una validacion de cookies para ver si eres o no un impostor 👻💩."], 403);
                    }
                }else{
                    return response()->json(["No se encontro el usuario", "error", "Alguien estuvo manipulando los datos en tu computadora mientras no estabas, para restablecer todo cierra la sesion y vuelve a conectarte a este cuenta"], 403);
                }
            } catch (\Throwable $th) {
                return response()->json(["Operacion Fallida", "error", "Hubo un error, cualquier accion que hayas hecho se ha cancelado, por favor inicia sesion nuevamente. (Si eliminaste algo recuerda que se cancelo, aun si viste como ese elemento ha desaparecido.)"], 401);
            }

        // }else{
        //     return response()->json(["Operacion Fallida", "warning", "No Iniciaste sesion."], 401);
        // }
    }
}
