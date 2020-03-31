<?php


namespace SilverStripe\SnapshotAdmin;


use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\TypeCreator;

class SnapshotType extends TypeCreator
{
    public function attributes()
    {
        return [
            'name' => 'Snapshot',
            'description' => 'A versioned snapshot',
        ];
    }

    public function fields()
    {
        return [
            'ID' => ['type' => Type::id()],
            'PublishedSummary' => [
                'type' => Type::listOf(Type::string()),
                'resolve' => function ($obj) {
                    return $obj->getPublishedSummary();
                }
            ]
        ];
    }
}
