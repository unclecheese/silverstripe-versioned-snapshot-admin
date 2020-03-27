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
            'ActivityFeed' => [
                'type' => Type::listOf($this->manager->getType('SnapshotActivityEntry')),
                'args' => [
                    'OriginHash' => ['type' => Type::nonNull(Type::string())],
                ],
                'resolve' => function ($obj, $args = []) {
                    return $obj->getActivityFeed($args['OriginHash']);
                }
            ],
            'PublishedSummary' => [
                'type' => Type::listOf(Type::string()),
                'resolve' => function ($obj) {
                    return $obj->getPublishedSummary();
                }
            ]
        ];
    }
}
