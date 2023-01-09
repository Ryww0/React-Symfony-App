<?php

namespace App\Controller\Api;

use App\Repository\StudentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class StudentController extends AbstractController
{
    #[Route('/api/student', name: 'app_api_student')]
    public function index(SerializerInterface $serializer, StudentRepository $studentRepository): JsonResponse
    {
        $s = $studentRepository->findAll();

        $jsonContent = $serializer->serialize($s, 'json');
        $response = new JsonResponse(
            $jsonContent,
        );

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response;
    }
}
