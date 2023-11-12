<?php

// src/Controller/RegistrationController.php

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User; // Assurez-vous d'importer la classe User appropriée

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="registration")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        // Créez un nouvel utilisateur
        $user = new User();
        $user->setEmail('a_ndiaye@outlook.com'); // Adresse e-mail souhaitée
        $user->setRoles(['ROLE_ADMIN']); // Rôle d'administrateur
        // Vous pouvez également définir d'autres propriétés de l'utilisateur

        // Encodez le mot de passe de l'utilisateur
        $password = $passwordEncoder->encodePassword($user, 'root'); // Mot de passe souhaité
        $user->setPassword($password);

        // Enregistrez l'utilisateur en base de données
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // Redirigez vers la page de connexion ou une autre page de votre choix
        return $this->redirectToRoute('login');
    }
}


