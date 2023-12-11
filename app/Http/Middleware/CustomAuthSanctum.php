<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomSanctumAuth
{
    public function handle(Request $request, Closure $next)
    {
        // Verificar la autenticación usando el middleware auth:sanctum
        if (!Auth::guard('sanctum')->check()) {
            return response()->json(['message' => 'Autenticación fallida'], 401);
        }

        return $next($request);
    }
}
