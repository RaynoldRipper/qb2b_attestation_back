<?php

namespace App\Helpers;

class JsonHelper
{
    public static function encode($array): string
    {
        $array = ArrayHelper::toArray($array);
        return json_encode($array, JSON_UNESCAPED_SLASHES);
    }

    public static function isJson($json): bool
    {
        json_decode($json);
        return json_last_error() === JSON_ERROR_NONE;
    }

    public static function decode(string $string): ?array
    {
        return (array)json_decode($string);
    }

    public static function searchInJson(string $json, array $data): ?array
    {
        $json_array = self::decode($json);
        foreach ($data as $key => $value) {
            if (isset($json_array[$key]) && $json_array[$key] == $value)
                return $json_array;
        }
        return null;
    }
}
