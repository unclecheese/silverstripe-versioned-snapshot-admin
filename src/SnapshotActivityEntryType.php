<?php


namespace SilverStripe\SnapshotAdmin;


use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\TypeCreator;

class SnapshotActivityEntryType extends TypeCreator
{
    public function attributes()
    {
        return [
            'name' => 'SnapshotActivityEntry',
        ];
    }

    public function fields()
    {
        return [
            'Action' => [
                'type' => SnapshotActivityType::singleton()->getType(),
            ],
            'AuthorName' => [
                'type' => Type::string(),
            ],
            'Description' => [
                'type' => Type::string(),
            ],
            'Date' => [
                'type' => Type::string(),
            ]
        ];
    }
}
