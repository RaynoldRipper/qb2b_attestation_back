<?php

namespace App\Helpers;

class NumberHelper
{
    /**
     * Преобразование номера телефона для записи в бд
     * @param $phone_number
     * @return array|string|string[]|null
     */
    public static function phoneDBFormat($phone_number)
    {
        $phone = preg_replace('/[^\d+]+/', '', $phone_number);
        return $phone;
    }

    /**
     * Преобразование номера телефона в CRM формат
     * @param $phone_number
     * @return array|string|string[]|null
     */
    public static function phoneCRMFormat($phone_number)
    {
        $phone = preg_replace('/\D*/', '', $phone_number);
        if (substr($phone, 0, 1) == 7) $phone[0] = 8;
        return $phone;
    }

    public static function randomNumber(): int
    {
        return rand(1111, 9999);
    }
}
