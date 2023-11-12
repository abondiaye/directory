<?php

namespace App\Controller;

use App\Entity\Categorie;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class CategorieController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/categories", name="list_categories")
     */
    public function list(): Response
    {
        // Récupérez la liste des catégories depuis la base de données en utilisant $this->entityManager
        $categories = $this->entityManager->getRepository(Categorie::class)->findAll();

        return $this->render('categorie/list_categories.html.twig', ['categories' => $categories]);
    }

    /**
     * @Route("/categories/add", name="add_category")
     */
    public function add(Request $request): Response
    {
        // Gérez la logique d'ajout d'une nouvelle catégorie ici

        return $this->redirectToRoute('list_categories');
    }

    /**
     * @Route("/categories/edit/{id}", name="edit_category")
     */
    public function edit(Request $request, int $id): Response
    {
        // Gérez la logique de modification d'une catégorie ici

        return $this->redirectToRoute('list_categories');
    }

    /**
     * @Route("/categories/delete/{id}", name="delete_category")
     */
    public function delete(Request $request, int $id): Response
    {
        // Gérez la logique de suppression d'une catégorie ici

        return $this->redirectToRoute('list_categories');
    }
}
