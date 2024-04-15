<?
namespace App\Services;

use App\Models\AccessList;

class AccessListService
{
    public function findByPhoneOrIp($phone, $ip)
    {
        return AccessList::where('value', $phone)->where('type', 'phone')->orWhere('value', $ip)->where('type', 'ip')->first();
    }
}
