<?php


namespace SilverStripe\SnapshotAdmin;


use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\QueryCreator;
use SilverStripe\Snapshots\Snapshot;

class SnapshotQuery extends QueryCreator
{
    public function type()
    {
        return $this->manager->getType('Snapshot');
    }

    public function args()
    {
        return [
            'ID' => ['type' => Type::nonNull(Type::id())],
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'readSnapshot',
            'description' => 'Get a versioned snapshot by ID',
        ];
    }

    public function resolve($obj, $args = [], $context = [])
    {
        $snapshot = Snapshot::get()->byID($args['ID']);
        if ($snapshot->canView($context['currentUser'])) {
            return $snapshot;
        }

        return null;
    }

}
