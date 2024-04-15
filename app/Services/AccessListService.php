<?
namespace App\Services;

use App\Models\AccessList;

class AccessListService
{
    public function findByPhoneOrIp($phone, $ip)
    {
        return AccessList::where('phone', $phone)->where('type', 'phone')->orWhere('ip', $ip)->where('type', 'ip')->first();
    }
}
