<?php
namespace <%= projectNs %>\Models;

/**
 * @Entity
 * @Table
 */

class <%= modelName %>
{
    /**
     * @Column(type="integer")
     * @Id
     * @GeneratedValue
     */
    private $id;

    /**
     * Gets the ID
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }
}