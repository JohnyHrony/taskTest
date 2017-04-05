<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\View;
use AppBundle\Entity\News;

class NewsController extends FOSRestController
{
    /**
     * @Rest\Get("/news")
//     * @View(serializerEnableMaxDepthChecks=true,serializerGroups={"user"})
     */
    public function newsAction()
    {
        $restresult = $this->getDoctrine()->getRepository('AppBundle:News')->findAll();
        
        $view = $this->view($restresult, 200);
        return $this->handleView($view);
    }

    /**
     * @Rest\Get("/news/{id}")
     */
    public function newsIdAction($id)
    {
        $singleresult = $this->getDoctrine()->getRepository('AppBundle:News')->find($id);
        if ($singleresult === null) {
            $response = new Response('News not found.', Response::HTTP_NOT_FOUND);
            $response->send();
        }

        $view = $this->view($singleresult, 200);
        return $this->handleView($view);
    }

    /**
     * @Rest\POST("/createnews/")
     */
    public function createNewsAction(Request $request){
        $data = new News;
        $title = $request->get('title');
        $body = $request->get('body');
        if(empty($title) || empty($body))
        {
            $view = $this->view(['NULL VALUES ARE NOT ALLOWED.'], 200);
            return $this->handleView($view);
        }
        $data->setTitle($title);
        $data->setBody($body);
        $em = $this->getDoctrine()->getManager();
        $em->persist($data);
        $em->flush();


        $view = $this->view('News saccesfull added!', 200);
        return $this->handleView($view);
    }
}
