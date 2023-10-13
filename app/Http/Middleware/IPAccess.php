<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IPAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $ip = $_SERVER['REMOTE_ADDR'];
        $ip = explode('.', $ip);
        $ip = $ip[0] . '.' . $ip[1];

        $ip_array = ['78.153', '172.27', '46.30'];
        if (!in_array($ip, $ip_array)) {
            abort(403, 'Access denided.');
        }
        return $next($request);
    }
}
