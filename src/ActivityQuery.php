<?php


namespace SilverStripe\SnapshotAdmin;


use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\QueryCreator;
use SilverStripe\Snapshots\Snapshot;
use SilverStripe\Snapshots\SnapshotPublishable;

class ActivityQuery extends QueryCreator
{
    public function attributes()
    {
        return [
            'name' => 'readActivity',
            'description' => 'Read the unpublished activity for a given dataobject between versions',
        ];
    }

    public function type()
    {
        return Type::listOf($this->manager->getType('SnapshotActivityEntry'));
    }

    public function args()
    {
        return [
            'origin' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The hash of the dataobject. Retrievable as the SnapshotHash field on any dataobject',
            ],
            'fromVersion' => [
                'type' => Type::int(),
                'description' => 'The version from which to start tracking activity',
            ],
            'toVersion' => [
                'type' => Type::int(),
                'description' => 'The version to track activity to'
            ],
        ];
    }

    public function resolve($obj, $args = [], $context = [])
    {
        $obj = Snapshot::get()->filter('OriginHash', $args['origin'])->first();
        if (!$obj) {
            return null;
        }
        $dataObj = $obj->Origin();
        if (!$dataObj->exists()) {
            return null;
        }
        /* @var SnapshotPublishable $obj */
        return $dataObj->getActivityFeed(
            $args['fromVersion'] ?? null,
            $args['toVersion'] ?? null
        );
    }
}
