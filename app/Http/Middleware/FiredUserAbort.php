<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class FiredUserAbort
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
        $user = $request->user();

        if ($user->status === 'FIRED')
            abort(403, 'Access denied.');

        if ($user->status === 'CANDIDATE') {
            $access = \App\Models\AccessList::where('value', $user->phone)->first();

            if (empty($access))
                abort(401, 'Access denied.');
        }

        return $next($request);
    }
}
