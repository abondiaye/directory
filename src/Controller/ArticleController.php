<?php

namespace App\Controller;

use App\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class ArticleController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/articles", name="list_articles")
     */
    public function list(): Response
    {
        // Récupérez la liste des articles depuis la base de données en utilisant $this->entityManager
        $articles = $this->entityManager->getRepository(Article::class)->findAll();

        return $this->render('article/index.html.twig', ['articles' => $articles]);
    }

    /**
     * @Route("/articles/add", name="add_article")
     */
    public function add(Request $request): Response
    {
        // Gérez la logique d'ajout d'un nouvel article ici

        return $this->redirectToRoute('list_articles');
    }

    /**
     * @Route("/articles/edit/{id}", name="edit_article")
     */
    public function edit(Request $request, int $id): Response
    {
        // Gérez la logique de modification d'un article ici

        return $this->redirectToRoute('list_articles');
    }

    /**
     * @Route("/articles/delete/{id}", name="delete_article")
     */
    public function delete(Request $request, int $id): Response
    {
        // Gérez la logique de suppression d'un article ici

        return $this->redirectToRoute('list_articles');
    }
}
