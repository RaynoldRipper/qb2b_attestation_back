<?php
namespace App\Services;

use Http;

class VoService
{
    private $VO_URL;
    private $VO_TOKEN;
    private $VO_HEADERS;

    public function __construct()
    {
        $this->VO_URL = config('app.env') === 'production' ? 'https://api.qb2b.ru/api/v1' : 'https://api.ziki.work.gd/api/v1';
        $this->VO_TOKEN = '40|BBzydBZQ9bIaGS8EhRgXKhKXAeBe7p7fqFVyCk9hbf68b018';
        $this->VO_HEADERS = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $this->VO_TOKEN,
        ];
    }

    public function getVoUrl($endpoint = '')
    {
        if ($endpoint) {
            return $this->VO_URL . $endpoint;
        }
        return $this->VO_URL;
    }

    public function registerEmployee($data)
    {
        $response = Http::withHeaders($this->VO_HEADERS)
            ->post($this->getVoUrl('/users'), $data);

        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Failed to register employer: ' . $response->body());
    }

    public function findUserByPhone($phone)
    {
        $response = Http::withHeaders($this->VO_HEADERS)
            ->get($this->getVoUrl('/users/phone/' . $phone));

        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Failed to check user by phone: ' . $response->body());
    }
}