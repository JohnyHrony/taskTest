<?php

namespace DefaultBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        return $this->render("DefaultBundle::index.html.twig");
    }
    /**
     * @Route("/news")
     */
    public function newsAction()
    {
        return $this->render("DefaultBundle::index.html.twig");
    }
    /**
     * @Route("/add-news")
     */
    public function addNewsAction()
    {
        return $this->render("DefaultBundle::index.html.twig");
    }
    /**
     * @Route("/singlenew")
     */
    public function addSingleNewsAction()
    {
        return $this->render("DefaultBundle::index.html.twig");
    }
}
