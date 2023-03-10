<?php

namespace App\Controller\Api;

use App\Repository\CarRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CarsController extends AbstractController
{
    #[Route('/api/cars', name: 'app_api_cars')]
    public function index(SerializerInterface $serializer, CarRepository $carRepository): JsonResponse
    {
        $cars = $carRepository->findAll();

        $jsonContent = $serializer->serialize($cars, 'json');
        $response = new JsonResponse(
            $jsonContent,
        );

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response;
    }
}
