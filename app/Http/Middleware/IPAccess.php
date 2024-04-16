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
        $ip_array = explode('.', $ip);
        $sub_ip = $ip_array[0] . '.' . $ip_array[1];

        $sub_ip_array = ['78.153'];
        $access_ip_array = ["84.39.247.157", "95.105.74.157", "188.187.188.68", "95.25.165.68", "95.25.157.2", "95.25.160.138", "178.206.156.15", "94.180.160.174", "37.110.115.82"];
        if (!in_array($sub_ip, $sub_ip_array) && !in_array($ip, $access_ip_array)) {
            abort(403, 'Access denied.');
        }
        return $next($request);
    }
}
