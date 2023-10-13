<?php

namespace App\Helpers;

class ArrayHelper
{
    public static function toObject($data)
    {
        return is_array($data) ? (object)$data : $data;
    }

    public static function toArray($data)
    {
        return is_object($data) ? (array)$data : $data;
    }
}
